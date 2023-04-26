import { Controller, Get, Post, Body, HttpStatus, Query } from '@nestjs/common';
import { FormService } from './form.service';
import { FormDto } from './dto/form.dto';
import { HttpException } from '@nestjs/common/exceptions';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  getStructure(@Query('formType') formType: string) {
    return this.formService.getStructure(formType);
  }

  @Post()
  async saveData(@Body() FormDto: FormDto) {
    try {
      return await this.formService.saveData(FormDto);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'There must be something bad with the data you hace completed',
        },
        HttpStatus.BAD_REQUEST,
        { cause: err },
      );
    }
  }
}
