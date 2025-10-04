import { useState } from 'react';
import { Card, Button, Row, Col, Statistic, Table, Tag, Space, Alert } from 'antd';
import { DownloadOutlined, CalendarOutlined, FileTextOutlined } from '@ant-design/icons';
import { PDFService } from '../../services/pdfService';
import { CSVService } from '../../services/csvService';
import { mockComplianceData } from '../../mock/data';
import type { ColumnsType } from 'antd/es/table';

interface ComplianceRegulation {
  key: string;
  regulation: string;
  compliance: number;
  violations: number;
  trend: number;
}

export default function CompliancePage() {
  const [loading, setLoading] = useState(false);
  const [reportData] = useState(mockComplianceData);

  const handleGenerateReport = () => {
    console.log('Generate Report button clicked!');
    setLoading(true);
    try {
      console.log('Starting CSV generation...');
      const csvContent = CSVService.generateComplianceReport(reportData);
      CSVService.downloadCSV(csvContent, 'compliance-report.csv');
      console.log('CSV generation completed successfully');
    } catch (error) {
      console.error('CSV generation failed:', error);
      alert('CSV生成失败: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  };

  const handleExportPDF = async () => {
    console.log('Export PDF button clicked!');
    setLoading(true);
    try {
      console.log('Starting PDF generation...');
      await PDFService.generateComplianceReport(reportData);
      console.log('PDF generation completed successfully');
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('PDF生成失败: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  };

  const handleScheduleReport = () => {
    // 实现定时报告功能
    console.log('Schedule report functionality');
  };


  const regulationColumns: ColumnsType<ComplianceRegulation> = [
    {
      title: 'Regulation',
      dataIndex: 'regulation',
      key: 'regulation',
    },
    {
      title: 'Compliance %',
      dataIndex: 'compliance',
      key: 'compliance',
      render: (value: number) => (
        <span style={{ 
          color: value >= 95 ? '#22c55e' : value >= 90 ? '#f97316' : '#ef4444' 
        }}>
          {value}%
        </span>
      ),
    },
    {
      title: 'Violations',
      dataIndex: 'violations',
      key: 'violations',
    },
    {
      title: 'Trend',
      dataIndex: 'trend',
      key: 'trend',
      render: (value: number) => (
        <Tag color={value >= 0 ? 'green' : 'red'}>
          {value >= 0 ? '+' : ''}{value}%
        </Tag>
      ),
    },
  ];

  const regulationData: ComplianceRegulation[] = reportData.regulations.map((reg, index) => ({
    key: index.toString(),
    regulation: reg.name,
    compliance: reg.compliance,
    violations: reg.violations,
    trend: reg.trend,
  }));

  const areaRiskColumns: ColumnsType<any> = [
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Risk Level',
      dataIndex: 'riskLevel',
      key: 'riskLevel',
      render: (value: string) => {
        const color = value === 'High' ? 'red' : value === 'Medium' ? 'orange' : 'green';
        return <Tag color={color}>{value}</Tag>;
      },
    },
    {
      title: 'Violation Rate',
      dataIndex: 'violationRate',
      key: 'violationRate',
      render: (value: number) => `${value}%`,
    },
    {
      title: 'Common Violations',
      dataIndex: 'commonViolations',
      key: 'commonViolations',
      render: (violations: string[]) => (
        <div>
          {violations.map((violation, index) => (
            <Tag key={index}>{violation}</Tag>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Card title="Compliance Reports" style={{ marginBottom: '24px' }}>
        <Space>
          <Button 
            type="primary" 
            icon={<FileTextOutlined />}
            onClick={handleGenerateReport}
            loading={loading}
          >
            Generate Report
          </Button>
          <Button 
            icon={<DownloadOutlined />}
            onClick={handleExportPDF}
            loading={loading}
          >
            Export PDF
          </Button>
          <Button 
            icon={<CalendarOutlined />}
            onClick={handleScheduleReport}
          >
            Schedule Report
          </Button>
        </Space>
      </Card>

      {/* 总体合规性摘要 */}
      <Row gutter={16} style={{ marginBottom: '24px' }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Overall Compliance"
              value={reportData.overallCompliance}
              suffix="%"
              valueStyle={{ color: '#22c55e' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Speed Violations"
              value={reportData.speedViolations}
              valueStyle={{ color: '#f97316' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Traffic Law Violations"
              value={reportData.trafficLawViolations}
              valueStyle={{ color: '#ef4444' }}
            />
          </Card>
        </Col>
      </Row>

      {/* 区域风险分析 */}
      <Card title="Regional Risk Analysis" style={{ marginBottom: '24px' }}>
        <Alert
          message="Risk Assessment Summary"
          description="Areas with high violation rates require immediate attention and enhanced monitoring."
          type="warning"
          showIcon
          style={{ marginBottom: '16px' }}
        />
        <Table
          columns={areaRiskColumns}
          dataSource={reportData.areaRiskAnalysis}
          pagination={false}
          size="small"
        />
      </Card>

      {/* 合规详情表格 */}
      <Card title="Compliance Details">
        <Table
          columns={regulationColumns}
          dataSource={regulationData}
          pagination={{
            pageSize: 5,
            showSizeChanger: false,
            showQuickJumper: false,
          }}
        />
      </Card>
    </div>
  );
}


