import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Table, Button, Tag } from 'antd';
import type { VehicleMetrics } from '../../types';


type Row = { id: string; city: string; metrics: VehicleMetrics };

export default function MonitoringPage() {
  const { data, refetch, isFetching } = useQuery<Row[]>({ queryKey: ['vehicles'], queryFn: async () => (await axios.get('/api/vehicles')).data });

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


