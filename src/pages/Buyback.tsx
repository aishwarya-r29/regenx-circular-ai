import { Package, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Buyback = () => {
  const buybacks = [
    {
      product: "MacBook Air M1",
      status: "completed",
      initiatedDate: "2024-10-15",
      completedDate: "2024-10-28",
      amount: "₹68,500",
      condition: "Very Good"
    },
    {
      product: "iPhone 12",
      status: "processing",
      initiatedDate: "2024-11-01",
      estimatedCompletion: "2024-11-15",
      amount: "₹38,200",
      condition: "Good"
    },
    {
      product: "iPad Pro 11",
      status: "pending",
      initiatedDate: "2024-11-05",
      estimatedCompletion: "2024-11-20",
      amount: "₹48,900",
      condition: "Excellent"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">
            Buyback <span className="gradient-text">Tracking</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Monitor your product buyback requests and earnings
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-jade rounded-xl flex items-center justify-center mb-4 shadow-glow-jade">
              <Package className="w-6 h-6 text-background" />
            </div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Total Buybacks</p>
            <p className="text-4xl font-bold">15</p>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-gradient-emerald rounded-xl flex items-center justify-center mb-4 shadow-glow-emerald">
              <TrendingUp className="w-6 h-6 text-background" />
            </div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Total Earned</p>
            <p className="text-4xl font-bold gradient-text">₹4.2L</p>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-gradient-jade rounded-xl flex items-center justify-center mb-4 shadow-glow-jade">
              <Clock className="w-6 h-6 text-background" />
            </div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">In Progress</p>
            <p className="text-4xl font-bold text-primary">2</p>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-12 h-12 bg-gradient-emerald rounded-xl flex items-center justify-center mb-4 shadow-glow-emerald">
              <CheckCircle className="w-6 h-6 text-background" />
            </div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Completed</p>
            <p className="text-4xl font-bold text-accent">13</p>
          </div>
        </div>

        {/* Buyback Requests */}
        <div className="space-y-6">
          {buybacks.map((buyback, idx) => {
            const getStatusColor = (status: string) => {
              if (status === 'completed') return 'bg-accent';
              if (status === 'processing') return 'bg-primary';
              return 'bg-muted';
            };

            const getStatusText = (status: string) => {
              if (status === 'completed') return 'Completed';
              if (status === 'processing') return 'Processing';
              return 'Pending Review';
            };

            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Product Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-xl ${getStatusColor(buyback.status)} flex items-center justify-center ${
                      buyback.status !== 'pending' && 'shadow-glow-jade'
                    }`}>
                      <Package className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{buyback.product}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>Condition: {buyback.condition}</span>
                        <span>•</span>
                        <span className={`font-medium ${
                          buyback.status === 'completed' ? 'text-accent' :
                          buyback.status === 'processing' ? 'text-primary' :
                          'text-muted-foreground'
                        }`}>
                          {getStatusText(buyback.status)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Amount</p>
                      <p className="text-xl font-bold gradient-text">{buyback.amount}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Initiated</p>
                      <p className="font-medium">
                        {new Date(buyback.initiatedDate).toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {buyback.status === 'completed' ? 'Completed' : 'Est. Completion'}
                      </p>
                      <p className="font-medium">
                        {new Date(
                          buyback.status === 'completed' 
                            ? buyback.completedDate! 
                            : buyback.estimatedCompletion!
                        ).toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 lg:ml-4"
                  >
                    Track Status
                  </Button>
                </div>

                {/* Progress Timeline for Non-Completed */}
                {buyback.status !== 'completed' && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">Progress</p>
                      <p className="text-sm font-medium">
                        {buyback.status === 'processing' ? 'Step 2 of 3' : 'Step 1 of 3'}
                      </p>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-jade transition-all duration-500"
                        style={{ width: buyback.status === 'processing' ? '66%' : '33%' }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Review</span>
                      <span>Evaluation</span>
                      <span>Payment</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Initiate New Buyback */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-2">Start New Buyback</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get instant AI-powered valuation and initiate buyback for your electronics
          </p>
          <Button className="bg-gradient-jade hover:shadow-glow-jade transition-all duration-300">
            Initiate Buyback
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Buyback;
