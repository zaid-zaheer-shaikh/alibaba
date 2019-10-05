import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { REPL_MODE_SLOPPY } from 'repl';
import * as even from 'is-even';

@Controller('namer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ali')
  async getHello(): Promise<any > {
    const now = new Date();
     await even(2); 
     return "Hello world";
     
  }
  @Get('maaz')
  getHello1(): string {
    return this.appService.getHello();
  }
  @Get('jabbar')
  setter():string {
     return "Hello world"; 
  }
  
}
