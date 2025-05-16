
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NodeType } from './Node';

interface SidebarProps {
  selectedNode: {
    id: string;
    type: NodeType;
    title: string;
  } | null;
  onUpdateNode: (id: string, updates: { title: string }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedNode, onUpdateNode }) => {
  if (!selectedNode) {
    return (
      <div className="h-full p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Workflow Builder</h2>
        <p className="text-gray-400 mb-6">Select a node to configure or drag new nodes onto the canvas.</p>
        
        <h3 className="font-medium mb-3 text-sm">Available Nodes</h3>
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 text-blue-400 p-3 rounded-md">
            <h4 className="font-medium text-sm mb-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Trigger
            </h4>
            <p className="text-xs text-gray-300">Start your workflow with a trigger event</p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-600/20 to-teal-700/20 border border-teal/30 text-teal p-3 rounded-md">
            <h4 className="font-medium text-sm mb-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              LLM Step
            </h4>
            <p className="text-xs text-gray-300">Process data using AI models</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 text-purple-400 p-3 rounded-md">
            <h4 className="font-medium text-sm mb-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              API Call
            </h4>
            <p className="text-xs text-gray-300">Connect to external services</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-medium mb-3 text-sm">Instructions</h3>
          <ol className="list-decimal list-inside text-gray-300 text-sm space-y-2">
            <li>Drag nodes onto the canvas</li>
            <li>Connect nodes by dragging between them</li>
            <li>Configure each node in the sidebar</li>
            <li>Deploy your workflow when ready</li>
          </ol>
        </div>
        
        <div className="mt-auto">
          <Button className="w-full bg-gradient-teal">Deploy Workflow</Button>
        </div>
      </div>
    );
  }

  const renderNodeConfig = () => {
    switch (selectedNode.type) {
      case 'trigger':
        return (
          <>
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label>Trigger Type</Label>
                <Select defaultValue="form">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="form">Form Submission</SelectItem>
                    <SelectItem value="webhook">Webhook</SelectItem>
                    <SelectItem value="schedule">Schedule</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Form ID</Label>
                <Input placeholder="claim-form-123" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="validation" />
                <Label htmlFor="validation">Enable input validation</Label>
              </div>
            </div>
          </>
        );
      
      case 'llm':
        return (
          <>
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label>AI Model</Label>
                <Select defaultValue="gpt4">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt4">GPT-4</SelectItem>
                    <SelectItem value="claude">Claude 3</SelectItem>
                    <SelectItem value="llama">Llama 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>System Prompt</Label>
                <Textarea 
                  placeholder="You are a claims processing assistant..." 
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Temperature</Label>
                <div className="flex items-center">
                  <Input type="range" min="0" max="1" step="0.1" defaultValue="0.7" className="w-full" />
                  <span className="ml-2 text-sm">0.7</span>
                </div>
              </div>
            </div>
          </>
        );
        
      case 'api':
        return (
          <>
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <Label>Endpoint URL</Label>
                <Input placeholder="https://api.example.com/process" />
              </div>
              
              <div className="space-y-2">
                <Label>Method</Label>
                <Select defaultValue="post">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="get">GET</SelectItem>
                    <SelectItem value="post">POST</SelectItem>
                    <SelectItem value="put">PUT</SelectItem>
                    <SelectItem value="delete">DELETE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Headers</Label>
                <Textarea 
                  placeholder="Content-Type: application/json" 
                  className="min-h-[70px]"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="auth" defaultChecked />
                <Label htmlFor="auth">Use authentication</Label>
              </div>
            </div>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="h-full p-6 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Configure Node</h2>
        <Button variant="ghost" size="icon" className="text-gray-400 h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Button>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="space-y-2">
          <Label>Node Name</Label>
          <Input 
            value={selectedNode.title} 
            onChange={(e) => onUpdateNode(selectedNode.id, { title: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Node Type</Label>
          <div className="text-teal bg-teal/10 border border-teal/20 rounded-md px-3 py-2 text-sm inline-block">
            {selectedNode.type.toUpperCase()}
          </div>
        </div>
      </div>
      
      <Separator className="bg-dark-300/50 my-4" />
      
      {renderNodeConfig()}
      
      <div className="mt-auto space-y-3">
        <Button className="w-full bg-gradient-teal">Apply Changes</Button>
        <Button variant="outline" className="w-full border-dark-300/50">Delete Node</Button>
      </div>
    </div>
  );
};

export default Sidebar;
