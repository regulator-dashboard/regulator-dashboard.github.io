import { Card, Statistic, Tag } from 'antd';

export default function MetricCard(props: {
  title: string;
  value: number | string;
  suffix?: string;
  tag?: { text: string; color?: string };
}) {
  const { title, value, suffix, tag } = props;
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 14, color: '#6b7280' }}>{title}</div>
        {tag && <Tag color={tag.color || 'geekblue'}>{tag.text}</Tag>}
      </div>
      <Statistic value={value as number} suffix={suffix} precision={typeof value === 'number' ? 1 : undefined} />
    </Card>
  );
}