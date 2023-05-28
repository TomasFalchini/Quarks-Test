import {
  IsNotEmpty,
  IsPositive,
  IsString,
  IsNumber,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

export class OtherFormDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;

  @IsPositive()
  @IsNumber()
  ammount: number;
}

export const OtherFormSchemaJson = validationMetadatasToSchemas();

export const isAKeyOfOtherFormDto = (key: string) => {
  return (
    key === 'username' ||
    key === 'email' ||
    key === 'password' ||
    key === 'ammount'
  );
};
