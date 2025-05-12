import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseTrackingService } from './expense-tracking.service';

describe('ExpenseTrackingService', () => {
  let service: ExpenseTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseTrackingService],
    }).compile();

    service = module.get<ExpenseTrackingService>(ExpenseTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
