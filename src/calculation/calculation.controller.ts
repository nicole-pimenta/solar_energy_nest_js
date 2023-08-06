import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculationRepository } from './calculation.repository';
import { CreateDto } from './dto/Create.dto';

@Controller('/')
export class CalculationController {
  constructor(private calculationRepository: CalculationRepository) {}

  @Post()
  async create(@Body() payload: CreateDto) {
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
