import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull'

@Injectable()
export class OrderService {
    constructor(@InjectQueue('order') private orderQueue: Queue, private logger: Logger) { }

    async createOrder(dto) {
        const addOrderToQueue = await this.orderQueue.add(dto)
        this.logger.warn('Consumer added event to Order queue: ', addOrderToQueue)
    }
}
