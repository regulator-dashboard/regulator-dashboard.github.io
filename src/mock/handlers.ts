import { http, HttpResponse } from 'msw';
import { demoMetrics, recentEvents } from './data';

export const handlers = [
  http.get('/api/metrics/summary', () => HttpResponse.json(demoMetrics)),
  http.get('/api/events/recent', () => HttpResponse.json(recentEvents)),
  http.get('/api/notifications', () => HttpResponse.json([{ id: 'n1', title: 'High Risk Alert', level: 'warning' }])),
  http.get('/api/vehicles', () =>
    HttpResponse.json(
      Array.from({ length: 12 }).map((_, i) => ({
        id: `AV-2024-${String(100 + i)}`,
        city: ['SF', 'LA', 'Seattle', 'Austin'][i % 4],
        metrics: {
          speedKph: 40 + Math.round(Math.random() * 60),
          brakingDistanceM: 12 + Math.round(Math.random() * 15),
          blindSpotRatio: Number((Math.random() * 0.25).toFixed(2)),
          complianceScore: Number((85 + Math.random() * 15).toFixed(1)),
          sensorCoverageRate: Number((80 + Math.random() * 20).toFixed(1)),
          takeoverCount: Math.round(Math.random() * 200),
          compliesTrafficLaw: Math.random() > 0.08
        }
      }))
    )
  )
];