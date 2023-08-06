import { Module } from '@nestjs/common';
import { CalculationController } from './calculation.controller';
import { CalculationRepository } from './calculation.repository';

@Module({
  controllers: [CalculationController],
  providers: [CalculationRepository],
})
export class CalculationModule {}
