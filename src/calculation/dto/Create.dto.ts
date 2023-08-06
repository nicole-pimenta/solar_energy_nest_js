import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDto {
  @IsNumber()
  @IsNotEmpty()
  energy: number;

  @IsNumber()
  @IsNotEmpty()
  width: number;

  @IsNumber()
  @IsNotEmpty()
  height: number;
}
