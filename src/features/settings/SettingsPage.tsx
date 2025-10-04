import { useState } from 'react';
import { Card, Button, Row, Col, Select, InputNumber } from 'antd';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    smsNotifications: false,
    dashboardAlerts: true,
    autoRefreshInterval: '30 seconds',
    dataRetention: '90 days',
    riskThreshold: 'Medium'
  });

  const toggleSetting = (settingName: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [settingName]: !prev[settingName]
    }));
  };

  const updateSetting = (settingName: keyof typeof settings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [settingName]: value
    }));
  };

  return (
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
                  {settings.emailAlerts ? 'Enabled' : 'Disabled'}
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
                  {settings.smsNotifications ? 'Enabled' : 'Disabled'}
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
                  {settings.dashboardAlerts ? 'Enabled' : 'Disabled'}
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
                <Select
                  size="small"
                  value={settings.autoRefreshInterval}
                  onChange={(value) => updateSetting('autoRefreshInterval', value)}
                  style={{ width: 120 }}
                  options={[
                    { label: '10 seconds', value: '10 seconds' },
                    { label: '30 seconds', value: '30 seconds' },
                    { label: '1 minute', value: '1 minute' },
                    { label: '5 minutes', value: '5 minutes' }
                  ]}
                />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Data Retention</span>
                <Select
                  size="small"
                  value={settings.dataRetention}
                  onChange={(value) => updateSetting('dataRetention', value)}
                  style={{ width: 120 }}
                  options={[
                    { label: '30 days', value: '30 days' },
                    { label: '90 days', value: '90 days' },
                    { label: '180 days', value: '180 days' },
                    { label: '1 year', value: '1 year' }
                  ]}
                />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Risk Threshold</span>
                <Select
                  size="small"
                  value={settings.riskThreshold}
                  onChange={(value) => updateSetting('riskThreshold', value)}
                  style={{ width: 120 }}
                  options={[
                    { label: 'Low', value: 'Low' },
                    { label: 'Medium', value: 'Medium' },
                    { label: 'High', value: 'High' }
                  ]}
                />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="Advanced Settings">
            <Row gutter={16}>
              <Col span={8}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ marginBottom: 8 }}>Alert Sound Volume</div>
                  <InputNumber
                    min={0}
                    max={100}
                    defaultValue={75}
                    formatter={value => `${value}%`}
                    parser={value => value!.replace('%', '')}
                    style={{ width: '100%' }}
                  />
                </div>
              </Col>
              <Col span={8}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ marginBottom: 8 }}>Max Concurrent Alerts</div>
                  <InputNumber
                    min={1}
                    max={50}
                    defaultValue={10}
                    style={{ width: '100%' }}
                  />
                </div>
              </Col>
              <Col span={8}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ marginBottom: 8 }}>Session Timeout (minutes)</div>
                  <InputNumber
                    min={5}
                    max={480}
                    defaultValue={60}
                    style={{ width: '100%' }}
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}


