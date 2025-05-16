
import React from 'react';
import { Button } from '@/components/ui/button';
import Calculator from '@/components/pricing/Calculator';

const PricingCalculator = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent, <span className="text-gradient">outcome-based</span> pricing</h1>
        <p className="text-xl text-gray-300">
          Only pay for what you use. No hidden fees, no long-term contracts.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-6">How Our Pricing Works</h2>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="mr-4 h-10 w-10 rounded-full bg-teal/20 flex items-center justify-center text-teal font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Pay Per Outcome</h3>
                <p className="text-gray-300">
                  Instead of charging by user or feature, we only charge for actual business outcomes your workflows process.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 h-10 w-10 rounded-full bg-teal/20 flex items-center justify-center text-teal font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">Volume Discounts</h3>
                <p className="text-gray-300">
                  As your volume increases, your per-outcome price automatically decreases, with savings of up to 40%.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 h-10 w-10 rounded-full bg-teal/20 flex items-center justify-center text-teal font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">All Features Included</h3>
                <p className="text-gray-300">
                  Every plan includes all features, integrations, and priority support. No feature gates or upsells.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 h-10 w-10 rounded-full bg-teal/20 flex items-center justify-center text-teal font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-2">Predictable Billing</h3>
                <p className="text-gray-300">
                  Set volume caps to control your monthly spend. Never worry about unexpected charges or overage fees.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What counts as an 'outcome'?",
                  answer: "An outcome is a completed workflow execution that delivers business value. This could be a processed claim, an approved invoice, an onboarded customer, etc."
                },
                {
                  question: "Is there a minimum commitment?",
                  answer: "No, we don't require any minimum commitment or long-term contracts. You only pay for what you use each month."
                },
                {
                  question: "Do you offer annual pricing?",
                  answer: "Yes, annual plans are available with additional discounts of up to 15% compared to monthly pricing."
                },
                {
                  question: "Can I change my plan anytime?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
                }
              ].map((faq, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:sticky lg:top-24">
          <Calculator />
          
          <div className="mt-8 text-center">
            <Button size="lg" className="bg-gradient-teal hover:opacity-90 w-full sm:w-auto">
              Start Your Free Trial
            </Button>
            <p className="mt-4 text-sm text-gray-400">
              14-day free trial, no credit card required
            </p>
          </div>
          
          <div className="mt-12 p-6 bg-dark-400/30 rounded-xl border border-dark-300/30 text-center">
            <h3 className="font-semibold mb-2">Looking for enterprise pricing?</h3>
            <p className="text-sm text-gray-300 mb-4">
              We offer custom solutions for organizations with unique requirements or higher volumes.
            </p>
            <Button variant="outline" className="border-teal/30 text-teal w-full">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
