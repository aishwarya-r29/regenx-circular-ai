interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  subLabel?: string;
}

export const CircularProgress = ({ 
  value, 
  size = 200, 
  strokeWidth = 12,
  label = "AI Health",
  subLabel = "Overall Score"
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Outer glow */}
      <div 
        className="absolute rounded-full bg-gradient-jade opacity-20 blur-2xl animate-glow-pulse"
        style={{ width: size + 40, height: size + 40 }}
      />
      
      {/* SVG Circle */}
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(0 0% 20%)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
          style={{ filter: 'drop-shadow(0 0 8px hsl(162 100% 50% / 0.6))' }}
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(162 100% 50%)" />
            <stop offset="100%" stopColor="hsl(187 100% 42%)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-5xl font-bold gradient-text">{value}%</p>
        <p className="text-sm font-medium text-foreground mt-1">{label}</p>
        <p className="text-xs text-muted-foreground">{subLabel}</p>
      </div>
    </div>
  );
};
