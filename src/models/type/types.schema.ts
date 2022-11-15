import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TypeDocument = HydratedDocument<Type>;

@Schema()
export class Type {
  @Prop()
  name: string;

  @Prop()
  weaknesses: [String];

  @Prop()
  immunes: [string];
  
  @Prop()
  strengths: [string];
}

export const TypeSchema = SchemaFactory.createForClass(Type);