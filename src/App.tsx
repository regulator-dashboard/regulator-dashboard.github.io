import { useState } from 'react';
import { Layout, Menu, Input, Badge, Avatar, Card, Button, Table, Tag, Row, Col, Typography } from 'antd';
import { DashboardOutlined, CarOutlined, FileSearchOutlined, AlertOutlined, SettingOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [settings, setSettings] = useState({
    emailAlerts: true,
    smsNotifications: false,
    dashboardAlerts: true,
    autoRefreshInterval: '30 seconds',
    dataRetention: '90 days',
    riskThreshold: 'Medium'
  });

  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: 'monitor', icon: <CarOutlined />, label: 'Vehicle Monitoring' },
    { key: 'compliance', icon: <FileSearchOutlined />, label: 'Compliance Reports' },
    { key: 'risk', icon: <AlertOutlined />, label: 'Risk Alerts' },
    { key: 'policy', icon: <SafetyCertificateOutlined />, label: 'Policy / Standards' },
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' }
  ];

  const renderDashboard = () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Active Vehicles</div>
              <Tag color="green">+2.4% vs yesterday</Tag>
            </div>
            <div style={{ fontSize: 32, fontWeight: 'bold', marginTop: 8, color: isDarkMode ? '#fff' : '#000' }}>12,847</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Risk Alerts</div>
              <Tag color="purple">-12.1% vs yesterday</Tag>
            </div>
            <div style={{ fontSize: 32, fontWeight: 'bold', marginTop: 8, color: isDarkMode ? '#fff' : '#000' }}>23</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Compliance Rate</div>
              <Tag color="green">+1.2% vs yesterday</Tag>
            </div>
            <div style={{ fontSize: 32, fontWeight: 'bold', marginTop: 8, color: isDarkMode ? '#fff' : '#000' }}>94.2%</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Takeover Events Today</div>
              <Tag color="red">-8.5% vs yesterday</Tag>
            </div>
            <div style={{ fontSize: 32, fontWeight: 'bold', marginTop: 8, color: isDarkMode ? '#fff' : '#000' }}>156</div>
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={14}>
          <Card 
            title="Compliance Trends" 
            style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
            headStyle={{ color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
          >
            <div style={{ 
              height: 260, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: isDarkMode ? '#2a2a2a' : '#f5f5f5',
              color: isDarkMode ? '#999' : '#666'
            }}>
              <p>Chart placeholder - Compliance trends over time</p>
            </div>
          </Card>
        </Col>
        <Col span={10}>
          <Card 
            title="Notifications" 
            extra={<Button type="default">View All Notifications</Button>}
            style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
            headStyle={{ color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
          >
            <div style={{ color: isDarkMode ? '#fff' : '#000' }}>High Risk Alert <Tag color="red">Warning</Tag></div>
            <div style={{ marginTop: 8, color: isDarkMode ? '#999' : '#666' }}>Vehicle AV-2024-001 requires attention</div>
          </Card>
        </Col>
      </Row>

      <Card 
        title="Recent Event Log"
        style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
        headStyle={{ color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
      >
        <Table
          dataSource={[
            { id: '1', time: '14:32', vehicleId: 'AV-2024-001', eventType: 'Emergency Takeover', severity: 'High', status: 'In Progress', location: 'St Lucia' },
            { id: '2', time: '14:15', vehicleId: 'AV-2024-003', eventType: 'Sensor Malfunction', severity: 'Medium', status: 'Resolved', location: 'South Bank' },
            { id: '3', time: '13:58', vehicleId: 'AV-2024-005', eventType: 'Path Deviation', severity: 'Low', status: 'Resolved', location: 'New Farm' },
            { id: '4', time: '13:45', vehicleId: 'AV-2024-007', eventType: 'High Speed Violation', severity: 'High', status: 'In Progress', location: 'Kangaroo Point' },
            { id: '5', time: '13:30', vehicleId: 'AV-2024-009', eventType: 'Braking Distance Alert', severity: 'Medium', status: 'Resolved', location: 'Spring Hill' }
          ]}
          columns={[
            { title: 'Time', dataIndex: 'time' },
            { title: 'Vehicle ID', dataIndex: 'vehicleId' },
            { title: 'Event Type', dataIndex: 'eventType' },
            { title: 'Severity', dataIndex: 'severity', render: (v) => <Tag color={v === 'High' ? 'red' : v === 'Medium' ? 'gold' : 'blue'}>{v}</Tag> },
            { title: 'Status', dataIndex: 'status', render: (v) => <Tag>{v}</Tag> },
            { title: 'Area', dataIndex: 'location' },
            { 
              title: 'Actions', 
              render: (_, record) => (
                <Button 
                  type="link" 
                  onClick={() => {
                    // 创建一个模拟的车辆数据对象用于跳转
                    const mockVehicle = {
                      id: record.vehicleId,
                      city: record.location,
                      speed: 60,
                      braking: 18,
                      blindSpot: 12,
                      sensorCoverage: 92.5,
                      takeovers: 156,
                      trafficLaw: true,
                      battery: 87,
                      weather: 'Clear',
                      roadType: 'Urban',
                      riskScore: 2.3,
                      lastUpdate: record.time
                    };
                    setSelectedVehicle(mockVehicle);
                    setCurrentPage('vehicle-detail');
                  }}
                >
                  View
                </Button>
              )
            }
          ]}
          pagination={false}
          style={{ background: isDarkMode ? '#1f1f1f' : '#fff' }}
          className={isDarkMode ? 'dark-table' : ''}
        />
      </Card>

      <Title level={4} style={{ color: isDarkMode ? '#fff' : '#000' }}>Key Safety Metrics</Title>
      <Row gutter={16}>
        <Col span={4}><Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}><div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Speed</div><div style={{ fontSize: 24, fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>62 km/h</div></Card></Col>
        <Col span={4}><Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}><div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Braking Distance</div><div style={{ fontSize: 24, fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>18 m</div></Card></Col>
        <Col span={4}><Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}><div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Blind-spot Ratio</div><div style={{ fontSize: 24, fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>12%</div></Card></Col>
        <Col span={4}><Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}><div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Sensor Coverage</div><div style={{ fontSize: 24, fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>92.5%</div></Card></Col>
        <Col span={4}><Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}><div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Takeovers</div><div style={{ fontSize: 24, fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>156</div></Card></Col>
        <Col span={4}><Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}><div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Traffic Law</div><div style={{ fontSize: 24, fontWeight: 'bold' }}><Tag color="green">Compliant</Tag></div></Card></Col>
      </Row>
    </div>
  );

  const renderVehicleMonitoring = () => (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <Button type="primary">Refresh Data</Button>
        <Button>Export Report</Button>
        <Button>Filter by City</Button>
      </div>
      
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Total Vehicles</div>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>1,247</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Active Now</div>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'green' }}>892</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>In Maintenance</div>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'orange' }}>45</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Offline</div>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'red' }}>12</div>
          </Card>
        </Col>
      </Row>

      <Table
        dataSource={[
          { 
            id: 'AV-2024-001', 
            city: 'St Lucia', 
            speed: 62, 
            braking: 18, 
            blindSpot: 12, 
            sensorCoverage: 92.5, 
            takeovers: 156, 
            trafficLaw: true,
            battery: 87,
            weather: 'Clear',
            roadType: 'Urban',
            riskScore: 2.3,
            lastUpdate: '2 min ago'
          },
          { 
            id: 'AV-2024-002', 
            city: 'Sunnybank', 
            speed: 58, 
            braking: 15, 
            blindSpot: 8, 
            sensorCoverage: 95.2, 
            takeovers: 89, 
            trafficLaw: true,
            battery: 94,
            weather: 'Sunny',
            roadType: 'Highway',
            riskScore: 1.8,
            lastUpdate: '1 min ago'
          },
          { 
            id: 'AV-2024-003', 
            city: 'South Bank', 
            speed: 45, 
            braking: 22, 
            blindSpot: 15, 
            sensorCoverage: 88.1, 
            takeovers: 203, 
            trafficLaw: false,
            battery: 76,
            weather: 'Rainy',
            roadType: 'Urban',
            riskScore: 4.2,
            lastUpdate: '3 min ago'
          },
          { 
            id: 'AV-2024-004', 
            city: 'Fortitude Valley', 
            speed: 55, 
            braking: 16, 
            blindSpot: 9, 
            sensorCoverage: 91.3, 
            takeovers: 134, 
            trafficLaw: true,
            battery: 82,
            weather: 'Cloudy',
            roadType: 'Suburban',
            riskScore: 2.1,
            lastUpdate: '1 min ago'
          },
          { 
            id: 'AV-2024-005', 
            city: 'New Farm', 
            speed: 48, 
            braking: 20, 
            blindSpot: 11, 
            sensorCoverage: 89.7, 
            takeovers: 178, 
            trafficLaw: true,
            battery: 79,
            weather: 'Sunny',
            roadType: 'Urban',
            riskScore: 3.1,
            lastUpdate: '4 min ago'
          },
          { 
            id: 'AV-2024-006', 
            city: 'West End', 
            speed: 65, 
            braking: 14, 
            blindSpot: 7, 
            sensorCoverage: 96.1, 
            takeovers: 67, 
            trafficLaw: true,
            battery: 91,
            weather: 'Sunny',
            roadType: 'Highway',
            riskScore: 1.5,
            lastUpdate: '1 min ago'
          },
          { 
            id: 'AV-2024-007', 
            city: 'Kangaroo Point', 
            speed: 52, 
            braking: 19, 
            blindSpot: 13, 
            sensorCoverage: 87.3, 
            takeovers: 145, 
            trafficLaw: false,
            battery: 73,
            weather: 'Clear',
            roadType: 'Urban',
            riskScore: 3.8,
            lastUpdate: '5 min ago'
          },
          { 
            id: 'AV-2024-008', 
            city: 'Teneriffe', 
            speed: 70, 
            braking: 13, 
            blindSpot: 6, 
            sensorCoverage: 97.2, 
            takeovers: 45, 
            trafficLaw: true,
            battery: 88,
            weather: 'Clear',
            roadType: 'Highway',
            riskScore: 1.2,
            lastUpdate: '1 min ago'
          },
          { 
            id: 'AV-2024-009', 
            city: 'Spring Hill', 
            speed: 35, 
            braking: 25, 
            blindSpot: 18, 
            sensorCoverage: 84.6, 
            takeovers: 234, 
            trafficLaw: false,
            battery: 68,
            weather: 'Rainy',
            roadType: 'Urban',
            riskScore: 4.5,
            lastUpdate: '6 min ago'
          },
          { 
            id: 'AV-2024-010', 
            city: 'Paddington', 
            speed: 42, 
            braking: 21, 
            blindSpot: 14, 
            sensorCoverage: 86.9, 
            takeovers: 189, 
            trafficLaw: true,
            battery: 75,
            weather: 'Cloudy',
            roadType: 'Suburban',
            riskScore: 3.2,
            lastUpdate: '3 min ago'
          },
          { 
            id: 'AV-2024-011', 
            city: 'Toowong', 
            speed: 68, 
            braking: 12, 
            blindSpot: 5, 
            sensorCoverage: 98.1, 
            takeovers: 38, 
            trafficLaw: true,
            battery: 93,
            weather: 'Clear',
            roadType: 'Highway',
            riskScore: 1.1,
            lastUpdate: '1 min ago'
          },
          { 
            id: 'AV-2024-012', 
            city: 'Indooroopilly', 
            speed: 50, 
            braking: 17, 
            blindSpot: 10, 
            sensorCoverage: 90.4, 
            takeovers: 123, 
            trafficLaw: true,
            battery: 81,
            weather: 'Sunny',
            roadType: 'Suburban',
            riskScore: 2.4,
            lastUpdate: '2 min ago'
          },
          { 
            id: 'AV-2024-013', 
            city: 'Chermside', 
            speed: 38, 
            braking: 24, 
            blindSpot: 16, 
            sensorCoverage: 83.2, 
            takeovers: 267, 
            trafficLaw: false,
            battery: 71,
            weather: 'Rainy',
            roadType: 'Urban',
            riskScore: 4.8,
            lastUpdate: '7 min ago'
          },
          { 
            id: 'AV-2024-014', 
            city: 'Carindale', 
            speed: 63, 
            braking: 15, 
            blindSpot: 8, 
            sensorCoverage: 94.7, 
            takeovers: 78, 
            trafficLaw: true,
            battery: 89,
            weather: 'Sunny',
            roadType: 'Highway',
            riskScore: 1.7,
            lastUpdate: '1 min ago'
          },
          { 
            id: 'AV-2024-015', 
            city: 'Mount Gravatt', 
            speed: 41, 
            braking: 23, 
            blindSpot: 17, 
            sensorCoverage: 85.1, 
            takeovers: 198, 
            trafficLaw: false,
            battery: 69,
            weather: 'Cloudy',
            roadType: 'Urban',
            riskScore: 4.1,
            lastUpdate: '5 min ago'
          },
          { 
            id: 'AV-2024-016', 
            city: 'Garden City', 
            speed: 59, 
            braking: 16, 
            blindSpot: 9, 
            sensorCoverage: 92.8, 
            takeovers: 112, 
            trafficLaw: true,
            battery: 84,
            weather: 'Sunny',
            roadType: 'Suburban',
            riskScore: 2.6,
            lastUpdate: '2 min ago'
          },
          { 
            id: 'AV-2024-017', 
            city: 'Aspley', 
            speed: 46, 
            braking: 20, 
            blindSpot: 12, 
            sensorCoverage: 88.5, 
            takeovers: 156, 
            trafficLaw: true,
            battery: 77,
            weather: 'Cloudy',
            roadType: 'Suburban',
            riskScore: 2.9,
            lastUpdate: '3 min ago'
          },
          { 
            id: 'AV-2024-018', 
            city: 'Nundah', 
            speed: 61, 
            braking: 14, 
            blindSpot: 7, 
            sensorCoverage: 95.9, 
            takeovers: 89, 
            trafficLaw: true,
            battery: 86,
            weather: 'Sunny',
            roadType: 'Highway',
            riskScore: 1.9,
            lastUpdate: '1 min ago'
          },
          { 
            id: 'AV-2024-019', 
            city: 'Windsor', 
            speed: 44, 
            braking: 22, 
            blindSpot: 15, 
            sensorCoverage: 87.6, 
            takeovers: 187, 
            trafficLaw: false,
            battery: 74,
            weather: 'Rainy',
            roadType: 'Urban',
            riskScore: 3.6,
            lastUpdate: '4 min ago'
          },
          { 
            id: 'AV-2024-020', 
            city: 'Hamilton', 
            speed: 54, 
            braking: 18, 
            blindSpot: 11, 
            sensorCoverage: 91.4, 
            takeovers: 134, 
            trafficLaw: true,
            battery: 82,
            weather: 'Clear',
            roadType: 'Urban',
            riskScore: 2.7,
            lastUpdate: '2 min ago'
          }
        ]}
        columns={[
          { title: 'Vehicle ID', dataIndex: 'id', width: 120 },
          { title: 'Area', dataIndex: 'city', width: 100 },
          { title: 'Speed (km/h)', dataIndex: 'speed', width: 100 },
          { title: 'Braking (m)', dataIndex: 'braking', width: 100 },
          { title: 'Blind-spot %', dataIndex: 'blindSpot', width: 100 },
          { title: 'Sensor %', dataIndex: 'sensorCoverage', width: 100 },
          { title: 'Takeovers', dataIndex: 'takeovers', width: 100 },
          { title: 'Battery %', dataIndex: 'battery', width: 100, render: (v) => <span style={{ color: v > 80 ? 'green' : v > 60 ? 'orange' : 'red' }}>{v}%</span> },
          { title: 'Weather', dataIndex: 'weather', width: 100 },
          { title: 'Risk Score', dataIndex: 'riskScore', width: 100, render: (v) => <Tag color={v < 2 ? 'green' : v < 3 ? 'orange' : 'red'}>{v}</Tag> },
          { title: 'Traffic Law', dataIndex: 'trafficLaw', width: 100, render: (v) => <Tag color={v ? 'green' : 'red'}>{v ? 'Compliant' : 'Violation'}</Tag> },
          { title: 'Last Update', dataIndex: 'lastUpdate', width: 100 },
          { 
            title: 'Action', 
            width: 120, 
            render: (_, record) => (
              <Button 
                type="link" 
                size="small"
                onClick={() => {
                  setSelectedVehicle(record);
                  setCurrentPage('vehicle-detail');
                }}
              >
                Inspect
              </Button>
            )
          }
        ]}
        scroll={{ x: 1400 }}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );

  const generateComplianceCSV = () => {
    // 创建 CSV 内容 - 数据源和材料报告
    const csvContent = `Data Sources & Materials Report,Generated on: ${new Date().toLocaleDateString()}
Category,Description,Details,Status,Compliance
Event Logs,Vehicle automatically generated event logs,Time; Vehicle ID (anonymized); Event Type; Severity; Status; Location; Actions taken,Active,GDPR Compliant
System Dashboards,Compliance rate monitoring,Real-time compliance tracking with 94.2% overall rate,Active,Regulatory Compliant
Risk Alerts,System-generated risk assessments,23 active risk alerts with severity classification,Active,ISO 27001 Compliant
Takeover Events,Human intervention tracking,156 takeover events recorded with detailed analysis,Active,Safety Standards Compliant
Trend Visualizations,Performance trend analysis,Compliance trends showing +2.1% improvement,Active,Data Protection Compliant
Speed Limit Compliance,Automated speed monitoring,96.8% compliance rate with 45 violations,Active,Traffic Law Compliant
Lane Keeping,Computer vision lane detection,98.2% compliance rate with 12 violations,Active,FMVSS Compliant
Following Distance,Radar-based distance monitoring,91.5% compliance rate with 78 violations,Active,Safety Standards Compliant
Traffic Signal Recognition,AI-powered signal detection,99.1% compliance rate with 8 violations,Active,Regulatory Compliant
Pedestrian Detection,Multi-sensor detection system,97.3% compliance rate with 23 violations,Active,Safety Standards Compliant
Data Anonymization,Vehicle ID anonymization,All vehicle identifiers anonymized for privacy,Active,GDPR Article 25 Compliant
Consent Management,Data processing consent,Automated consent tracking for data processing,Active,GDPR Article 6 Compliant
Data Retention,Automated data lifecycle,90-day retention policy with automatic deletion,Active,GDPR Article 5 Compliant
Security Measures,Data protection protocols,Encryption and access controls implemented,Active,ISO 27001 Compliant
Audit Trail,Comprehensive logging,All system actions logged with timestamps,Active,Compliance Framework Compliant
Geographic Data,Location anonymization,Location data aggregated to city level,Active,Privacy by Design Compliant
Performance Metrics,Real-time monitoring,Continuous performance tracking and reporting,Active,Operational Excellence
Incident Response,Automated incident handling,Immediate response protocols for safety events,Active,Safety Management System
Data Quality,Automated validation,Real-time data quality checks and validation,Active,Data Governance Framework
System Integration,API-based data exchange,Secure data exchange between systems,Active,Technical Standards Compliant
Privacy Impact Assessment,Regular PIA reviews,Quarterly privacy impact assessments conducted,Active,GDPR Article 35 Compliant
Data Subject Rights,Automated rights management,Opt-out mechanisms for identifiable data,Active,GDPR Chapter 3 Compliant
Cross-border Transfers,Data transfer safeguards,Adequate protection measures for international transfers,Active,GDPR Chapter 5 Compliant
Breach Notification,Automated breach detection,24-hour breach notification system,Active,GDPR Article 33 Compliant
Data Protection Officer,DPO oversight,Designated DPO monitoring all data processing,Active,GDPR Article 37 Compliant
Ethics Framework,AI ethics guidelines,Comprehensive AI ethics framework implementation,Active,AI Ethics Standards
Algorithm Transparency,Explainable AI systems,Transparent decision-making processes,Active,Algorithmic Accountability
Bias Detection,Automated bias monitoring,Continuous monitoring for algorithmic bias,Active,Fairness Standards
Human Oversight,Human-in-the-loop systems,Human oversight for critical decisions,Active,AI Governance Framework
Continuous Monitoring,Real-time compliance tracking,24/7 automated compliance monitoring,Active,Regulatory Monitoring
Documentation,Comprehensive record keeping,Complete audit trail and documentation,Active,Regulatory Documentation
Training Data,Ethical data sourcing,Ethically sourced and validated training data,Active,AI Ethics Guidelines
Model Validation,Regular model testing,Continuous model validation and testing,Active,AI Safety Standards
Risk Assessment,Regular risk evaluations,Quarterly risk assessments and mitigation,Active,Risk Management Framework
Stakeholder Communication,Transparent reporting,Regular stakeholder communication and reporting,Active,Transparency Standards
Regulatory Updates,Compliance monitoring,Continuous monitoring of regulatory changes,Active,Regulatory Intelligence
Data Minimization,Principle of data minimization,Only necessary data collected and processed,Active,GDPR Article 5(1)(c) Compliant
Purpose Limitation,Data use restrictions,Data used only for specified purposes,Active,GDPR Article 5(1)(b) Compliant
Accuracy,Data accuracy maintenance,Regular data accuracy checks and updates,Active,GDPR Article 5(1)(d) Compliant
Storage Limitation,Data retention limits,Automatic data deletion after retention period,Active,GDPR Article 5(1)(e) Compliant
Integrity and Confidentiality,Data protection measures,Technical and organizational measures implemented,Active,GDPR Article 5(1)(f) Compliant
Accountability,Responsibility framework,Clear accountability and responsibility framework,Active,GDPR Article 5(2) Compliant
Lawfulness,Legal basis for processing,Clear legal basis for all data processing activities,Active,GDPR Article 6 Compliant
Transparency,Clear information provision,Transparent information about data processing,Active,GDPR Article 12 Compliant
Data Subject Information,Comprehensive information,Detailed information provided to data subjects,Active,GDPR Article 13 Compliant
Consent,Valid consent mechanisms,Robust consent mechanisms for data processing,Active,GDPR Article 7 Compliant
Special Categories,Special data protection,Enhanced protection for special categories,Active,GDPR Article 9 Compliant
Criminal Data,Criminal data protection,Special protection for criminal conviction data,Active,GDPR Article 10 Compliant
Data Protection by Design,Privacy by design,Privacy considerations integrated into system design,Active,GDPR Article 25 Compliant
Data Protection by Default,Default privacy settings,Privacy-friendly default settings,Active,GDPR Article 25 Compliant
Joint Controllers,Joint responsibility,Clear arrangements for joint controllers,Active,GDPR Article 26 Compliant
Processors,Processor agreements,Comprehensive processor agreements,Active,GDPR Article 28 Compliant
Third Countries,International transfers,Appropriate safeguards for third country transfers,Active,GDPR Chapter 5 Compliant
Supervisory Authority,Regulatory cooperation,Cooperation with supervisory authorities,Active,GDPR Article 31 Compliant
Data Breach,Incident response,Comprehensive data breach response procedures,Active,GDPR Articles 33-34 Compliant
Data Protection Impact Assessment,Regular DPIAs,Data protection impact assessments conducted,Active,GDPR Article 35 Compliant
Prior Consultation,Regulatory consultation,Prior consultation with supervisory authority,Active,GDPR Article 36 Compliant
Data Protection Officer,DPO appointment,Data protection officer appointed and functioning,Active,GDPR Article 37 Compliant
Codes of Conduct,Industry standards,Adherence to relevant codes of conduct,Active,GDPR Article 40 Compliant
Certification,Certification schemes,Participation in certification schemes,Active,GDPR Article 42 Compliant
Seals and Marks,Privacy certification,Privacy seals and marks obtained,Active,GDPR Article 42 Compliant
International Cooperation,Global cooperation,International cooperation on data protection,Active,GDPR Article 50 Compliant`;

    // 创建并下载 CSV 文件
    const element = document.createElement('a');
    const file = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    element.href = URL.createObjectURL(file);
    element.download = `Data_Sources_Materials_Report_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    alert('Data Sources & Materials Report (CSV) generated and downloaded successfully!');
  };

  const renderComplianceReports = () => (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <Button type="primary" onClick={generateComplianceCSV}>Generate Report</Button>
        <Button>Export PDF</Button>
        <Button>Schedule Report</Button>
      </div>
      
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Card>
            <div style={{ fontSize: 14, color: '#6b7280' }}>Overall Compliance</div>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: 'green' }}>94.2%</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <div style={{ fontSize: 14, color: '#6b7280' }}>Speed Violations</div>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: 'orange' }}>23</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <div style={{ fontSize: 14, color: '#6b7280' }}>Traffic Law Violations</div>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: 'red' }}>8</div>
          </Card>
        </Col>
      </Row>

      <Card title="Compliance Details">
        <Table
          dataSource={[
            { regulation: 'Speed Limit Compliance', compliance: 96.8, violations: 45, trend: '+2.1%' },
            { regulation: 'Lane Keeping', compliance: 98.2, violations: 12, trend: '+0.5%' },
            { regulation: 'Following Distance', compliance: 91.5, violations: 78, trend: '-1.2%' },
            { regulation: 'Traffic Signal Recognition', compliance: 99.1, violations: 8, trend: '+0.3%' },
            { regulation: 'Pedestrian Detection', compliance: 97.3, violations: 23, trend: '+1.8%' }
          ]}
          columns={[
            { title: 'Regulation', dataIndex: 'regulation' },
            { title: 'Compliance %', dataIndex: 'compliance', render: (v) => <span style={{ color: v > 95 ? 'green' : v > 90 ? 'orange' : 'red' }}>{v}%</span> },
            { title: 'Violations', dataIndex: 'violations' },
            { title: 'Trend', dataIndex: 'trend', render: (v) => <Tag color={v.startsWith('+') ? 'green' : 'red'}>{v}</Tag> }
          ]}
        />
      </Card>
    </div>
  );

  const renderRiskAlerts = () => (
      <div>
      <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <Button type="primary">View All Alerts</Button>
        <Button>Export Alerts</Button>
        <Button>Configure Thresholds</Button>
      </div>

      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>High Risk</div>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: 'red' }}>12</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Medium Risk</div>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: 'orange' }}>34</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Low Risk</div>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: 'blue' }}>67</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}>
            <div style={{ fontSize: 14, color: isDarkMode ? '#999' : '#6b7280' }}>Resolved Today</div>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: 'green' }}>23</div>
          </Card>
        </Col>
      </Row>

      <Card 
        title="Active Risk Alerts"
        style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
        headStyle={{ color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
      >
        <Table
          dataSource={[
            { id: 'R001', vehicle: 'AV-2024-001', type: 'High Speed Violation', severity: 'High', location: 'St Lucia', time: '2 min ago', status: 'Active' },
            { id: 'R002', vehicle: 'AV-2024-003', type: 'Sensor Malfunction', severity: 'High', location: 'South Bank', time: '5 min ago', status: 'Active' },
            { id: 'R003', vehicle: 'AV-2024-005', type: 'Braking Distance Alert', severity: 'Medium', location: 'New Farm', time: '8 min ago', status: 'Active' },
            { id: 'R004', vehicle: 'AV-2024-007', type: 'Blind Spot Detection', severity: 'Medium', location: 'Kangaroo Point', time: '12 min ago', status: 'Active' },
            { id: 'R005', vehicle: 'AV-2024-009', type: 'Emergency Takeover', severity: 'High', location: 'Spring Hill', time: '15 min ago', status: 'Active' },
            { id: 'R006', vehicle: 'AV-2024-013', type: 'Traffic Law Violation', severity: 'High', location: 'Chermside', time: '18 min ago', status: 'Active' },
            { id: 'R007', vehicle: 'AV-2024-015', type: 'Battery Low Warning', severity: 'Medium', location: 'Mount Gravatt', time: '22 min ago', status: 'Active' },
            { id: 'R008', vehicle: 'AV-2024-019', type: 'Path Deviation', severity: 'Medium', location: 'Windsor', time: '25 min ago', status: 'Active' }
          ]}
          columns={[
            { title: 'Alert ID', dataIndex: 'id' },
            { title: 'Vehicle', dataIndex: 'vehicle' },
            { title: 'Alert Type', dataIndex: 'type' },
            { title: 'Severity', dataIndex: 'severity', render: (v) => <Tag color={v === 'High' ? 'red' : v === 'Medium' ? 'orange' : 'blue'}>{v}</Tag> },
            { title: 'Area', dataIndex: 'location' },
            { title: 'Time', dataIndex: 'time' },
            { title: 'Status', dataIndex: 'status', render: (v) => <Tag color={v === 'Active' ? 'red' : 'green'}>{v}</Tag> },
            { 
              title: 'Action', 
              render: (_, record) => (
                <Button 
                  type="link" 
                  size="small"
                  onClick={() => {
                    setSelectedVehicle(record);
                    setCurrentPage('vehicle-detail');
                  }}
                >
                  Investigate
                </Button>
              )
            }
          ]}
          style={{ background: isDarkMode ? '#1f1f1f' : '#fff' }}
          className={isDarkMode ? 'dark-table' : ''}
        />
      </Card>
    </div>
  );

  const renderPolicyStandards = () => (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <Button type="primary">Create Policy</Button>
        <Button>Import Standards</Button>
        <Button>Export Checklist</Button>
      </div>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="Current Policies">
            <div style={{ marginBottom: 12 }}>
              <h4>Speed Limit Policy</h4>
              <p>Maximum speed: 60 km/h in urban areas, 80 km/h on highways</p>
              <Tag color="green">Active</Tag>
            </div>
            <div style={{ marginBottom: 12 }}>
              <h4>Safety Distance Policy</h4>
              <p>Minimum following distance: 2 seconds or 20 meters</p>
              <Tag color="green">Active</Tag>
            </div>
            <div style={{ marginBottom: 12 }}>
              <h4>Emergency Response Policy</h4>
              <p>Immediate human takeover required for high-risk situations</p>
              <Tag color="green">Active</Tag>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Compliance Checklist">
            <div style={{ marginBottom: 8 }}>
              <input type="checkbox" /> Speed limit compliance monitoring
            </div>
            <div style={{ marginBottom: 8 }}>
              <input type="checkbox" /> Lane keeping assistance
            </div>
            <div style={{ marginBottom: 8 }}>
              <input type="checkbox" /> Traffic signal recognition
            </div>
            <div style={{ marginBottom: 8 }}>
              <input type="checkbox" /> Pedestrian detection system
            </div>
            <div style={{ marginBottom: 8 }}>
              <input type="checkbox" /> Emergency braking system
            </div>
            <div style={{ marginBottom: 8 }}>
              <input type="checkbox" /> Blind spot monitoring
            </div>
            <div style={{ marginBottom: 8 }}>
              <input type="checkbox" /> Weather condition adaptation
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );


  const toggleSetting = (settingName: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [settingName]: !prev[settingName]
    }));
  };

  const renderVehicleDetail = () => {
    if (!selectedVehicle) return <div>No vehicle selected</div>;
    
    return (
      <div>
        <div style={{ marginBottom: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button onClick={() => setCurrentPage('monitor')}>← Back to Monitoring</Button>
          <Title level={3} style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>
            Vehicle Details: {selectedVehicle.id}
          </Title>
        </div>
        
        <Row gutter={16}>
          <Col span={12}>
            <Card 
              title="Vehicle Information" 
              style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
              headStyle={{ color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
            >
              <div style={{ color: isDarkMode ? '#fff' : '#000' }}>
                <p><strong>Vehicle ID:</strong> {selectedVehicle.id}</p>
                <p><strong>Area:</strong> {selectedVehicle.city}</p>
                <p><strong>Road Type:</strong> {selectedVehicle.roadType}</p>
                <p><strong>Weather:</strong> {selectedVehicle.weather}</p>
                <p><strong>Last Update:</strong> {selectedVehicle.lastUpdate}</p>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card 
              title="Performance Metrics" 
              style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
              headStyle={{ color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
            >
              <div style={{ color: isDarkMode ? '#fff' : '#000' }}>
                <p><strong>Speed:</strong> {selectedVehicle.speed} km/h</p>
                <p><strong>Braking Distance:</strong> {selectedVehicle.braking} m</p>
                <p><strong>Blind-spot Ratio:</strong> {selectedVehicle.blindSpot}%</p>
                <p><strong>Sensor Coverage:</strong> {selectedVehicle.sensorCoverage}%</p>
                <p><strong>Takeover Events:</strong> {selectedVehicle.takeovers}</p>
                <p><strong>Battery Level:</strong> 
                  <span style={{ color: selectedVehicle.battery > 80 ? 'green' : selectedVehicle.battery > 60 ? 'orange' : 'red' }}>
                    {selectedVehicle.battery}%
                  </span>
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        
        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={12}>
            <Card 
              title="Safety Assessment" 
              style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
              headStyle={{ color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
            >
              <div style={{ color: isDarkMode ? '#fff' : '#000' }}>
                <p><strong>Risk Score:</strong> 
                  <Tag color={selectedVehicle.riskScore < 2 ? 'green' : selectedVehicle.riskScore < 3 ? 'gold' : 'red'}>
                    {selectedVehicle.riskScore}
                  </Tag>
                </p>
                <p><strong>Traffic Law Compliance:</strong> 
                  <Tag color={selectedVehicle.trafficLaw ? 'green' : 'red'}>
                    {selectedVehicle.trafficLaw ? 'Compliant' : 'Violation'}
                  </Tag>
                </p>
                <p><strong>Overall Status:</strong> 
                  <Tag color={selectedVehicle.riskScore < 2 ? 'green' : selectedVehicle.riskScore < 3 ? 'gold' : 'red'}>
                    {selectedVehicle.riskScore < 2 ? 'Safe' : selectedVehicle.riskScore < 3 ? 'Caution' : 'High Risk'}
                  </Tag>
                </p>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card 
              title="Recent Events" 
              style={{ background: isDarkMode ? '#1f1f1f' : '#fff', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
              headStyle={{ color: isDarkMode ? '#fff' : '#000', borderColor: isDarkMode ? '#333' : '#f0f0f0' }}
            >
              <div style={{ color: isDarkMode ? '#fff' : '#000' }}>
                <p>• Emergency brake activated - 2 min ago</p>
                <p>• Lane change detected - 5 min ago</p>
                <p>• Speed limit adjustment - 8 min ago</p>
                <p>• Sensor calibration - 15 min ago</p>
                <p>• Route optimization - 20 min ago</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };

  const renderSettings = () => (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Notification Settings">
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Email Alerts</span>
                <Button 
                  type={settings.emailAlerts ? "primary" : "default"} 
                  size="small"
                  onClick={() => toggleSetting('emailAlerts')}
                >
                  {settings.emailAlerts ? 'Enable' : 'Disable'}
                </Button>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>SMS Notifications</span>
                <Button 
                  type={settings.smsNotifications ? "primary" : "default"} 
                  size="small"
                  onClick={() => toggleSetting('smsNotifications')}
                >
                  {settings.smsNotifications ? 'Enable' : 'Disable'}
                </Button>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Dashboard Alerts</span>
                <Button 
                  type={settings.dashboardAlerts ? "primary" : "default"} 
                  size="small"
                  onClick={() => toggleSetting('dashboardAlerts')}
                >
                  {settings.dashboardAlerts ? 'Enable' : 'Disable'}
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="System Configuration">
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Auto-refresh Interval</span>
                <Button size="small">{settings.autoRefreshInterval}</Button>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Data Retention</span>
                <Button size="small">{settings.dataRetention}</Button>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Risk Threshold</span>
                <Button size="small">{settings.riskThreshold}</Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard': return renderDashboard();
      case 'monitor': return renderVehicleMonitoring();
      case 'vehicle-detail': return renderVehicleDetail();
      case 'compliance': return renderComplianceReports();
      case 'risk': return renderRiskAlerts();
      case 'policy': return renderPolicyStandards();
      case 'settings': return renderSettings();
      default: return renderDashboard();
    }
  };

  return (
    <Layout style={{ 
      minHeight: '100vh',
      background: isDarkMode ? '#000' : '#fff'
    }}>
      <Sider width={280} style={{ 
        background: isDarkMode ? '#141414' : '#fff', 
        borderRight: isDarkMode ? '1px solid #333' : '1px solid #f0f0f0' 
      }}>
        <div style={{ 
          padding: 16, 
          fontWeight: 700, 
          color: isDarkMode ? '#fff' : '#000' 
        }}>
          Autonomous Driving Regulator
        </div>
        <Menu 
          mode="inline" 
          selectedKeys={[currentPage]}
          items={menuItems}
          onClick={({ key }) => setCurrentPage(key)}
          theme={isDarkMode ? 'dark' : 'light'}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          background: isDarkMode ? '#1f1f1f' : '#fff', 
          display: 'flex', 
          gap: 16, 
          alignItems: 'center', 
          paddingInline: 16,
          borderBottom: isDarkMode ? '1px solid #333' : '1px solid #f0f0f0'
        }}>
          <Input.Search 
            placeholder="Search vehicles, events..." 
            style={{ maxWidth: 520 }}
            className={isDarkMode ? 'dark-search' : ''}
          />
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
            <Button
              type="text"
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: isDarkMode ? '#333' : '#f5f5f5',
                border: 'none',
                transition: 'all 0.3s ease',
                color: isDarkMode ? '#fff' : '#000'
              }}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </Button>
            <Badge count={3}><span style={{ cursor: 'pointer', color: isDarkMode ? '#fff' : '#000' }}>🔔</span></Badge>
            <Avatar size="small" style={{ background: isDarkMode ? '#1890ff' : '#1890ff' }}>R</Avatar>
          </div>
        </Header>
        <Content style={{ 
          padding: 20, 
          background: isDarkMode ? '#0f0f0f' : '#fafafa',
          minHeight: 'calc(100vh - 64px)'
        }}>
          {renderContent()}
        </Content>
      </Layout>

    </Layout>
  );
}
