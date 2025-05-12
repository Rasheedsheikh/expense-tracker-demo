import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenseTrackingDto } from './create-expense-tracking.dto';

export class UpdateExpenseTrackingDto extends PartialType(CreateExpenseTrackingDto) {}
