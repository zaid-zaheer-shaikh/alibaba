import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { REPL_MODE_SLOPPY } from 'repl';
import * as even from 'is-even';

@Controller('namer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get('maaz')
  getHello1(): string {
    return this.appService.getHello();
  }
  @Get('jabbar')
  setter():string {
     return "Hello world"; 
  }
  
}
