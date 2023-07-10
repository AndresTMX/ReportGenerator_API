import { Controller, Get, Post, Delete, Query, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { invoiceService } from '../../services/invoice-service/invoice-service.service';
import { CreateInvoice } from '../../dtos/invoice.dtos';
import { ParseIntPipe } from '@nestjs/common';

@Controller('registers')
export class InvoiceControllersController {

    constructor(private invoiceService: invoiceService) {}

    @Get()
    GetAllRegisters(@Query('limit') limit = 10, @Query('offset') offset = 0) {
        return this.invoiceService.findAll();
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    CreateRegister(@Body() payload: CreateInvoice): { message: string; invoice: CreateInvoice; } {
        return this.invoiceService.create(payload)
    }

    @Get(':registerId')
    GetOneRegister(@Param('registerId',ParseIntPipe) registerId: number){
        return this.invoiceService.findOne(registerId);
    }

    @Delete(':registerId')
    deleteOneRegister(@Param('registerId',ParseIntPipe) registerId: number){
        return{
            message:`El Folio de baja #${registerId} ha sido eliminado`
        }
    }

}
