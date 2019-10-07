import { Controller, Get, Body, Post, UseInterceptors, UploadedFile, Param, Headers, Res, Req} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import { AppService } from './app.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { Registration } from './interface/registration.interface';
import { CreateCheckUsernameDto } from './dto/create-checkusername.dto';
import { CreateGetUsernameDto } from './dto/create-get-username.dto';
@Controller('binaryImage')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('checkusername')
  async checkUsername(
    @Body() createObj: CreateGetUsernameDto,
  ): Promise<boolean> {
    const result = await this.appService.checkUsername(createObj);
    if (result) {
      return true;
    } else {
      return false;
    }
  }
  @Get('checkHello')
  async checkHello(): Promise <string> {
     return 'Hello world';
  }
  @Get('namer')
  async getHello():Promise<string> {
     return "namer"
  }
  @Post(':username')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Param('username') username) {
    console.log(username);
    const result = await this.appService.setBinaryImage(username, file.filename);
    return result;
  }
  @Get(':username')
  // @UseInterceptors(FileInterceptor('file'))
  async getBinaryImage( @Param('username') username, @Res() res): Promise<any> {
       console.log(username);
       res.sendFile(`/Users/zaidshaikh/votexserver/src/images/b39ea10ef50212d7161b2fd6a28ef4104zaid.png`);
   }
  }
