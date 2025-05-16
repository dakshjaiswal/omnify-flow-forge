
import React from 'react';
import { cn } from '@/lib/utils';

export type NodeType = 'trigger' | 'llm' | 'api';

export interface NodeProps {
  id: string;
  type: NodeType;
  title: string;
  x: number;
  y: number;
  isSelected?: boolean;
  onClick: (id: string) => void;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDragEnd: () => void;
}

const Node: React.FC<NodeProps> = ({
  id,
  type,
  title,
  x,
  y,
  isSelected = false,
  onClick,
  onDragStart,
  onDragEnd
}) => {
  const nodeTypeClasses = {
    trigger: 'bg-gradient-to-br from-blue-600/20 to-blue-700/20 border-blue-500/30 text-blue-400',
    llm: 'bg-gradient-to-br from-teal-600/20 to-teal-700/20 border-teal/30 text-teal',
    api: 'bg-gradient-to-br from-purple-600/20 to-purple-700/20 border-purple-500/30 text-purple-400',
  };

  const nodeIcons = {
    trigger: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    llm: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    api: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  };

  return (
    <div
      className={cn(
        'absolute w-64 p-4 rounded-lg border shadow-md transition-all cursor-move',
        nodeTypeClasses[type],
        isSelected && 'ring-2 ring-teal shadow-glow'
      )}
      style={{ 
        left: `${x}px`, 
        top: `${y}px`,
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(id);
      }}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDragEnd={onDragEnd}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="mr-2 p-1.5 rounded-md bg-dark-500/50">
            {nodeIcons[type]}
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <div className="h-2 w-2 rounded-full bg-green-400"></div>
      </div>
      
      <div className="bg-dark-500/50 rounded-md p-2 text-xs text-gray-300">
        {type === 'trigger' && 'Triggers when a new item is created'}
        {type === 'llm' && 'Processes text with AI model'}
        {type === 'api' && 'Makes an external API request'}
      </div>
      
      <div className="flex justify-between mt-3">
        <div className="text-xs text-gray-400">ID: {id.slice(0, 8)}</div>
        <div className="text-xs font-medium">{type.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default Node;
