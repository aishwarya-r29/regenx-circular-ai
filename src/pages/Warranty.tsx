import { Shield, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Warranty = () => {
  const warranties = [
    {
      product: "iPhone 13 Pro",
      status: "active",
      expiryDate: "2025-08-15",
      daysLeft: 284,
      coverage: "Complete Protection"
    },
    {
      product: "MacBook Air M1",
      status: "active",
      expiryDate: "2025-12-20",
      daysLeft: 411,
      coverage: "Hardware + AppleCare"
    },
    {
      product: "Samsung Galaxy Buds",
      status: "expiring",
      expiryDate: "2025-01-30",
      daysLeft: 88,
      coverage: "Standard Warranty"
    },
    {
      product: "iPad Pro 11",
      status: "expired",
      expiryDate: "2024-06-10",
      daysLeft: 0,
      coverage: "Manufacturer Warranty"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">
            Warranty <span className="gradient-text">Tracking</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Monitor and manage all your product warranties in one place
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-jade rounded-xl flex items-center justify-center mb-4 shadow-glow-jade">
              <Shield className="w-6 h-6 text-background" />
            </div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Active Warranties</p>
            <p className="text-4xl font-bold gradient-text">8</p>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-gradient-emerald rounded-xl flex items-center justify-center mb-4 shadow-glow-emerald">
              <Calendar className="w-6 h-6 text-background" />
            </div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Expiring Soon</p>
            <p className="text-4xl font-bold text-accent">2</p>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Expired</p>
            <p className="text-4xl font-bold">2</p>
          </div>
        </div>

        {/* Warranties List */}
        <div className="space-y-6">
          {warranties.map((warranty, idx) => {
            const getStatusColor = (status: string) => {
              if (status === 'active') return 'bg-accent';
              if (status === 'expiring') return 'bg-primary';
              return 'bg-muted';
            };

            const getStatusIcon = (status: string) => {
              if (status === 'active') return <CheckCircle className="w-5 h-5" />;
              if (status === 'expiring') return <AlertCircle className="w-5 h-5" />;
              return <AlertCircle className="w-5 h-5" />;
            };

            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${getStatusColor(warranty.status)} flex items-center justify-center ${
                        warranty.status !== 'expired' && 'shadow-glow-jade'
                      }`}>
                        {getStatusIcon(warranty.status)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{warranty.product}</h3>
                        <p className="text-sm text-muted-foreground">{warranty.coverage}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status and Date */}
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Expiry Date</p>
                      <p className="font-medium">{new Date(warranty.expiryDate).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <p className={`font-medium capitalize ${
                        warranty.status === 'active' ? 'text-accent' :
                        warranty.status === 'expiring' ? 'text-primary' :
                        'text-muted-foreground'
                      }`}>
                        {warranty.status === 'expired' ? 'Expired' : `${warranty.daysLeft} days left`}
                      </p>
                    </div>

                    <Button 
                      variant="outline"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Progress Bar for Active/Expiring */}
                {warranty.status !== 'expired' && (
                  <div className="mt-6">
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          warranty.status === 'active' ? 'bg-gradient-jade' : 'bg-gradient-emerald'
                        }`}
                        style={{ width: `${(warranty.daysLeft / 365) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Add New Warranty */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-2">Add New Warranty</h3>
          <p className="text-muted-foreground mb-6">
            Register a new product warranty to track its coverage
          </p>
          <Button className="bg-gradient-jade hover:shadow-glow-jade transition-all duration-300">
            Register Warranty
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
