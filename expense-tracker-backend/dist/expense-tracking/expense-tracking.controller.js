"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseTrackingController = void 0;
const common_1 = require("@nestjs/common");
const expense_tracking_service_1 = require("./expense-tracking.service");
const create_expense_tracking_dto_1 = require("./dto/create-expense-tracking.dto");
let ExpenseTrackingController = class ExpenseTrackingController {
    constructor(expenseTrackingService) {
        this.expenseTrackingService = expenseTrackingService;
    }
    async create(createExpenseDto) {
        return this.expenseTrackingService.create(createExpenseDto);
    }
    async findAll() {
        return this.expenseTrackingService.findAll();
    }
    async remove(id) {
        await this.expenseTrackingService.delete(id);
        return { message: `Expense with ID ${id} deleted successfully` };
    }
};
exports.ExpenseTrackingController = ExpenseTrackingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_expense_tracking_dto_1.CreateExpenseTrackingDto]),
    __metadata("design:returntype", Promise)
], ExpenseTrackingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExpenseTrackingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExpenseTrackingController.prototype, "remove", null);
exports.ExpenseTrackingController = ExpenseTrackingController = __decorate([
    (0, common_1.Controller)('expense-tracking'),
    __metadata("design:paramtypes", [expense_tracking_service_1.ExpenseTrackingService])
], ExpenseTrackingController);
//# sourceMappingURL=expense-tracking.controller.js.map