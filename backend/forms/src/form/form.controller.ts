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

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get(':formType')
  getStructure(@Param('formType') formType: string) {
    return this.formService.getStructure(formType);
  }

  @Get()
  queryFormWithFilters(@Query() AllFilters: Partial<FormDto>) {
    return this.formService.queryFormWithFilters(AllFilters);
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
