import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';

export class PaymentService {
    constructor() { }
    async getPaymentStatus(orderStatus: string) {
        // Consumer 
        if (orderStatus === "Pending") {
            // Send email to the customer
            console.log('Sending email to user about the order....')
        }
        return;
    }
}
