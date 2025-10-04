import type { ComplianceData } from './pdfService';

export class CSVService {
  static generateComplianceReport(data: ComplianceData): string {
    const lines: string[] = [];
    
    // 报告标题和基本信息
    lines.push('AUTONOMOUS DRIVING COMPLIANCE REPORT');
    lines.push('');
    lines.push(`Report Generated: ${new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })}`);
    lines.push('');
    
    // 总体合规性摘要
    lines.push('=== OVERALL COMPLIANCE SUMMARY ===');
    lines.push('');
    lines.push(`Overall Compliance Rate,${data.overallCompliance}%`);
    lines.push(`Total Speed Violations,${data.speedViolations}`);
    lines.push(`Total Traffic Law Violations,${data.trafficLawViolations}`);
    lines.push('');
    
    // 合规性评估
    const complianceLevel = data.overallCompliance >= 95 ? 'EXCELLENT' : 
                           data.overallCompliance >= 90 ? 'GOOD' : 
                           data.overallCompliance >= 80 ? 'FAIR' : 'POOR';
    lines.push(`Compliance Assessment,${complianceLevel}`);
    lines.push('');
    
    // 区域风险分析
    lines.push('=== REGIONAL RISK ANALYSIS ===');
    lines.push('');
    lines.push('Area,Risk Level,Violation Rate,Common Violations,Recommendations');
    
    data.areaRiskAnalysis.forEach(area => {
      const riskColor = area.riskLevel === 'High' ? '🔴 HIGH RISK' : 
                       area.riskLevel === 'Medium' ? '🟡 MEDIUM RISK' : '🟢 LOW RISK';
      
      const commonViolations = area.commonViolations.join('; ');
      
      let recommendations = '';
      if (area.riskLevel === 'High') {
        recommendations = 'Immediate attention required; Enhanced monitoring needed; Consider temporary restrictions';
      } else if (area.riskLevel === 'Medium') {
        recommendations = 'Monitor closely; Review safety protocols; Consider additional training';
      } else {
        recommendations = 'Maintain current standards; Continue regular monitoring';
      }
      
      lines.push(`"${area.area}","${riskColor}","${area.violationRate}%","${commonViolations}","${recommendations}"`);
    });
    
    lines.push('');
    
    // 详细合规数据
    lines.push('=== COMPLIANCE DETAILS BY REGULATION ===');
    lines.push('');
    lines.push('Regulation,Compliance %,Violations Count,Trend,Status');
    
    data.regulations.forEach(regulation => {
      const status = regulation.compliance >= 95 ? 'EXCELLENT' :
                    regulation.compliance >= 90 ? 'GOOD' :
                    regulation.compliance >= 80 ? 'FAIR' : 'NEEDS IMPROVEMENT';
      
      const trend = regulation.trend >= 0 ? `+${regulation.trend}%` : `${regulation.trend}%`;
      const trendStatus = regulation.trend >= 0 ? 'IMPROVING' : 'DECLINING';
      
      lines.push(`"${regulation.name}","${regulation.compliance}%","${regulation.violations}","${trend}","${status} (${trendStatus})"`);
    });
    
    lines.push('');
    
    // 详细总结性分析
    lines.push('=== EXECUTIVE SUMMARY AND ANALYSIS ===');
    lines.push('');
    
    // 总体合规性评估
    lines.push('OVERALL COMPLIANCE ASSESSMENT:');
    lines.push(`The autonomous driving system demonstrates ${complianceLevel} performance with an overall compliance rate of ${data.overallCompliance}%.`);
    if (data.overallCompliance >= 95) {
      lines.push('This indicates excellent system performance with minimal safety concerns.');
    } else if (data.overallCompliance >= 90) {
      lines.push('This indicates good system performance with some areas requiring attention.');
    } else if (data.overallCompliance >= 80) {
      lines.push('This indicates fair system performance with several areas needing improvement.');
    } else {
      lines.push('This indicates poor system performance requiring immediate intervention.');
    }
    lines.push('');
    
    // 区域风险详细分析
    lines.push('REGIONAL RISK ANALYSIS SUMMARY:');
    const highRiskAreas = data.areaRiskAnalysis.filter(area => area.riskLevel === 'High');
    const mediumRiskAreas = data.areaRiskAnalysis.filter(area => area.riskLevel === 'Medium');
    const lowRiskAreas = data.areaRiskAnalysis.filter(area => area.riskLevel === 'Low');
    
    lines.push(`• High Risk Areas (${highRiskAreas.length}): ${highRiskAreas.map(a => a.area).join(', ')}`);
    if (highRiskAreas.length > 0) {
      lines.push(`  - These areas show violation rates above 10% and require immediate attention`);
      lines.push(`  - Common issues include: ${highRiskAreas[0].commonViolations.join(', ')}`);
    }
    
    lines.push(`• Medium Risk Areas (${mediumRiskAreas.length}): ${mediumRiskAreas.map(a => a.area).join(', ')}`);
    if (mediumRiskAreas.length > 0) {
      lines.push(`  - These areas show moderate violation rates (5-10%) requiring monitoring`);
    }
    
    lines.push(`• Low Risk Areas (${lowRiskAreas.length}): ${lowRiskAreas.map(a => a.area).join(', ')}`);
    if (lowRiskAreas.length > 0) {
      lines.push(`  - These areas demonstrate excellent performance with minimal violations`);
    }
    lines.push('');
    
    // 法规合规性详细分析
    lines.push('REGULATION COMPLIANCE ANALYSIS:');
    const excellentRegs = data.regulations.filter(reg => reg.compliance >= 95);
    const goodRegs = data.regulations.filter(reg => reg.compliance >= 90 && reg.compliance < 95);
    const fairRegs = data.regulations.filter(reg => reg.compliance >= 80 && reg.compliance < 90);
    const poorRegs = data.regulations.filter(reg => reg.compliance < 80);
    
    lines.push(`• Excellent Performance (≥95%): ${excellentRegs.length} regulations`);
    if (excellentRegs.length > 0) {
      lines.push(`  - ${excellentRegs.map(reg => reg.name).join(', ')}`);
    }
    
    lines.push(`• Good Performance (90-94%): ${goodRegs.length} regulations`);
    if (goodRegs.length > 0) {
      lines.push(`  - ${goodRegs.map(reg => reg.name).join(', ')}`);
    }
    
    lines.push(`• Fair Performance (80-89%): ${fairRegs.length} regulations`);
    if (fairRegs.length > 0) {
      lines.push(`  - ${fairRegs.map(reg => reg.name).join(', ')}`);
    }
    
    lines.push(`• Poor Performance (<80%): ${poorRegs.length} regulations`);
    if (poorRegs.length > 0) {
      lines.push(`  - ${poorRegs.map(reg => reg.name).join(', ')}`);
    }
    lines.push('');
    
    // 趋势分析
    lines.push('PERFORMANCE TRENDS:');
    const improvingRegs = data.regulations.filter(reg => reg.trend > 0);
    const decliningRegs = data.regulations.filter(reg => reg.trend < 0);
    const stableRegs = data.regulations.filter(reg => reg.trend === 0);
    
    lines.push(`• Improving Regulations: ${improvingRegs.length}`);
    if (improvingRegs.length > 0) {
      lines.push(`  - ${improvingRegs.map(reg => `${reg.name} (+${reg.trend}%)`).join(', ')}`);
    }
    
    lines.push(`• Declining Regulations: ${decliningRegs.length}`);
    if (decliningRegs.length > 0) {
      lines.push(`  - ${decliningRegs.map(reg => `${reg.name} (${reg.trend}%)`).join(', ')}`);
    }
    
    lines.push(`• Stable Regulations: ${stableRegs.length}`);
    if (stableRegs.length > 0) {
      lines.push(`  - ${stableRegs.map(reg => reg.name).join(', ')}`);
    }
    lines.push('');
    
    // 关键发现和建议
    lines.push('=== CRITICAL FINDINGS AND RECOMMENDATIONS ===');
    lines.push('');
    
    // 找出最高风险区域
    const highestRiskArea = data.areaRiskAnalysis.reduce((max, area) => 
      area.violationRate > max.violationRate ? area : max
    );
    
    // 找出最需要改进的法规
    const worstRegulation = data.regulations.reduce((min, reg) => 
      reg.compliance < min.compliance ? reg : min
    );
    
    lines.push('CRITICAL FINDINGS:');
    lines.push(`• HIGHEST RISK AREA: ${highestRiskArea.area}`);
    lines.push(`  - Violation Rate: ${highestRiskArea.violationRate}% (${highestRiskArea.riskLevel} Risk)`);
    lines.push(`  - Common Issues: ${highestRiskArea.commonViolations.join(', ')}`);
    lines.push(`  - Impact: This area contributes significantly to overall system risk`);
    lines.push('');
    
    lines.push(`• MOST CRITICAL REGULATION: ${worstRegulation.name}`);
    lines.push(`  - Compliance Rate: ${worstRegulation.compliance}%`);
    lines.push(`  - Violations: ${worstRegulation.violations}`);
    lines.push(`  - Trend: ${worstRegulation.trend >= 0 ? '+' : ''}${worstRegulation.trend}%`);
    lines.push(`  - Impact: This regulation requires immediate attention to improve overall compliance`);
    lines.push('');
    
    lines.push('IMMEDIATE ACTION REQUIRED:');
    if (highestRiskArea.riskLevel === 'High') {
      lines.push(`• URGENT: Implement enhanced monitoring in ${highestRiskArea.area}`);
      lines.push(`• URGENT: Deploy additional safety measures for ${highestRiskArea.area}`);
      lines.push(`• URGENT: Review and update protocols for ${highestRiskArea.commonViolations.join(', ')}`);
    }
    if (worstRegulation.compliance < 90) {
      lines.push(`• CRITICAL: Improve ${worstRegulation.name} compliance immediately`);
      lines.push(`• CRITICAL: Review training protocols for ${worstRegulation.name}`);
    }
    lines.push('• Review and update overall safety protocols');
    lines.push('• Conduct comprehensive system audit');
    lines.push('• Implement additional driver training programs');
    lines.push('• Schedule follow-up compliance review');
    lines.push('');
    
    // 报告结尾
    lines.push('=== REPORT SUMMARY ===');
    lines.push('');
    lines.push(`Total Areas Monitored,${data.areaRiskAnalysis.length}`);
    lines.push(`High Risk Areas,${data.areaRiskAnalysis.filter(a => a.riskLevel === 'High').length}`);
    lines.push(`Medium Risk Areas,${data.areaRiskAnalysis.filter(a => a.riskLevel === 'Medium').length}`);
    lines.push(`Low Risk Areas,${data.areaRiskAnalysis.filter(a => a.riskLevel === 'Low').length}`);
    lines.push('');
    lines.push('Report generated by Autonomous Driving Regulator System');
    lines.push(`Generated on: ${new Date().toISOString()}`);
    
    return lines.join('\n');
  }
  
  static downloadCSV(content: string, filename: string = 'compliance-report.csv'): void {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
