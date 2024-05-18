import { Logger, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { BullModule } from '@nestjs/bull';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { OrderConsumer } from './order.consumer';
import { PaymentModule } from 'src/payment/payment.module';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: 'order' }
    ),
    BullBoardModule.forFeature({
      name: 'order',
      adapter: BullMQAdapter, //or use BullAdapter if you're using bull instead of bullMQ
    }),
    PaymentModule
  ],
  controllers: [OrderController],
  providers: [
    Logger,
    OrderService,
    OrderConsumer
  ]
})
export class OrderModule { }
