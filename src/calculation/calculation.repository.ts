import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculationRepository {
  private database = [];

  async save(calculation) {
    this.database.push(calculation);
  }

  async read() {
    return this.database;
  }

  async readById() {
    return this.database;
  }
}
