import { Injectable } from '@nestjs/common';
import { FormDto } from './dto/form.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormDocument } from './schema/form.schema';

@Injectable()
export class FormService {
  constructor(@InjectModel('formA') private formModel: Model<FormDocument>) {}

  saveData(FormDto: FormDto) {
    return 'This action adds a new form';
  }

  getStructure() {
    return `This action returns all form`;
  }
}
