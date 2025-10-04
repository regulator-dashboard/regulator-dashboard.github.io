import { createHashRouter, RouterProvider } from 'react-router-dom';
import LayoutShell from '../components/LayoutShell';
import DashboardPage from '../features/dashboard/DashBoardPage';
import MonitoringPage from '../features/monitor/MonitoringPage';
import CompliancePage from '../features/compliance/CompliancePage';
import RiskPage from '../features/risk/RiskPage';
import PolicyPage from '../features/policy/PolicyPage';
import SettingsPage from '../features/settings/SettingsPage';

const router = createHashRouter([
  {
    path: '/',
    element: <LayoutShell />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'monitor', element: <MonitoringPage /> },
      { path: 'compliance', element: <CompliancePage /> },
      { path: 'risk', element: <RiskPage /> },
      { path: 'policy', element: <PolicyPage /> },
      { path: 'settings', element: <SettingsPage /> }
    ]
  }
]);

export default function AppRouter() { return <RouterProvider router={router} />; }


