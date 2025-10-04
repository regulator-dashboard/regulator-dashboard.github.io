import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export interface ComplianceData {
  overallCompliance: number;
  speedViolations: number;
  trafficLawViolations: number;
  regulations: Array<{
    name: string;
    compliance: number;
    violations: number;
    trend: number;
  }>;
  areaRiskAnalysis: Array<{
    area: string;
    riskLevel: 'Low' | 'Medium' | 'High';
    violationRate: number;
    commonViolations: string[];
  }>;
}

export class PDFService {
  static async generateComplianceReport(data: ComplianceData): Promise<void> {
    console.log('Creating PDF document...');
    const doc = new jsPDF();
    
    // 简单测试版本
    doc.setFontSize(20);
    doc.text('Autonomous Driving Compliance Report', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Overall Compliance: ${data.overallCompliance}%`, 20, 40);
    doc.text(`Speed Violations: ${data.speedViolations}`, 20, 50);
    doc.text(`Traffic Law Violations: ${data.trafficLawViolations}`, 20, 60);
    
    // 区域风险分析
    doc.text('Regional Risk Analysis:', 20, 80);
    let yPos = 90;
    data.areaRiskAnalysis.forEach(area => {
      doc.text(`${area.area}: ${area.riskLevel} Risk (${area.violationRate}% violations)`, 20, yPos);
      yPos += 10;
    });
    
    console.log('Saving PDF file...');
    doc.save('compliance-report.pdf');
    console.log('PDF file saved successfully');
  }

  static async generateReportFromElement(elementId: string, filename: string = 'report.pdf'): Promise<void> {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true
    });

    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = imgWidth / imgHeight;
    const imgX = 0;
    const imgY = 0;
    const imgW = pageWidth;
    const imgH = imgW / ratio;

    if (imgH > pageHeight) {
      const newImgH = pageHeight;
      const newImgW = newImgH * ratio;
      doc.addImage(imgData, 'PNG', (pageWidth - newImgW) / 2, 0, newImgW, newImgH);
    } else {
      doc.addImage(imgData, 'PNG', imgX, imgY, imgW, imgH);
    }

    doc.save(filename);
  }
}
