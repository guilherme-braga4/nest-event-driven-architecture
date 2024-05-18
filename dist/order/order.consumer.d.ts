import { Job } from 'bull';
import { PaymentService } from 'src/payment/payment.service';
export declare class OrderConsumer {
    private paymentService;
    constructor(paymentService: PaymentService);
    transcode(job: Job<unknown | any>): Promise<void>;
}
