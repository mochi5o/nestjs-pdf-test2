import { Module } from '@nestjs/common';
import { PdfGenerateController } from './pdf-generate.controller';
import { PdfGenerateService } from './pdf-generate.service';

@Module({
  controllers: [PdfGenerateController],
  providers: [PdfGenerateService]
})
export class PdfGenerateModule {}
