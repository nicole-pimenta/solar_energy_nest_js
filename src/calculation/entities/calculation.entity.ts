import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CalculationDocument = HydratedDocument<Calculation>;

@Schema()
export class Calculation {
  @Prop()
  energy: number;

  @Prop()
  width: number;

  @Prop()
  height: string;
}

export const CalculationSchema = SchemaFactory.createForClass(Calculation);
