import { CircularProgress } from "@/components/dashboard/CircularProgress";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Wallet, Leaf, TrendingUp, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Your Product
            <span className="block gradient-text">Regeneration Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered lifecycle tracking for smarter resale, buyback, and eco-trade
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Center: Circular Progress */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="animate-scale-in">
              <CircularProgress 
                value={87} 
                label="AI Health"
                subLabel="Lifecycle Score"
              />
            </div>
          </div>

          {/* Right: Metric Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <MetricCard
                icon={Wallet}
                label="Total Value"
                value="₹89,450"
                subValue="Resale potential"
                trend="up"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <MetricCard
                icon={Leaf}
                label="Carbon Impact"
                value="142 kg"
                subValue="CO₂ saved"
                trend="up"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <MetricCard
                icon={TrendingUp}
                label="Market Trend"
                value="+18%"
                subValue="Value increase"
                trend="up"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <MetricCard
                icon={Package}
                label="Active Items"
                value="12"
                subValue="In your vault"
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Button 
              className="h-auto py-6 bg-gradient-jade hover:shadow-glow-jade transition-all duration-300"
              asChild
            >
              <a href="/scan">
                <div className="text-left">
                  <p className="font-bold text-lg mb-1">Scan Product</p>
                  <p className="text-sm opacity-90">AI condition analysis</p>
                </div>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-6 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="/products">
                <div className="text-left">
                  <p className="font-bold text-lg mb-1">View Vault</p>
                  <p className="text-sm opacity-70">Browse your items</p>
                </div>
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-6 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              asChild
            >
              <a href="/rewards">
                <div className="text-left">
                  <p className="font-bold text-lg mb-1">Claim Rewards</p>
                  <p className="text-sm opacity-70">Unlock achievements</p>
                </div>
              </a>
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "Product scanned", item: "iPhone 13 Pro", time: "2 hours ago", status: "success" },
              { action: "Resale listed", item: "Samsung Galaxy Buds", time: "1 day ago", status: "success" },
              { action: "Buyback completed", item: "MacBook Air M1", time: "3 days ago", status: "success" },
            ].map((activity, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-xl p-6 flex items-center justify-between hover:shadow-glow-soft transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-glow-jade animate-glow-pulse" />
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.item}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
