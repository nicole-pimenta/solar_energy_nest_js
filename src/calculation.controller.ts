import { Body, Controller, Post } from '@nestjs/common';
import { CalculationRepository } from './calculation.repository';

@Controller('/')
export class CalculationController {
  private calculationRepository = new CalculationRepository();

  @Post()
  async create(@Body() payload) {
    this.calculationRepository.save(payload);
    return { status: payload };
  }
}
