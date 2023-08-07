import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDto } from './dto/Create.dto';
import { CalculationService } from './calculation.service';

@Controller('/')
export class CalculationController {
  constructor(private readonly calculationService: CalculationService) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.calculationService.create(createDto);
  }

  @Get()
  findAll() {
    return this.calculationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calculationService.findOne(id);
  }
}
