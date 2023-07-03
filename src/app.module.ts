import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceControllersController } from './controllers/invoice-controllers/invoice-controllers.controller';
import { invoiceService } from './services/invoice-service/invoice-service.service';

@Module({
  imports: [],
  controllers: [AppController, InvoiceControllersController],
  providers: [AppService, invoiceService],
})
export class AppModule {}
