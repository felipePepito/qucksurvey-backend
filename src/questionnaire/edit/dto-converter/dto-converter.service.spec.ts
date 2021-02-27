import { Test, TestingModule } from '@nestjs/testing';
import { DtoConverterService } from './dto-converter.service';

describe('DtoConverterService', () => {
  let service: DtoConverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DtoConverterService],
    }).compile();

    service = module.get<DtoConverterService>(DtoConverterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
