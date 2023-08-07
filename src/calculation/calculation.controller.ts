import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDto } from './dto/Create.dto';

import { CalculationService } from './calculation.service';
import {
  availableTotalArea,
  calculateMicroinverterQuantity,
  calculateSolarPanelQuantity,
  solarPanelTotalLength,
} from './utils/calculation.utils';

@Controller('/')
export class CalculationController {
  constructor(private readonly calculationService: CalculationService) {}

  @Post()
  create(@Body() payload: CreateDto) {
    const solarPanelQuantity = calculateSolarPanelQuantity(payload.energy);
    const microinverterQuantity =
      calculateMicroinverterQuantity(solarPanelQuantity);

    const solarPanelLength = solarPanelTotalLength(solarPanelQuantity);

    const availableArea = availableTotalArea(payload.width, payload.height);

    const solarSystemData = {
      solarPanelQuantity,
      microinverterQuantity,
      solarPanelLength,
      availableArea,
    };
    return this.calculationService.create(solarSystemData);
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
