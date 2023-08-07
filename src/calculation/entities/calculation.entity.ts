import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CalculationDocument = HydratedDocument<Calculation>;

@Schema()
export class Calculation {
  @Prop()
  solarPanelQuantity: number;

  @Prop()
  microinverterQuantity: number;

  @Prop()
  solarPanelLength: number;

  @Prop()
  availableArea: number;
}

export const CalculationSchema = SchemaFactory.createForClass(Calculation);
