
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-teal/5 to-transparent z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-teal/10 border border-teal/20">
                <p className="text-xs font-medium text-teal flex items-center">
                  <span className="inline-block w-2 h-2 bg-teal rounded-full mr-2"></span>
                  <span>BPO Automation Platform</span>
                </p>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Automate <span className="text-gradient">workflows</span> that drive real outcomes
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Omnify helps BPO teams automate complex workflows, reduce costs, and deliver better client outcomes with AI-powered automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-teal hover:opacity-90 text-white">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-dark-300/50 hover:bg-dark-400/50">
                  Watch Demo
                </Button>
              </div>
              
              <div className="mt-8 inline-flex items-center px-4 py-2 bg-dark-400/50 rounded-lg">
                <div className="mr-3 bg-teal/20 rounded-md px-2 py-1">
                  <span className="text-teal font-bold">40%</span>
                </div>
                <p className="text-sm text-gray-300">Average cost savings for our enterprise clients</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="glass-card rounded-2xl shadow-xl overflow-hidden border border-dark-300/20">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="Omnify Dashboard" 
                  className="w-full rounded-t-lg"
                />
                <div className="p-6 bg-gradient-to-b from-dark-400/80 to-dark-700/80">
                  <h3 className="font-medium text-lg mb-2">Workflow: Claims Processing</h3>
                  <div className="flex space-x-2 mb-4">
                    <span className="px-2 py-1 bg-teal/10 text-teal rounded-md text-xs">Automated</span>
                    <span className="px-2 py-1 bg-dark-300/30 text-gray-300 rounded-md text-xs">5 Steps</span>
                    <span className="px-2 py-1 bg-dark-300/30 text-gray-300 rounded-md text-xs">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Processing Time</p>
                      <p className="text-teal font-medium">-68% Faster</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Accuracy</p>
                      <p className="text-teal font-medium">99.2%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Cost Savings</p>
                      <p className="text-teal font-medium">$24k/mo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-20 -bottom-10 -z-10 w-64 h-64 bg-teal/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-dark-600/50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Complete BPO Automation Platform</h2>
            <p className="text-lg text-gray-300">Omnify brings together all the tools you need to automate complex workflows and drive measurable outcomes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Workflow Builder', 
                description: 'Drag-and-drop interface to create complex workflows with no coding required',
                icon: '🔄',
                link: '/workflow-builder'
              },
              { 
                title: 'Template Marketplace', 
                description: 'Pre-built workflows for common BPO processes you can implement in minutes',
                icon: '📚',
                link: '/templates'
              },
              { 
                title: 'Outcome Dashboard', 
                description: 'Track performance metrics and business outcomes in real-time',
                icon: '📊',
                link: '/dashboard'
              },
              { 
                title: 'AI Process Engine', 
                description: 'Powerful LLMs to automate document processing and decision making',
                icon: '🧠',
                link: '/'
              },
              { 
                title: 'API Integrations', 
                description: 'Connect to your existing tools and systems with pre-built connectors',
                icon: '🔌',
                link: '/'
              },
              { 
                title: 'Pricing Calculator', 
                description: 'Transparent pricing based on your actual usage and outcomes',
                icon: '💰',
                link: '/pricing'
              }
            ].map((feature, index) => (
              <Link to={feature.link} key={index} className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="flex items-center text-teal text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-teal/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-teal/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your BPO operations?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Join industry leaders who have reduced costs by 40% and improved client satisfaction scores by implementing Omnify's automation platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-teal hover:opacity-90 text-white">
                  Start Your Free Trial
                </Button>
                <Button variant="outline" size="lg" className="border-dark-300/50 hover:bg-dark-400/50">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark-700 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-dark-500">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-gradient-teal flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <span className="font-bold text-xl text-white">Omnify</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                The complete BPO automation platform that delivers real business outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
                <ul className="space-y-2">
                  {['Features', 'Integrations', 'Pricing', 'Documentation', 'Updates'].map(item => (
                    <li key={item}><a href="#" className="text-gray-400 hover:text-teal text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  {['About', 'Customers', 'Careers', 'Blog', 'Contact'].map(item => (
                    <li key={item}><a href="#" className="text-gray-400 hover:text-teal text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  {['Community', 'Help Center', 'Partners', 'Status', 'Privacy'].map(item => (
                    <li key={item}><a href="#" className="text-gray-400 hover:text-teal text-sm">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Omnify. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map(item => (
                <a key={item} href="#" className="text-gray-400 hover:text-teal text-sm">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
