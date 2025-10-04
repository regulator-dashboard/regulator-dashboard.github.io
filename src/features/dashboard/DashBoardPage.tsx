import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Card, Button, Table, Tag, Row, Col, Typography } from 'antd';
import MetricCard from '../../components/MetricCard';
import type { EventLog } from '../../types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const { Title } = Typography;

export default function DashboardPage() {
  const { data: metrics } = useQuery({ queryKey: ['summary'], queryFn: async () => (await axios.get('/api/metrics/summary')).data });
  const { data: events } = useQuery<EventLog[]>({ queryKey: ['events'], queryFn: async () => (await axios.get('/api/events/recent')).data });

  const trend = Array.from({ length: 12 }).map((_, i) => ({
    name: String(i + 1),
    compliance: 85 + Math.random() * 10
  }));

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Row gutter={16}>
        <Col span={6}><MetricCard title="Active Vehicles" value={12847} tag={{ text: '+2.4% vs yesterday' }} /></Col>
        <Col span={6}><MetricCard title="Risk Alerts" value={23} tag={{ text: '-12.1% vs yesterday', color: 'purple' }} /></Col>
        <Col span={6}><MetricCard title="Compliance Rate" value={metrics?.complianceScore ?? 0} suffix="%" tag={{ text: '+1.2% vs yesterday' }} /></Col>
        <Col span={6}><MetricCard title="Takeover Events Today" value={metrics?.takeoverCount ?? 0} tag={{ text: '-8.5% vs yesterday', color: 'red' }} /></Col>
      </Row>

      <Row gutter={16}>
        <Col span={14}>
          <Card title="Compliance Trends">
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trend}>
                  <CartesianGrid stroke="#eee" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[80, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="compliance" stroke="#1677ff" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
        <Col span={10}>
          <Card title="Notifications" extra={<Button type="default">View All Notifications</Button>}>
            <div>High Risk Alert <Tag color="red">Warning</Tag></div>
          </Card>
        </Col>
      </Row>

      <Card title="Recent Event Log">
        <Table
          rowKey="id"
          dataSource={events || []}
          pagination={false}
          columns={[
            { title: 'Time', dataIndex: 'time' },
            { title: 'Vehicle ID', dataIndex: 'vehicleId' },
            { title: 'Event Type', dataIndex: 'eventType' },
            { title: 'Severity', dataIndex: 'severity', render: (v) => <Tag color={v === 'High' ? 'red' : v === 'Medium' ? 'gold' : 'blue'}>{v}</Tag> },
            { title: 'Status', dataIndex: 'status', render: (v) => <Tag>{v}</Tag> },
            { title: 'Location', dataIndex: 'location' },
            { title: 'Actions', render: () => <Button type="link">View</Button> }
          ]}
        />
      </Card>

      <Title level={4}>Key Safety Metrics (Mock)</Title>
      <Row gutter={16}>
        <Col span={4}><MetricCard title="Speed" value={metrics?.speedKph ?? 0} suffix="km/h" /></Col>
        <Col span={4}><MetricCard title="Braking Distance" value={metrics?.brakingDistanceM ?? 0} suffix="m" /></Col>
        <Col span={4}><MetricCard title="Blind-spot Ratio" value={Number(((metrics?.blindSpotRatio ?? 0) * 100).toFixed(1))} suffix="%" /></Col>
        <Col span={4}><MetricCard title="Sensor Coverage" value={metrics?.sensorCoverageRate ?? 0} suffix="%" /></Col>
        <Col span={4}><MetricCard title="Takeovers" value={metrics?.takeoverCount ?? 0} /></Col>
        <Col span={4}><MetricCard title="Traffic Law" value={metrics?.compliesTrafficLaw ? 'Compliant' : 'Violation'} tag={{ text: 'Collected', color: metrics?.compliesTrafficLaw ? 'green' : 'red' }} /></Col>
      </Row>
    </div>
  );
}