import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  Query,
  Param,
} from '@nestjs/common';
import { FormService } from './form.service';
import { FormDto } from './dto/form.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { query } from 'express';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get(':formType')
  getStructure(@Param('formType') formType: string) {
    return this.formService.getStructure(formType);
  }

  @Get()
  queryFormWithFilters(@Query() AllFilters: any) {
    const { name, age, lastname }: Partial<FormDto> = AllFilters;
    const query: Partial<FormDto> = {};
    name && (query.name = name);
    age && (query.age = age);
    lastname && (query.lastname = lastname);

    return this.formService.queryFormWithFilters({
      ...query,
    });
  }

  @Post()
  async saveData(@Body() FormDto: FormDto) {
    try {
      return await this.formService.saveData(FormDto);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: err,
        },
        HttpStatus.BAD_REQUEST,
        { cause: err },
      );
    }
  }
}
