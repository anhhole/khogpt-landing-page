import React from 'react';
import { cn } from '../lib/utils';

export const Logo: React.FC<{ className?: string; monochrome?: boolean }> = ({ className, monochrome = false }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("w-8 h-8", className)}
    >
      {/* The Warehouse Box Base */}
      <path 
        d="M21 8L12 3L3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8Z" 
        className={cn(
          "stroke-2 stroke-current",
          monochrome ? "text-current" : "text-orange-500"
        )}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* The Box Lid/Top Surface */}
      <path 
        d="M3 8L12 13L21 8" 
        className={cn(
          "stroke-2 stroke-current",
          monochrome ? "text-current" : "text-orange-500"
        )}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />

      {/* Sound Waves Rising from Box */}
      <path 
        d="M12 18V10" 
        className={cn(
          "stroke-2 stroke-current",
          monochrome ? "text-current" : "text-white"
        )}
        strokeLinecap="round" 
      />
      <path 
        d="M8 16V12" 
        className={cn(
          "stroke-2 stroke-current",
          monochrome ? "text-current" : "text-white/70"
        )}
        strokeLinecap="round" 
      />
      <path 
        d="M16 16V12" 
        className={cn(
          "stroke-2 stroke-current",
          monochrome ? "text-current" : "text-white/70"
        )}
        strokeLinecap="round" 
      />
    </svg>
  );
};