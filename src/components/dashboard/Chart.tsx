
import React from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { cn } from '@/lib/utils';

interface DonutChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  className?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({ data, className }) => {
  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      <h3 className="text-lg font-semibold mb-4">Outcomes by Status</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ 
                backgroundColor: '#1A1F2C', 
                borderColor: '#3E4045',
                borderRadius: '0.5rem'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="h-3 w-3 rounded-sm mr-2"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm">{item.name}</span>
            <span className="ml-auto text-sm font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface LineChartProps {
  data: {
    name: string;
    value: number;
  }[];
  className?: string;
}

export const OutcomesLineChart: React.FC<LineChartProps> = ({ data, className }) => {
  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      <h3 className="text-lg font-semibold mb-4">Weekly Volume</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2C2F36" />
            <XAxis 
              dataKey="name" 
              stroke="#767A80"
              tick={{ fill: '#767A80', fontSize: 12 }}
            />
            <YAxis 
              stroke="#767A80" 
              tick={{ fill: '#767A80', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: '#1A1F2C', 
                borderColor: '#3E4045',
                borderRadius: '0.5rem'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="value" 
              name="Outcomes"
              stroke="#0CC0DF"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
