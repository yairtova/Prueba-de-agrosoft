
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center w-full gap-1.5">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const index = i + 1;
        const isActive = index <= currentStep;
        
        return (
          <React.Fragment key={index}>
            <div className={`h-[5px] rounded-full transition-all duration-500 ${isActive ? 'bg-[#8BB29E] flex-grow' : 'bg-[#E5E7EB] w-[6px]'}`} />
            <div className={`w-[7px] h-[7px] rounded-full transition-colors ${isActive ? 'bg-[#8BB29E]' : 'bg-[#E5E7EB]'}`} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
