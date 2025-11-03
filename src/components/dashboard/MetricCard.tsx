import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subValue?: string;
  trend?: "up" | "down";
}

export const MetricCard = ({ icon: Icon, label, value, subValue, trend }: MetricCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-jade rounded-xl flex items-center justify-center group-hover:shadow-glow-jade transition-all duration-300">
          <Icon className="w-6 h-6 text-background" />
        </div>
        {trend && (
          <span className={`text-xs font-medium ${trend === 'up' ? 'text-accent' : 'text-destructive'}`}>
            {trend === 'up' ? '↑' : '↓'}
          </span>
        )}
      </div>
      
      <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">{label}</p>
      <p className="text-3xl font-bold mb-1">{value}</p>
      {subValue && <p className="text-sm text-muted-foreground">{subValue}</p>}
    </div>
  );
};
