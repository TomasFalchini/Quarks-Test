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
import { FormDto, isAKeyOfFormDto } from './dto/form.dto';
import { HttpException } from '@nestjs/common/exceptions';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get(':formType')
  getStructure(@Param('formType') formType: string) {
    return this.formService.getFormStructure(formType);
  }

  @Get()
  queryFormWithFilters(@Query() filters: Record<string, any>) {
    const query: Record<string, any> = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (isAKeyOfFormDto(key)) {
        query[key] = value;
      }
    });

    return this.formService.queryFormWithFilters(query);
  }

  @Post()
  async saveData(@Body() FormDto: FormDto) {
    try {
      return await this.formService.saveData(FormDto);
    } catch (err) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: err,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
