import { Controller, Get } from '@nestjs/common';

@Controller('pdf-generate')
export class PdfGenerateController {
    @Get()
    getPdf(){
        return 'this is pdf';
    }
}
