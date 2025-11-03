import { useEffect, useState } from "react";

export const AnimatedLogo = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-fade-in">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 w-32 h-32 border-4 border-primary/30 rounded-full animate-spin-slow" />
        
        {/* Glowing background */}
        <div className="absolute inset-0 w-32 h-32 bg-gradient-jade rounded-full opacity-20 blur-3xl animate-glow-pulse" />
        
        {/* Diamond X shape */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="relative animate-float">
            {/* X made of two rotated rectangles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-20 bg-gradient-jade rounded-full transform rotate-45 shadow-glow-jade" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-20 bg-gradient-jade rounded-full transform -rotate-45 shadow-glow-jade" />
            </div>
            
            {/* Center glow dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full shadow-glow-jade animate-glow-pulse" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <p className="text-3xl font-bold gradient-text tracking-wider">RegenX</p>
        </div>
      </div>
    </div>
  );
};
