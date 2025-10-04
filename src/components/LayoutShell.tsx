import { Layout, Menu, Input, Badge, Avatar } from 'antd';
import { DashboardOutlined, CarOutlined, FileSearchOutlined, AlertOutlined, SettingOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const items = [
  { key: '/', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: '/monitor', icon: <CarOutlined />, label: 'Vehicle Monitoring' },
  { key: '/compliance', icon: <FileSearchOutlined />, label: 'Compliance Reports' },
  { key: '/risk', icon: <AlertOutlined />, label: 'Risk Alerts' },
  { key: '/policy', icon: <SafetyCertificateOutlined />, label: 'Policy / Standards' },
  { key: '/settings', icon: <SettingOutlined />, label: 'Settings' }
];

export default function LayoutShell() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={280} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
        <div style={{ padding: 16, fontWeight: 700 }}>Autonomous Driving Regulator</div>
        <Menu mode="inline" selectedKeys={[pathname]} items={items} onClick={(e) => nav(e.key)} />
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', display: 'flex', gap: 16, alignItems: 'center', paddingInline: 16 }}>
          <Input.Search placeholder="Search vehicles, events..." style={{ maxWidth: 520 }} />
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
            <Badge count={3}><span style={{ cursor: 'pointer' }}>🔔</span></Badge>
            <Avatar size="small">R</Avatar>
          </div>
        </Header>
        <Content style={{ padding: 20, background: '#fafafa' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}


