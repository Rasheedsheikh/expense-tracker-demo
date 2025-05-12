import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateExpenseTrackingDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsEnum(['Income', 'Expense'])
  @IsNotEmpty()
  category: 'Income' | 'Expense';

  @IsOptional()
  @IsString()
  description?: string;
}
