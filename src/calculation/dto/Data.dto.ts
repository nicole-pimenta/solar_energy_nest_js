import { IsNotEmpty, IsNumber } from 'class-validator';

export class DataDto {
  @IsNumber()
  @IsNotEmpty()
  solarPanelQuantity: number;

  @IsNumber()
  @IsNotEmpty()
  microinverterQuantity: number;

  @IsNumber()
  @IsNotEmpty()
  solarPanelLength: number;

  @IsNumber()
  @IsNotEmpty()
  availableArea: number;
}
