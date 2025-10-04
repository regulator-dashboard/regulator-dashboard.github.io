import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Table, Button, Tag } from 'antd';
import type { VehicleMetrics } from '../../types';

type Row = { id: string; city: string; metrics: VehicleMetrics };

// Mock data for vehicles
const mockVehicles: Row[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `AV-2024-${String(100 + i).padStart(3, '0')}`,
  city: ['St Lucia', 'Sunnybank', 'South Bank', 'Fortitude Valley', 'New Farm', 'West End', 'Kangaroo Point', 'Teneriffe', 'Spring Hill', 'Paddington'][i % 10],
  metrics: {
    speedKph: 40 + Math.round(Math.random() * 60),
    brakingDistanceM: 12 + Math.round(Math.random() * 15),
    blindSpotRatio: Number((Math.random() * 0.25).toFixed(2)),
    complianceScore: Number((85 + Math.random() * 15).toFixed(1)),
    sensorCoverageRate: Number((80 + Math.random() * 20).toFixed(1)),
    takeoverCount: Math.round(Math.random() * 200),
    compliesTrafficLaw: Math.random() > 0.08
  }
}));

export default function MonitoringPage() {
  const { data, refetch, isFetching } = useQuery<Row[]>({ 
    queryKey: ['vehicles'], 
    queryFn: async () => {
      try {
        // Try to fetch from API first
        const response = await axios.get('/api/vehicles');
        return response.data;
      } catch (error) {
        // Fallback to mock data if API fails
        console.log('API failed, using mock data');
        return mockVehicles;
      }
    }
  });

  return (
    <>
      <div style={{ marginBottom: 12 }}>
        <Button type="primary" onClick={() => refetch()} loading={isFetching}>Refresh data</Button>
      </div>
      <Table<Row>
        rowKey="id"
        dataSource={data || []}
        columns={[
          { title: 'Vehicle', dataIndex: 'id' },
          { title: 'City', dataIndex: 'city' },
          { title: 'Speed(km/h)', render: (_, r) => r.metrics.speedKph },
          { title: 'Braking(m)', render: (_, r) => r.metrics.brakingDistanceM },
          { title: 'Blind-spot %', render: (_, r) => (r.metrics.blindSpotRatio * 100).toFixed(1) },
          { title: 'Sensor Coverage %', render: (_, r) => r.metrics.sensorCoverageRate },
          { title: 'Takeovers', render: (_, r) => r.metrics.takeoverCount },
          { title: 'Traffic Law', render: (_, r) => <Tag color={r.metrics.compliesTrafficLaw ? 'green' : 'red'}>{r.metrics.compliesTrafficLaw ? 'Compliant' : 'Violation'}</Tag> },
          { title: 'Action', render: () => <Button type="link">Inspect</Button> }
        ]}
      />
    </>
  );
}


