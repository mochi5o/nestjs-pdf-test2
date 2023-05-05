import { Injectable } from '@nestjs/common';

@Injectable()
export class PdfGenerateService {
    pdfGenerate(){
        return 'this is pdf service';
    }
}
