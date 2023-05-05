import { Injectable } from '@nestjs/common';
import { PDFService, PDFOptions } from '@t00nday/nestjs-pdf';

@Injectable()
export class PdfGenerateService {
    constructor( private readonly pdfService: PDFService ) {}
    async pdfGenerate(
        template: string,
        filename: string,
        options?: PDFOptions,
    ) {
        return await this.pdfService.toFile(template, filename, options);
    }
}
