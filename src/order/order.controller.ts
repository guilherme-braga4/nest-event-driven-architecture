import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Post()
    async addOrder(@Body() dto: any) {
        await this.orderService.createOrder(dto)
    }
}
