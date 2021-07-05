import { Test, TestingModule } from '@nestjs/testing';
import { DetallespController } from './detallesp.controller';

describe('DetallespController', () => {
  let controller: DetallespController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallespController],
    }).compile();

    controller = module.get<DetallespController>(DetallespController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
