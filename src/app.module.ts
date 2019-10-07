import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule, InjectModel } from '@nestjs/mongoose';
import {AppSchema} from './app.schema';

@Module({
  imports: [ MongooseModule.forRoot("mongodb://zaid123:chemistry1Zu!@ds121295.mlab.com:21295/oneminute",{ useNewUrlParser: true }),
    
  MongooseModule.forFeature([{ name: 'App', schema: AppSchema, }]),],
  controllers: [AppController],
  providers: [AppService],
 
})
export class AppModule {}
