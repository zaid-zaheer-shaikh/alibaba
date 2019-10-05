import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('namer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ali')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('maaz')
  getHello1(): string {
    return this.appService.getHello();
  }
  
}
