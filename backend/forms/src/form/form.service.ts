import { Injectable } from '@nestjs/common';
import { FormDto } from './dto/form.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormDocument } from './entities/form.entity';

@Injectable()
export class FormService {
  constructor(@InjectModel('formA') private formModel: Model<FormDocument>) {}

  getStructure() {
    return this.formModel.findOne({ name: 'Default' });
  }

  async saveData(FormDto: FormDto) {
    const data = await this.formModel.create(FormDto);
    await data.save();
    return 'This action save the form data in the database';
  }
}
