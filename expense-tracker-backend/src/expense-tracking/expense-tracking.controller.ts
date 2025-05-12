import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ExpenseTrackingService } from './expense-tracking.service';
import { CreateExpenseTrackingDto } from './dto/create-expense-tracking.dto';
import { UpdateExpenseTrackingDto } from './dto/update-expense-tracking.dto';
import { ExpenseTracking } from './entities/expense-tracking.entity';

@Controller('expense-tracking')
export class ExpenseTrackingController {
  constructor(private readonly expenseTrackingService: ExpenseTrackingService) {}

  @Post()
  async create(@Body() createExpenseDto: CreateExpenseTrackingDto): Promise<ExpenseTracking> {
    return this.expenseTrackingService.create(createExpenseDto);
  }

  @Get()
  async findAll(): Promise<ExpenseTracking[]> {
    return this.expenseTrackingService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    await this.expenseTrackingService.delete(id);
    return { message: `Expense with ID ${id} deleted successfully` };
  }




}
