import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'src/config/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://usuariofalchini:${config.dbConnectionPassword}@cluster1.rlhub0y.mongodb.net`,
    ),
    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
