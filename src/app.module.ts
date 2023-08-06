import { Module } from '@nestjs/common';
import { CalculationController } from './calculation.controller';

@Module({
  imports: [],
  controllers: [CalculationController],
  providers: [],
})
export class AppModule {}
