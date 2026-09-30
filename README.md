# NestJS Event-Driven Architecture

Proof of concept of asynchronous, queue-based processing with **NestJS**, **Bull** and **Redis**. An HTTP endpoint publishes an order to a queue and answers as soon as the job is queued. A consumer processes the order in the background and calls the payment step.

## How it works

```
POST /order -> OrderService (producer) -> Redis queue "order" -> OrderConsumer (worker) -> PaymentService
```

1. `OrderController` receives the order and hands it to `OrderService`.
2. `OrderService` adds the payload as a job to the `order` queue.
3. `OrderConsumer` picks the job from the queue and calls `PaymentService`.
4. `PaymentService` checks the order status. When it is `Pending`, it simulates the customer notification with a log.

The HTTP request does not wait for the processing. Producer and consumer only share the queue.

## Stack

- NestJS 10 and TypeScript
- `@nestjs/bull` with Bull 4
- Redis
- Bull Board 5 (queue dashboard)

## Running

Requirements: Node.js 18 or later, Yarn and a Redis instance on `localhost:6379`.

Start Redis with Docker:

```bash
docker run -d --name redis -p 6379:6379 redis
```

Install and start the API:

```bash
git clone https://github.com/guilherme-braga4/nest-event-driven-architecture.git
cd nest-event-driven-architecture
yarn install
yarn start:dev
```

Publish an order:

```bash
curl -X POST http://localhost:3000/order \
  -H "Content-Type: application/json" \
  -d '{"orderId": 1, "product": "Alexa", "status": "Pending"}'
```

Each step writes to the console: the job added to the queue, the job received by the consumer and the notification message of the payment step. Sample requests are in `requests.http`.

## Endpoints

| Method | Route | Description |
|---|---|---|
| `POST` | `/order` | Publishes the request body as a job in the `order` queue |
| `GET` | `/queues` | Bull Board dashboard |
| `GET` | `/` | Default route (`Hello World!`) |

## Project structure

```
src/
  app.module.ts          Redis connection and Bull Board setup
  order/
    order.controller.ts  POST /order
    order.service.ts     Producer: adds jobs to the queue
    order.consumer.ts    Consumer: processes jobs from the queue
  payment/
    payment.service.ts   Payment step called by the consumer
```

## Next steps

- Read the Redis host and port from environment variables (today they are fixed in `app.module.ts`).
- Validate the order payload with a DTO.
- Register the queue in Bull Board with `BullAdapter`, the adapter made for Bull.
- Replace the placeholder volume paths in `docker-compose.yml`.
- Add retries, a dead-letter strategy and automated tests.
