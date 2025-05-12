import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseTrackingController } from './expense-tracking.controller';
import { ExpenseTrackingService } from './expense-tracking.service';

describe('ExpenseTrackingController', () => {
  let controller: ExpenseTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseTrackingController],
      providers: [ExpenseTrackingService],
    }).compile();

    controller = module.get<ExpenseTrackingController>(ExpenseTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
