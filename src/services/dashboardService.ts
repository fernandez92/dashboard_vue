import type { KpiData, ActivityItem } from '../types';

/**
 * Dashboard Service
 * 
 * This service acts as our 'Mock Database' layer. In a real-world scenario,
 * this would handle asynchronous fetch/axios calls to a backend API.
 * 
 * We use TypeScript interfaces to ensure data consistency across the app,
 * following Clean Code principles by separating data fetching from UI logic.
 */
export const dashboardService = {
  async getKpis(): Promise<KpiData[]> {
    // Simulating API call
    return [
      { label: 'Total Revenue', value: '$128,430', trend: 12.5, icon: 'DollarSign' },
      { label: 'Active Users', value: '14,230', trend: 8.2, icon: 'Users' },
      { label: 'Conversion Rate', value: '3.42%', trend: -2.1, icon: 'Zap' },
      { label: 'Avg. Session', value: '4m 32s', trend: 5.4, icon: 'Clock' }
    ];
  },

  async getRecentActivity(): Promise<ActivityItem[]> {
    return [
      { id: '1', user: 'Alex Rivera', action: 'Deployed v2.4.0 to production', time: '2m ago', status: 'success' },
      { id: '2', user: 'Sarah Chen', action: 'Database migration completed', time: '15m ago', status: 'success' },
      { id: '3', user: 'System', action: 'High memory usage detected', time: '45m ago', status: 'warning' },
      { id: '4', user: 'Marcus Wright', action: 'New API key generated', time: '1h ago', status: 'success' },
      { id: '5', user: 'System', action: 'Backup failed for node-04', time: '2h ago', status: 'error' }
    ];
  }
};
