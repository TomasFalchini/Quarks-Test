import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Form {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  age: number;
}

export const FormSchema = SchemaFactory.createForClass(Form);

/* 
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "lastname": {
      "type": "string"
    },
    "age": {
      "type": "number"
    },
    "birthday": {
      "type": "string",
      "format": "date"
    }
  },
  "required": [
    "name",
    "lastname",
    "age",
    "birthday"
  ]
}

*/
