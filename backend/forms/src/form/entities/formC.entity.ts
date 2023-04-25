import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

import { Document } from 'mongoose';

export type FormDocument = FormC & Document;

@Schema()
export class FormC {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  birthday: Date;
}

export const FormSchemaC = SchemaFactory.createForClass(FormC);

export const FormSchemaJsonC = validationMetadatasToSchemas();
