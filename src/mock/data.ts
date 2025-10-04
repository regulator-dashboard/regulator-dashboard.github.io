import type { EventLog, VehicleMetrics } from '../types';
import type { ComplianceData } from '../services/pdfService';

export const demoMetrics: VehicleMetrics = {
  speedKph: 62,
  brakingDistanceM: 18,
  blindSpotRatio: 0.12,
  complianceScore: 94.2,
  sensorCoverageRate: 92.5,
  takeoverCount: 156,
  compliesTrafficLaw: true
};

export const recentEvents: EventLog[] = [
  { id: 'e1', time: '14:32', vehicleId: 'AV-2024-001', eventType: 'Emergency Takeover', severity: 'High',   status: 'In Progress', location: 'Downtown San Francisco' },
  { id: 'e2', time: '14:15', vehicleId: 'AV-2024-045', eventType: 'Sensor Malfunction',  severity: 'Medium', status: 'Resolved',    location: 'Silicon Valley' },
  { id: 'e3', time: '13:58', vehicleId: 'AV-2024-023', eventType: 'Path Deviation',      severity: 'Low',    status: 'Resolved',    location: 'Los Angeles' },
  { id: 'e4', time: '13:45', vehicleId: 'AV-2024-067', eventType: 'Speed Violation',     severity: 'Medium', status: 'Pending',     location: 'Seattle' },
  { id: 'e5', time: '13:30', vehicleId: 'AV-2024-012', eventType: 'Communication Loss',  severity: 'High',   status: 'In Progress', location: 'Austin' }
];

export const mockComplianceData: ComplianceData = {
  overallCompliance: 94.2,
  speedViolations: 23,
  trafficLawViolations: 8,
  regulations: [
    {
      name: 'Speed Limit Compliance',
      compliance: 96.8,
      violations: 45,
      trend: 2.1
    },
    {
      name: 'Lane Keeping',
      compliance: 98.2,
      violations: 12,
      trend: 0.5
    },
    {
      name: 'Following Distance',
      compliance: 91.5,
      violations: 78,
      trend: -1.2
    },
    {
      name: 'Traffic Signal Recognition',
      compliance: 99.1,
      violations: 8,
      trend: 0.3
    },
    {
      name: 'Pedestrian Detection',
      compliance: 97.3,
      violations: 23,
      trend: 1.8
    }
  ],
  areaRiskAnalysis: [
    {
      area: 'St Lucia',
      riskLevel: 'High',
      violationRate: 15.2,
      commonViolations: ['Speed Violations', 'Lane Departure', 'Following Distance']
    },
    {
      area: 'South Bank',
      riskLevel: 'Medium',
      violationRate: 8.7,
      commonViolations: ['Sensor Malfunction', 'Path Deviation']
    },
    {
      area: 'New Farm',
      riskLevel: 'Low',
      violationRate: 3.1,
      commonViolations: ['Minor Path Adjustments']
    },
    {
      area: 'Kangaroo Point',
      riskLevel: 'High',
      violationRate: 18.5,
      commonViolations: ['High Speed Violations', 'Traffic Signal Violations', 'Emergency Takeovers']
    },
    {
      area: 'Spring Hill',
      riskLevel: 'Medium',
      violationRate: 6.8,
      commonViolations: ['Braking Distance Issues', 'Sensor Coverage']
    }
  ]
};