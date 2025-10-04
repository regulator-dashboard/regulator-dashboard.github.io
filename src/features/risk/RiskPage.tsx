import { Card, Segmented, List, Tag } from 'antd';
export default function RiskPage() {
  return (
    <Card title="Risk Alerts" extra={<Segmented options={['All', 'High', 'Medium', 'Low']} defaultValue="All" />}>
      <List
        dataSource={[{ t: 'High Risk Alert', s: 'High' }, { t: 'Speed Violation', s: 'Medium' }]}
        renderItem={(i) => (<List.Item actions={[<a key="v">View</a>]}>{i.t} <Tag color={i.s === 'High' ? 'red' : 'gold'}>{i.s}</Tag></List.Item>)}
      />
    </Card>
  );
}


