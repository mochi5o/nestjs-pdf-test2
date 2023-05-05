import { Controller, Get, Header } from '@nestjs/common';
import { PdfGenerateService } from './pdf-generate.service';

@Controller('pdf-generate')
export class PdfGenerateController {
    constructor(private readonly pdfGenerateService: PdfGenerateService) {}

    @Get()
    @Header('Content-Type', 'application/pdf')
    getPdf(){
        return this.pdfGenerateService.pdfGenerate('./');
    }
}
