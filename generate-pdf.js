import htmlPdf from 'html-pdf-node';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  try {
    // Read the HTML file
    const htmlPath = path.join(__dirname, 'executive-requirements.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Configure PDF options
    const options = {
      format: 'A4',
      border: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      },
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      type: 'pdf',
      quality: '100'
    };
    
    // Create file object
    const file = { content: htmlContent };
    
    // Generate PDF
    console.log('Generating PDF...');
    const pdfBuffer = await htmlPdf.generatePdf(file, options);
    
    // Save PDF
    const outputPath = path.join(__dirname, 'Executive_Requirements_Document.pdf');
    fs.writeFileSync(outputPath, pdfBuffer);
    
    console.log(`PDF generated successfully: ${outputPath}`);
    console.log('Document is ready for CEO presentation');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

generatePDF();