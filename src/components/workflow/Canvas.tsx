
import React, { useState, useRef } from 'react';
import Node, { NodeType } from './Node';

interface NodeData {
  id: string;
  type: NodeType;
  title: string;
  x: number;
  y: number;
}

interface CanvasProps {
  onSelectNode: (node: NodeData | null) => void;
  selectedNodeId: string | null;
}

const Canvas: React.FC<CanvasProps> = ({ onSelectNode, selectedNodeId }) => {
  const [nodes, setNodes] = useState<NodeData[]>([
    { id: 'trigger-1', type: 'trigger', title: 'New Claim Received', x: 100, y: 100 },
    { id: 'llm-1', type: 'llm', title: 'Extract Claim Details', x: 100, y: 250 },
    { id: 'api-1', type: 'api', title: 'Update CRM', x: 100, y: 400 }
  ]);
  
  const [connectingLine, setConnectingLine] = useState<{
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    visible: boolean;
  }>({ startX: 0, startY: 0, endX: 0, endY: 0, visible: false });
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragNodeRef = useRef<string | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  
  const handleNodeSelect = (id: string) => {
    const node = nodes.find(n => n.id === id) || null;
    onSelectNode(node);
  };
  
  const handleDragStart = (e: React.DragEvent, id: string) => {
    dragNodeRef.current = id;
    const node = nodes.find(n => n.id === id);
    
    if (node) {
      // Calculate offset from mouse position to node position
      const rect = e.currentTarget.getBoundingClientRect();
      dragOffsetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
    
    // Set a ghost drag image (transparent)
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    e.dataTransfer.setDragImage(img, 0, 0);
  };
  
  const handleDragEnd = () => {
    dragNodeRef.current = null;
  };
  
  const handleCanvasDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    
    if (dragNodeRef.current) {
      const nodeId = dragNodeRef.current;
      const canvas = canvasRef.current;
      
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left - dragOffsetRef.current.x;
        const y = e.clientY - rect.top - dragOffsetRef.current.y;
        
        setNodes(prev => prev.map(node => 
          node.id === nodeId ? { ...node, x, y } : node
        ));
      }
    }
  };
  
  const handleCanvasClick = () => {
    onSelectNode(null);
  };
  
  const updateNode = (id: string, updates: Partial<NodeData>) => {
    setNodes(prev => prev.map(node => 
      node.id === id ? { ...node, ...updates } : node
    ));
  };
  
  return (
    <div 
      ref={canvasRef}
      className="h-full w-full relative bg-dark-700/50 overflow-auto"
      onDragOver={handleCanvasDragOver}
      onClick={handleCanvasClick}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Line from trigger to LLM */}
          <line 
            x1="180" y1="150" 
            x2="180" y2="250" 
            stroke="#0CC0DF" 
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          
          {/* Line from LLM to API */}
          <line 
            x1="180" y1="300" 
            x2="180" y2="400" 
            stroke="#0CC0DF" 
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          
          {/* Dynamic connecting line */}
          {connectingLine.visible && (
            <line 
              x1={connectingLine.startX}
              y1={connectingLine.startY}
              x2={connectingLine.endX}
              y2={connectingLine.endY}
              stroke="#0CC0DF"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          )}
        </svg>
        
        {/* Nodes */}
        {nodes.map((node) => (
          <Node
            key={node.id}
            id={node.id}
            type={node.type}
            title={node.title}
            x={node.x}
            y={node.y}
            isSelected={selectedNodeId === node.id}
            onClick={handleNodeSelect}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
      
      {/* Zoom controls */}
      <div className="absolute bottom-4 right-4 bg-dark-600/80 rounded-md border border-dark-400/50 p-1 flex">
        <button className="p-1.5 hover:bg-dark-500 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="p-1.5 hover:bg-dark-500 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
          </svg>
        </button>
        <button className="p-1.5 hover:bg-dark-500 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Canvas;
