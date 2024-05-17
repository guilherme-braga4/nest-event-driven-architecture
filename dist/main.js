"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT || 3000);
    const logger = new common_1.Logger();
    logger.log('The server is listening on port ' + process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map