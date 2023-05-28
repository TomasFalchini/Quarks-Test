import { Injectable } from '@nestjs/common';
import { FormDto, FormSchemaJson } from './dto/form.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions, Document, FilterQuery, Types } from 'mongoose';
import { FormDocument } from './entities/form.entity';
import { OtherFormSchemaJson } from './dto/otherForm.dto';

@Injectable()
export class FormService {
  constructor(@InjectModel('formA') private formModel: Model<FormDocument>) {}

  getFormStructure(formType: string) {
    switch (formType) {
      case 'A':
        return FormSchemaJson.FormDto;
      case 'B':
        return OtherFormSchemaJson.OtherFormDto;
    }
  }

  async saveData(formDto: FormDto, id?: string) {
    const query: FilterQuery<FormDto> = { _id: id ? id : new Types.ObjectId() };
    const options: QueryOptions<FormDto> = {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
      runValidators: true,
    };
    const response: Document<FormDto> | null =
      await this.formModel.findOneAndUpdate(query, formDto, options);

    if (!response) {
      return null;
    }
    return response._id;
  }

  async queryFormWithFilters(querys: Partial<FormDto>) {
    const query: QueryOptions<FormDto> = {
      ...querys,
    };
    const docs: Document<FormDto>[] = await this.formModel
      .find(query)
      .select('-__v -_id');
    if (docs.length) {
      return docs.map((d) => d.toObject());
    }
    return [];
  }
}
