import { Module } from '@nestjs/common';
import { PDFModule } from '@t00nday/nestjs-pdf';
import { PdfGenerateController } from './pdf-generate.controller';
import { PdfGenerateService } from './pdf-generate.service';

@Module({
  imports: [
    PDFModule.register({
        view: {
            root: '/path-to-project/src/pdf-template',
            engine: 'pug',
        },
    }),
],
  controllers: [PdfGenerateController],
  providers: [PdfGenerateService]
})
export class PdfGenerateModule {}
