import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

import { Document } from 'mongoose';

export type FormDDocument = FormD & Document;

@Schema()
export class FormD {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  birthday: Date;
}

export const FormSchemaD = SchemaFactory.createForClass(FormD);

export const FormSchemaJsonD = validationMetadatasToSchemas();
