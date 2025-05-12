import { ExpenseTrackingService } from './expense-tracking.service';
import { CreateExpenseTrackingDto } from './dto/create-expense-tracking.dto';
import { ExpenseTracking } from './entities/expense-tracking.entity';
export declare class ExpenseTrackingController {
    private readonly expenseTrackingService;
    constructor(expenseTrackingService: ExpenseTrackingService);
    create(createExpenseDto: CreateExpenseTrackingDto): Promise<ExpenseTracking>;
    findAll(): Promise<ExpenseTracking[]>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
