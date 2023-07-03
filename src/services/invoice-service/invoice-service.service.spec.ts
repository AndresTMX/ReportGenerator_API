import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceServiceService } from './invoice-service.service';

describe('InvoiceServiceService', () => {
  let service: InvoiceServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceServiceService],
    }).compile();

    service = module.get<InvoiceServiceService>(InvoiceServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
