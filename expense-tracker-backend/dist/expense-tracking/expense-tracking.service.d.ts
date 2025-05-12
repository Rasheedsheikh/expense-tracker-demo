import { CreateExpenseTrackingDto } from './dto/create-expense-tracking.dto';
import { ExpenseTracking } from './entities/expense-tracking.entity';
import { Repository } from 'typeorm';
export declare class ExpenseTrackingService {
    private expenseRepo;
    constructor(expenseRepo: Repository<ExpenseTracking>);
    create(createExpenseDto: CreateExpenseTrackingDto): Promise<ExpenseTracking>;
    findAll(): Promise<ExpenseTracking[]>;
    delete(id: number): Promise<void>;
}
