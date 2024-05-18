"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullConfigService = void 0;
const common_1 = require("@nestjs/common");
const sua_fila_1 = require("../sua-fila");
let BullConfigService = class BullConfigService {
    createQueuesOptions() {
        return [
            new BullAdapter(sua_fila_1.SomeQueue),
            new BullAdapter(sua_fila_1.SomeOtherQueue),
            new BullMQAdapter(sua_fila_1.QueueMQ)
        ];
    }
};
exports.BullConfigService = BullConfigService;
exports.BullConfigService = BullConfigService = __decorate([
    (0, common_1.Injectable)()
], BullConfigService);
//# sourceMappingURL=bull.config.js.map