import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule, InjectModel } from '@nestjs/mongoose';
import { AppSchema } from './app.schema';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import {AppResolver} from './app.resolver';
import { CreateGetUsernameDto } from './dto/create-get-username.dto';
import { MulterModule } from '@nestjs/platform-express';
import {diskStorage} from 'multer';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: true,
      context: async ({ req }) => {
       const token = req.headers.authorization || '';
       const username = req.headers.username || '';
       return {username};
       },
    }),

    MongooseModule.forRoot("mongodb://zaid123:chemistry1Zu!@ds121295.mlab.com:21295/oneminute",{ useNewUrlParser: true }),
    
    MongooseModule.forFeature([{ name: 'App', schema: AppSchema, }]),
    AuthModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './src/images/'
        , filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
          cb(null, `${randomName}${file.originalname}`);
        },
      }),

    }),

  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {
  constructor(){
  }
  }
 

