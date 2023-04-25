import {
  IsNotEmpty,
  IsPositive,
  IsDate,
  IsString,
  IsNumber,
  Max,
  Min,
  MinDate,
} from 'class-validator';

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

  @IsDate()
  @MinDate(new Date('01/01/1924'))
  birthday: Date;
}
