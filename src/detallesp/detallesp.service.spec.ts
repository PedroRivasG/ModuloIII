import { Test, TestingModule } from '@nestjs/testing';
import { DetallespService } from './detallesp.service';

describe('DetallespService', () => {
  let service: DetallespService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallespService],
    }).compile();

    service = module.get<DetallespService>(DetallespService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
