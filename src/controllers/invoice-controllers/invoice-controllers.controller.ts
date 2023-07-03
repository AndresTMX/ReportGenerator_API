import { Controller, Get, Post, Delete, Query, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { UUID } from 'crypto';

@Controller('invoice-controllers')
export class InvoiceControllersController {

    constructor(private id: UUID, name: string, jobtitle: string, date: string) { }

    @Post('registers')
    @HttpCode(HttpStatus.CREATED)
    CreateRegister(@Body() payload: any) {
        return {
            message: 'Registro creado con exito',
            payload,
        }
    }

    @Get('registers')
    GetAllRegisters(@Query('limit') limit = 10, @Query('offset') offset = 0) {
        return {
            count: '2',
            data: {
                registers: [
                    { id: '1', name: 'nombre usuario' },
                    { id: '2', name: 'nombre usuario' }
                ]
            }
        }
    }

    @Get('registers/:registerId')
    GetOneRegister(@Param('registerId') registerId: UUID){
        return{
            invoiceRegister:{
                id:registerId
            }
        }
    }

    @Delete('registers/:registerId')
    deleteOneRegister(@Param('registerId') registerId: UUID){
        return{
            message:`El Folio de baja #${registerId} ha sido eliminado`
        }
    }

}
