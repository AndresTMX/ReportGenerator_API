import { Injectable } from '@nestjs/common';
import { Invoice } from '../../entities/invoice.entity';

@Injectable()
export class invoiceService{
    private counterId = 1;
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

    findOne(id: number){
        const invoice = this.invoices.find((invoice) => invoice.id === id)
        if(invoice){
            return {
                message:'Consulta realizada con exito',
                invoice:{...invoice}
            }
        }else{
            return {
                message:'invoiceId not found',
            }
        }
    }

    create(payload: any){
        this.counterId = this.counterId++;
        const newInvoice  = {
            id: this.counterId,
            ...payload,
        }
        this.invoices.push(newInvoice);
        return {
            message: `Numero de baja ${this.counterId}, creada con exito`,
            invoice:{...payload}
        }
    }

}
