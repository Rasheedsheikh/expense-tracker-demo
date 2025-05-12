import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExpenseTrackingDto } from './dto/create-expense-tracking.dto';
import { UpdateExpenseTrackingDto } from './dto/update-expense-tracking.dto';
import { ExpenseTracking } from './entities/expense-tracking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExpenseTrackingService {
  constructor(
    @InjectRepository(ExpenseTracking)
    private expenseRepo: Repository<ExpenseTracking>,
  ) {}
  async create(createExpenseDto: CreateExpenseTrackingDto): Promise<ExpenseTracking> {
    const newExpense = this.expenseRepo.create(createExpenseDto);
    return this.expenseRepo.save(newExpense);
  }

  async findAll(): Promise<ExpenseTracking[]> {
    return this.expenseRepo.find();
  }

  async delete(id: number): Promise<void> {
    const result = await this.expenseRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Expense with ID ${id} not found`);
    }
  }
}
