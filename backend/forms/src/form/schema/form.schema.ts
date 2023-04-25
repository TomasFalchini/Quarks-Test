import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Form {
  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  age: number;

  @Prop()
  birthday: Date;
}

export const FormSchema = SchemaFactory.createForClass(Form);
