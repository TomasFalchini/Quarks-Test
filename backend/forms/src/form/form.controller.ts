import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';
import { FormService } from './form.service';
import { FormDto } from './dto/form.dto';
import { HttpException } from '@nestjs/common/exceptions';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

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

  @Get()
  getStructure() {
    return this.formService.getStructure();
  }
}
