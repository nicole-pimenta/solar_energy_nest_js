export class CalculationRepository {
  private database = [];

  async save(calculation) {
    this.database.push(calculation);
    console.log(this.database);
  }
}
