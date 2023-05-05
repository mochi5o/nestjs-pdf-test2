import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfGenerateModule } from './pdf-generate/pdf-generate.module';

@Module({
  imports: [PdfGenerateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
