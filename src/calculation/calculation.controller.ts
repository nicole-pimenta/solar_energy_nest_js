import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDto } from './dto/Create.dto';

import { v4 as uuid } from 'uuid';

@Controller('/')
export class CalculationController {
  @Post()
  async create() {
    // const calculationEntity = new CalculationEntity();
    // calculationEntity.energy = payload.energy;
    // calculationEntity.height = payload.height;
    // calculationEntity.width = payload.width;
    // calculationEntity.id = uuid();
    // this.calculationRepository.save(calculationEntity);
    // return calculationEntity;
  }

  @Get()
  async read() {
    // return this.calculationRepository.read();
  }

  @Get(':id')
  async readById() {
    // return this.calculationRepository.readById(id);
  }
}
