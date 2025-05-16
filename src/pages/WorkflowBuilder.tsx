
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Canvas from '@/components/workflow/Canvas';
import Sidebar from '@/components/workflow/Sidebar';

interface NodeData {
  id: string;
  type: 'trigger' | 'llm' | 'api';
  title: string;
  x: number;
  y: number;
}

const WorkflowBuilder = () => {
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [workflowName, setWorkflowName] = useState('New Workflow');
  
  const handleUpdateNode = (id: string, updates: { title: string }) => {
    setSelectedNode(prev => prev && prev.id === id ? { ...prev, ...updates } : prev);
  };
  
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      {/* Toolbar */}
      <div className="bg-dark-600 border-b border-dark-400/50 py-3 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <input
              type="text"
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)}
              className="bg-transparent border-none text-lg font-medium focus:outline-none focus:ring-0 text-white mr-2 w-64"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-teal cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-dark-300/50 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              New
            </Button>
            
            <Button variant="outline" size="sm" className="border-dark-300/50 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3" />
              </svg>
              Save
            </Button>
            
            <Button variant="outline" size="sm" className="border-dark-300/50 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Duplicate
            </Button>
          </div>
        </div>
        
        <div>
          <Button className="bg-gradient-teal hover:opacity-90 text-white">
            Deploy Workflow
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </Button>
        </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        {/* Main canvas */}
        <div className="flex-1 overflow-hidden">
          <Canvas 
            onSelectNode={setSelectedNode}
            selectedNodeId={selectedNode?.id || null}
          />
        </div>
        
        {/* Sidebar */}
        <div className="w-80 border-l border-dark-400/50 bg-dark-600/70 overflow-y-auto">
          <Sidebar 
            selectedNode={selectedNode} 
            onUpdateNode={handleUpdateNode}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
