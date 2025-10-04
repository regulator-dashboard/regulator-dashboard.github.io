export type Severity = 'Low' | 'Medium' | 'High';
export type Progress = 'Pending' | 'In Progress' | 'Resolved';

export interface VehicleMetrics {
  speedKph: number;
  brakingDistanceM: number;
  blindSpotRatio: number;            // 0~1
  complianceScore: number;           // 0~100
  sensorCoverageRate: number;        // 0~100
  takeoverCount: number;
  compliesTrafficLaw: boolean;       // 是否符合道路交通法规
}

export interface EventLog {
  id: string;
  time: string;
  vehicleId: string;
  eventType: string;
  severity: Severity;
  status: Progress;
  location: string;
}