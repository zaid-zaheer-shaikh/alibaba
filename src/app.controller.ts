import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { REPL_MODE_SLOPPY } from 'repl';
import date from 'date-and-time';

@Controller('namer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ali')
  getHello(): any {
    const now = new Date();
    return date.format(now, 'YYYY/MM/DD HH:mm:ss');
     
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
