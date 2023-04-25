import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

import { Document } from 'mongoose';

export type FormDocument = FormB & Document;

@Schema()
export class FormB {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  birthday: Date;
}

export const FormSchemaB = SchemaFactory.createForClass(FormB);

export const FormSchemaJsonB = validationMetadatasToSchemas();
