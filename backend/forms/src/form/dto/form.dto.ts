import {
  IsNotEmpty,
  IsPositive,
  IsDate,
  IsString,
  IsNumber,
  Max,
  Min,
  MinDate,
  IsEmpty,
} from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

export class FormDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsPositive()
  @IsNumber()
  @Max(100)
  @Min(1)
  age: number;
}

export const FormSchemaJson = validationMetadatasToSchemas();
