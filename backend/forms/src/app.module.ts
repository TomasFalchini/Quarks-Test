import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('URI MONGO DB en .ENV'), FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
