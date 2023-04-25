import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FormSchema } from './schema/form.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'formA', schema: FormSchema }])],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
