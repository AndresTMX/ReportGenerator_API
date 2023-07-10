import { Injectable , NotFoundException } from '@nestjs/common';
import { Invoice } from '../../entities/invoice.entity';
import { CreateInvoice } from '../../dtos/invoice.dtos';

@Injectable()
export class invoiceService{
    private counterId = 2;
    private invoices: Invoice[] = [{
        id: 1,
        date: new Date(),
        employee: 'Andrés Tejero',
        company: 'COMIND',
        location: 'CORPORATIVO',
        nameManager: 'Armando'
    },
    {
        id: 2,
        date: new Date(),
        employee: 'Oscar Uriel',
        company: 'COMIND',
        location: 'CORPORATIVO',
        nameManager: 'Armando'
    }];


    findAll(){
        return this.invoices;
    }

    findOne(id: number) {
        const invoice = this.invoices.find((invoice) => invoice.id === id);
        if (!invoice) {
            throw new NotFoundException('invoiceId not found');
        } else {
            return {
                message: 'Consulta realizada con exito',
                invoice: { ...invoice }
            }
        }
    }

    create(payload: CreateInvoice){
        this.counterId = this.counterId+1;
        const newInvoice  = {
            id: this.counterId,
            date: new Date(),
            ...payload,
        }
        this.invoices.push(newInvoice);
        return {
            message: `Numero de baja ${this.counterId}, creada con exito`,
            invoice:{...newInvoice}
        }
    }

}
