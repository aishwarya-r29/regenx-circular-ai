import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  image: string;
  condition: string;
  resaleValue: string;
  carbonSaved: string;
  conditionScore: number;
}

export const ProductCard = ({ 
  name, 
  image, 
  condition, 
  resaleValue, 
  carbonSaved,
  conditionScore 
}: ProductCardProps) => {
  const getConditionColor = (score: number) => {
    if (score >= 80) return "bg-accent text-accent-foreground";
    if (score >= 60) return "bg-primary text-primary-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:shadow-glow-soft transition-all duration-300 group cursor-pointer">
      {/* Image with reflection effect */}
      <div className="relative h-48 bg-gradient-depth overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* Condition badge */}
        <div className="absolute top-4 right-4">
          <Badge className={getConditionColor(conditionScore)}>
            {condition}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{name}</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Resale Value</span>
            <span className="text-lg font-bold gradient-text">{resaleValue}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Carbon Saved</span>
            <span className="text-sm font-medium text-accent">{carbonSaved}</span>
          </div>
          
          {/* Condition bar */}
          <div className="pt-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Condition</span>
              <span className="text-xs font-medium">{conditionScore}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-jade transition-all duration-500"
                style={{ width: `${conditionScore}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
