import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { PaymentService } from 'src/payment/payment.service';

@Processor('order')
export class OrderConsumer {
    constructor(private paymentService: PaymentService) { }

    @Process()
    async transcode(job: Job<unknown | any>) {
        console.log("Order Consumer :", job)
        await this.paymentService.getPaymentStatus(job.data?.status)
    }
}
