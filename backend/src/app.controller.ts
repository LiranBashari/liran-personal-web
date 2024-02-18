import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('downloadpdf')
  async convertToPdf(@Body() body: { image: string }, @Res() res) {
    const pdfBytes = await this.appService.convertToPdf(body.image);

    // Set the headers for the response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=generated.pdf');
    
    // Send the PDF bytes as the response content
    res.status(HttpStatus.OK).send(pdfBytes);
  }
}
