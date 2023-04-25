import { Injectable } from '@nestjs/common';
import { FormDto } from './dto/form.dto';

@Injectable()
export class FormService {
  saveData(FormDto: FormDto) {
    return 'This action adds a new form';
  }

  getStructure() {
    return `This action returns all form`;
  }
}
