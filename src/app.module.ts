import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceControllersController } from './controllers/invoice-controllers/invoice-controllers.controller';

@Module({
  imports: [],
  controllers: [AppController, InvoiceControllersController],
  providers: [AppService],
})
export class AppModule {}
