"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    constructor() { }
    async getPaymentStatus(orderStatus) {
        if (orderStatus === "Pending") {
            console.log('Sending email to user about the order....');
        }
        return;
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map