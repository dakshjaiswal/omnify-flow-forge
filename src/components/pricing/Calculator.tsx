
import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface CalculatorProps {
  className?: string;
}

const Calculator: React.FC<CalculatorProps> = ({ className }) => {
  const [outcomes, setOutcomes] = useState(500);
  const [price, setPrice] = useState(0);
  const [savings, setSavings] = useState(0);
  
  const MIN_OUTCOMES = 100;
  const MAX_OUTCOMES = 10000;
  const BASE_PRICE_PER_OUTCOME = 1.5;
  const VOLUME_DISCOUNT_THRESHOLD = 1000;
  const VOLUME_DISCOUNT_RATE = 0.25; // 25% discount for volume over threshold
  const TRADITIONAL_COST_PER_OUTCOME = 2.8; // Estimated cost of traditional processing
  
  useEffect(() => {
    // Calculate price with volume discount
    let calculatedPrice = 0;
    
    if (outcomes <= VOLUME_DISCOUNT_THRESHOLD) {
      calculatedPrice = outcomes * BASE_PRICE_PER_OUTCOME;
    } else {
      calculatedPrice = 
        VOLUME_DISCOUNT_THRESHOLD * BASE_PRICE_PER_OUTCOME +
        (outcomes - VOLUME_DISCOUNT_THRESHOLD) * BASE_PRICE_PER_OUTCOME * (1 - VOLUME_DISCOUNT_RATE);
    }
    
    // Round to nearest dollar
    calculatedPrice = Math.round(calculatedPrice);
    setPrice(calculatedPrice);
    
    // Calculate savings compared to traditional costs
    const traditionalCost = outcomes * TRADITIONAL_COST_PER_OUTCOME;
    const savingsAmount = traditionalCost - calculatedPrice;
    const savingsPercent = Math.round((savingsAmount / traditionalCost) * 100);
    setSavings(savingsPercent);
    
  }, [outcomes]);
  
  const formatOutcomes = (value: number): string => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
  };
  
  const handleSliderChange = (value: number[]) => {
    setOutcomes(value[0]);
  };

  return (
    <div className={className}>
      <div className="glass-card rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-8 text-center">Calculate Your Monthly Cost</h3>
        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">Monthly Outcomes</span>
            <span className="text-xl font-semibold">{outcomes.toLocaleString()}</span>
          </div>
          
          <div className="mb-6">
            <Slider
              defaultValue={[outcomes]}
              min={MIN_OUTCOMES}
              max={MAX_OUTCOMES}
              step={100}
              onValueChange={handleSliderChange}
              className="my-6"
            />
            
            <div className="flex justify-between text-xs text-gray-400">
              <span>{MIN_OUTCOMES.toLocaleString()}</span>
              <span>{formatOutcomes(MAX_OUTCOMES)}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-dark-400/30 border-dark-300/30">
              <CardHeader className="pb-2">
                <h4 className="text-sm font-medium text-gray-300">Monthly Price</h4>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">${price.toLocaleString()}</span>
                  <span className="ml-2 text-sm text-gray-400">/month</span>
                </div>
                <p className="text-xs mt-2 text-gray-400">Volume discount applied for over 1,000 outcomes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-teal/10 border-teal/30">
              <CardHeader className="pb-2">
                <h4 className="text-sm font-medium text-gray-300">Estimated Savings</h4>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-teal">{savings}%</span>
                  <span className="ml-2 text-sm text-teal">${Math.round(outcomes * TRADITIONAL_COST_PER_OUTCOME - price).toLocaleString()}</span>
                </div>
                <p className="text-xs mt-2 text-gray-400">Compared to traditional processing</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Features included */}
        <div className="border-t border-dark-300/30 pt-6">
          <h4 className="font-medium mb-4">All plans include:</h4>
          <ul className="space-y-3">
            {[
              'Unlimited workflows',
              'All integrations',
              'AI-powered automations',
              'Real-time analytics',
              'Premium support',
              'Enterprise SLAs',
              'Custom templates',
            ].map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
