import { Module } from '@nestjs/common';
import { Payment } from './Payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
})
export class PaymentsModule {}
