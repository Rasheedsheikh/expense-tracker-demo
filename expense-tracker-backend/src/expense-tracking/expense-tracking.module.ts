import { Module } from '@nestjs/common';
import { ExpenseTrackingService } from './expense-tracking.service';
import { ExpenseTrackingController } from './expense-tracking.controller';
import { ExpenseTracking } from './entities/expense-tracking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseTracking])],
  controllers: [ExpenseTrackingController],
  providers: [ExpenseTrackingService],
})
export class ExpenseTrackingModule {}
