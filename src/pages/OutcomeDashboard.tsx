
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MetricCard from '@/components/dashboard/MetricCard';
import { DonutChart, OutcomesLineChart } from '@/components/dashboard/Chart';

const donutData = [
  { name: 'Completed', value: 458, color: '#0CC0DF' },
  { name: 'In Progress', value: 124, color: '#7C5DFA' },
  { name: 'Failed', value: 38, color: '#EC4899' },
  { name: 'Pending', value: 87, color: '#F59E0B' },
];

const lineData = [
  { name: 'Mon', value: 540 },
  { name: 'Tue', value: 620 },
  { name: 'Wed', value: 710 },
  { name: 'Thu', value: 680 },
  { name: 'Fri', value: 750 },
  { name: 'Sat', value: 480 },
  { name: 'Sun', value: 410 },
];

const OutcomeDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Outcome Dashboard</h1>
          <p className="text-gray-400">
            Track, measure, and analyze your workflow performance.
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 bg-dark-400/50 border-dark-300/50">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="border-dark-300/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export
          </Button>
          
          <Button className="bg-gradient-teal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </Button>
        </div>
      </div>
      
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MetricCard 
          title="Outcomes Processed" 
          value="707"
          change={{ value: "12.5%", positive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          trend={[30, 35, 40, 50, 55, 65, 70]}
        />
        
        <MetricCard 
          title="Average TAT" 
          value="1.8 hours"
          change={{ value: "35%", positive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          trend={[60, 55, 45, 40, 30, 25, 20]}
        />
        
        <MetricCard 
          title="Cost Savings" 
          value="$28,450"
          change={{ value: "8.3%", positive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          trend={[20, 30, 40, 50, 55, 65, 70]}
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <DonutChart data={donutData} />
        <OutcomesLineChart data={lineData} />
      </div>
      
      {/* Recent Outcomes Table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-6 border-b border-dark-400/50">
          <h3 className="text-lg font-semibold">Recent Outcomes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-400/30">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Workflow</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Processing Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-400/30">
              {[
                { id: 'OUT-7845', workflow: 'Claims Processing', status: 'Completed', time: '1.4 mins', date: '2025-05-16 09:45' },
                { id: 'OUT-7844', workflow: 'Customer Onboarding', status: 'In Progress', time: '24.2 mins', date: '2025-05-16 09:30' },
                { id: 'OUT-7843', workflow: 'Invoice Processing', status: 'Completed', time: '2.8 mins', date: '2025-05-16 09:15' },
                { id: 'OUT-7842', workflow: 'Claims Processing', status: 'Failed', time: '0.8 mins', date: '2025-05-16 09:10' },
                { id: 'OUT-7841', workflow: 'Document Review', status: 'Completed', time: '3.2 mins', date: '2025-05-16 09:00' },
                { id: 'OUT-7840', workflow: 'Claims Processing', status: 'Completed', time: '1.5 mins', date: '2025-05-16 08:45' }
              ].map((item, index) => (
                <tr key={index} className="hover:bg-dark-400/10">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {item.workflow}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === 'Completed' ? 'bg-teal/10 text-teal' :
                      item.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {item.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-dark-400/50 flex justify-center">
          <Button variant="outline" className="border-dark-300/50 text-xs">
            View All Outcomes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OutcomeDashboard;
