import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDto } from './dto/Create.dto';
import { Calculation } from './entities/calculation.entity';

@Injectable()
export class CalculationService {
  constructor(
    @InjectModel(Calculation.name) private calculationModel: Model<Calculation>,
  ) {}

  async create(createDto: CreateDto): Promise<Calculation> {
    const createdCat = new this.calculationModel(createDto);
    return createdCat.save();
  }
  // private database = [];
  // async save(calculation) {
  //   this.database.push(calculation);
  // }
  // async read() {
  //   return this.database;
  // }
  // async readById(id: string) {
  //   const findItem = this.database.find((item) => item.id === id);
  //   return findItem !== undefined;
  // }
}
