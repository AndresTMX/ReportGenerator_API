import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceControllersController } from './invoice-controllers.controller';

describe('InvoiceControllersController', () => {
  let controller: InvoiceControllersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceControllersController],
    }).compile();

    controller = module.get<InvoiceControllersController>(InvoiceControllersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
