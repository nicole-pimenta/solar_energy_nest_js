import { Injectable } from '@nestjs/common';
import { CalculationEntity } from './entities/calculation.entity';

@Injectable()
export class CalculationRepository {
  private database: CalculationEntity[] = [];

  async save(calculation: CalculationEntity) {
    this.database.push(calculation);
  }

  async read() {
    return this.database;
  }

  async readById(id: string) {
    const findItem = this.database.find((item) => item.id === id);

    return findItem !== undefined;
  }
}
