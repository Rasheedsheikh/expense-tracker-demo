"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseTrackingModule = void 0;
const common_1 = require("@nestjs/common");
const expense_tracking_service_1 = require("./expense-tracking.service");
const expense_tracking_controller_1 = require("./expense-tracking.controller");
const expense_tracking_entity_1 = require("./entities/expense-tracking.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ExpenseTrackingModule = class ExpenseTrackingModule {
};
exports.ExpenseTrackingModule = ExpenseTrackingModule;
exports.ExpenseTrackingModule = ExpenseTrackingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([expense_tracking_entity_1.ExpenseTracking])],
        controllers: [expense_tracking_controller_1.ExpenseTrackingController],
        providers: [expense_tracking_service_1.ExpenseTrackingService],
    })
], ExpenseTrackingModule);
//# sourceMappingURL=expense-tracking.module.js.map