import { Module } from '@nestjs/common';
import { CalculationModule } from './calculation/calculation.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), CalculationModule],
})
export class AppModule {}
