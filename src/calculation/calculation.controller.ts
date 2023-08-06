import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculationRepository } from './calculation.repository';

@Controller('/')
export class CalculationController {
  constructor(private calculationRepository: CalculationRepository) {}

  @Post()
  async create(@Body() payload) {
    this.calculationRepository.save(payload);
    return { status: payload };
  }

  @Get()
  async read() {
    return this.calculationRepository.read();
  }

  @Get()
  async readById() {
    return this.calculationRepository.readById();
  }
}
