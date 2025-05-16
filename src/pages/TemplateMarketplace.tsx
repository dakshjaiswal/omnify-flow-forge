
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const templates = [
  {
    id: 'template-1',
    name: 'Claims - Tim',
    icon: '📝',
    description: 'Automated claims processing workflow with document extraction and validation.',
    category: 'Insurance',
    outcomes: '217 claims/day',
    author: 'Tim Johnson',
    authorRole: 'Claims Manager',
    authorAvatar: 'TJ',
    steps: 5,
    rating: 4.8
  },
  {
    id: 'template-2',
    name: 'CX - Abby',
    icon: '🎧',
    description: 'Customer support workflow with automated ticket classification and routing.',
    category: 'Support',
    outcomes: '93% CSAT',
    author: 'Abby Martinez',
    authorRole: 'CS Lead',
    authorAvatar: 'AM',
    steps: 4,
    rating: 4.9
  },
  {
    id: 'template-3',
    name: 'Document - Alex',
    icon: '📄',
    description: 'Process documents with OCR and data extraction for backend systems.',
    category: 'Document Processing',
    outcomes: '-68% processing time',
    author: 'Alex Wong',
    authorRole: 'Ops Manager',
    authorAvatar: 'AW',
    steps: 6,
    rating: 4.7
  },
  {
    id: 'template-4',
    name: 'Finance - Priya',
    icon: '💰',
    description: 'Automated invoice processing with validation and approval workflows.',
    category: 'Finance',
    outcomes: '$42k monthly savings',
    author: 'Priya Sharma',
    authorRole: 'Finance Director',
    authorAvatar: 'PS',
    steps: 7,
    rating: 4.6
  },
  {
    id: 'template-5',
    name: 'HR - Jordan',
    icon: '👥',
    description: 'Employee onboarding workflow with document verification and system setup.',
    category: 'Human Resources',
    outcomes: '6 hour onboarding reduction',
    author: 'Jordan Lee',
    authorRole: 'HR Lead',
    authorAvatar: 'JL',
    steps: 8,
    rating: 4.5
  },
  {
    id: 'template-6',
    name: 'Order - Michael',
    icon: '🛒',
    description: 'Order processing workflow with inventory checks and fulfillment automation.',
    category: 'E-commerce',
    outcomes: '99.8% fulfillment accuracy',
    author: 'Michael Brown',
    authorRole: 'Operations Director',
    authorAvatar: 'MB',
    steps: 5,
    rating: 4.9
  }
];

const TemplateMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || template.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = ['all', ...new Set(templates.map(t => t.category.toLowerCase()))];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Template Marketplace</h1>
          <p className="text-gray-400">
            Discover pre-built workflows created by industry experts that you can install and customize.
          </p>
        </div>
        <Button className="bg-gradient-teal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Submit Template
        </Button>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-dark-400/50 border-dark-300/50"
            />
          </div>
          
          <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setSelectedCategory}>
            <TabsList className="w-full md:w-auto bg-dark-400/50">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="capitalize data-[state=active]:bg-teal/20 data-[state=active]:text-teal"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="glass-card rounded-xl overflow-hidden border border-dark-300/20 hover:shadow-glow transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{template.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <span className="text-xs px-2 py-0.5 bg-dark-400/50 rounded-full text-gray-300">
                      {template.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center bg-teal/10 px-2 py-0.5 rounded text-teal text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {template.outcomes}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 h-12 line-clamp-2">
                {template.description}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-dark-400 flex items-center justify-center mr-3">
                    <span className="text-xs font-medium">{template.authorAvatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{template.author}</p>
                    <p className="text-xs text-gray-400">{template.authorRole}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-sm ml-1">{template.rating}</span>
                  </div>
                  <span className="text-xs text-gray-400">{template.steps} steps</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-teal">
                Install Template
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateMarketplace;
