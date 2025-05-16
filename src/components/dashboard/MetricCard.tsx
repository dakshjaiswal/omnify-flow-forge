
import React from 'react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    positive: boolean;
  };
  icon?: React.ReactNode;
  trend?: number[];
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  trend = [30, 40, 45, 50, 55, 60, 65],
  className
}) => {
  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      <div className="flex items-start justify-between mb-4">
        <p className="text-gray-400 text-sm">{title}</p>
        {icon && (
          <div className="p-2 rounded-md bg-dark-400/50">
            {icon}
          </div>
        )}
      </div>
      
      <div className="flex items-end space-x-2 mb-4">
        <h3 className="text-2xl font-bold">{value}</h3>
        {change && (
          <div className={cn(
            "text-xs font-medium flex items-center px-2 py-1 rounded",
            change.positive ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10"
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={change.positive ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} 
              />
            </svg>
            {change.value}
          </div>
        )}
      </div>
      
      {trend && (
        <div className="h-10 flex items-end">
          {trend.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-teal-500/10 to-teal-500/50 rounded-sm mx-0.5"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
