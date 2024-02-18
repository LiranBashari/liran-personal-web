import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async convertToPdf(base64Image: string): Promise<Buffer> {
    const pdfDoc = await PDFDocument.create();
    const imageBytes = Uint8Array.from(Buffer.from(base64Image, 'base64'));

    // Embed the JPG image
    const image = await pdfDoc.embedJpg(imageBytes);

    // Add a page with the dimensions of the image
    const page = pdfDoc.addPage([image.width, image.height]);

    // Draw the image on the page
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });

    // Save the PDF to a buffer
    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
  }
}
