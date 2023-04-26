import { Injectable } from '@nestjs/common';
import { FormDto, FormSchemaJson } from './dto/form.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormDocument } from './entities/form.entity';

@Injectable()
export class FormService {
  constructor(@InjectModel('formA') private formModel: Model<FormDocument>) {}

  getStructure(formType: string) {
    switch (formType) {
      case 'A':
        return FormSchemaJson;
      case 'B':
        return;
    }
  }

  async saveData(FormDto: FormDto) {
    const data = await this.formModel.create(FormDto);
    await data.save();
    return 'This action save the form data in the database';
  }

  async queryFormWithFilters(querys: any[]) {
    const docs = await this.formModel.find({ ...querys });

    return docs;
  }
}
