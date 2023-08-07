import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDto } from './dto/Create.dto';
import {
  Calculation,
  CalculationDocument,
} from './entities/calculation.entity';

@Injectable()
export class CalculationService {
  constructor(
    @InjectModel(Calculation.name)
    private calculationModel: Model<CalculationDocument>,
  ) {}

  create(createDto: CreateDto): Promise<Calculation> {
    const calculation = new this.calculationModel(createDto);
    return calculation.save();
  }

  findAll() {
    return this.calculationModel.find();
  }

  findOne(id: string) {
    return this.calculationModel.findById(id);
  }
}
