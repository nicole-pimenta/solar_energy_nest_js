import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CalculationRepository } from './calculation.repository';
import { CreateDto } from './dto/Create.dto';
import { CalculationEntity } from './entities/calculation.entity';
import { v4 as uuid } from 'uuid';

@Controller('/')
export class CalculationController {
  constructor(private calculationRepository: CalculationRepository) {}

  @Post()
  async create(@Body() payload: CreateDto) {
    const calculationEntity = new CalculationEntity();

    calculationEntity.energy = payload.energy;
    calculationEntity.height = payload.height;
    calculationEntity.width = payload.width;
    calculationEntity.id = uuid();

    this.calculationRepository.save(calculationEntity);
    return calculationEntity;
  }

  @Get()
  async read() {
    return this.calculationRepository.read();
  }

  @Get(':id')
  async readById(@Param('id') id: string) {
    return this.calculationRepository.readById(id);
  }
}
