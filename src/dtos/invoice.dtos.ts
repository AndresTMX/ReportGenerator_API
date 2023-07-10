import { IsString, IsNotEmpty  } from 'class-validator';

export class CreateInvoice {

    @IsString({message:'Employee Requires TypeOff string'})
    @IsNotEmpty()
    readonly employee: string;

    @IsString({message:'Compnay Requires TypeOff string'})
    @IsNotEmpty()
    readonly company: string;

    @IsString({message:'Location Requires TypeOff string'})
    @IsNotEmpty()
    readonly location: string;

    @IsString({message:'NameManager Requires TypeOff string'})
    @IsNotEmpty()
    readonly nameManager: string;
}