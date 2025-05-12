import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/entities/auth.entity';
import { ExpenseTrackingModule } from './expense-tracking/expense-tracking.module';
import { ExpenseTracking } from './expense-tracking/entities/expense-tracking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Rasheed9@mysql',
      database: 'expense-tracker',
      entities: [Auth,ExpenseTracking],
      synchronize: true
    }),
    AuthModule,
    ExpenseTrackingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
