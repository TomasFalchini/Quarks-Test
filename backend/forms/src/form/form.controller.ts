import { Controller, Get, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { FormDto } from './dto/form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  saveData(@Body() FormDto: FormDto) {
    return this.formService.saveData(FormDto);
  }

  @Get()
  getStructure() {
    return this.formService.getStructure();
  }
}
