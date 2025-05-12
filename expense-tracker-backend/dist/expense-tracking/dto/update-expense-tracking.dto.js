"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExpenseTrackingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_expense_tracking_dto_1 = require("./create-expense-tracking.dto");
class UpdateExpenseTrackingDto extends (0, mapped_types_1.PartialType)(create_expense_tracking_dto_1.CreateExpenseTrackingDto) {
}
exports.UpdateExpenseTrackingDto = UpdateExpenseTrackingDto;
//# sourceMappingURL=update-expense-tracking.dto.js.map