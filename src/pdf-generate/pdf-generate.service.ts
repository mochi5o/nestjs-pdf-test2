import { Injectable } from '@nestjs/common';
import { PDFService, PDFOptions } from '@t00nday/nestjs-pdf';

@Injectable()
export class PdfGenerateService {
    constructor( private readonly pdfService: PDFService ) {}
    async pdfGenerate(
        template: string,
        options?: PDFOptions,
    ) {
        return await this.pdfService.toStream(template, options);
    }
}
