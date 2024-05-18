import { Logger } from '@nestjs/common';
import { Queue } from 'bull';
export declare class OrderService {
    private orderQueue;
    private logger;
    constructor(orderQueue: Queue, logger: Logger);
    createOrder(dto: any): Promise<void>;
}
