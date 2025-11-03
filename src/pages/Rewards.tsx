import { Trophy, Star, Award, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const Rewards = () => {
  const badges = [
    { name: "Platinum Pioneer", tier: "platinum", points: 5000, unlocked: true },
    { name: "Gold Guardian", tier: "gold", points: 2500, unlocked: true },
    { name: "Silver Saver", tier: "silver", points: 1000, unlocked: true },
    { name: "Diamond Elite", tier: "diamond", points: 10000, unlocked: false }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with confetti effect */}
        <div className="text-center mb-12 animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-jade opacity-10 blur-3xl animate-glow-pulse" />
          <h1 className="text-5xl font-bold mb-4 relative">
            Your <span className="gradient-text">Rewards</span>
          </h1>
          <p className="text-xl text-muted-foreground relative">
            Unlock exclusive benefits and achievements
          </p>
        </div>

        {/* Points Overview */}
        <div className="glass-card rounded-3xl p-8 mb-12 text-center animate-scale-in">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Your Points</p>
            <p className="text-7xl font-bold gradient-text">4,750</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border">
            <div>
              <p className="text-2xl font-bold mb-1">12</p>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-1 gradient-text">Gold</p>
              <p className="text-sm text-muted-foreground">Current Tier</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-1">250</p>
              <p className="text-sm text-muted-foreground">Points to Next Tier</p>
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 animate-fade-in">Elite Badges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, idx) => (
              <div 
                key={idx}
                className={`glass-card rounded-2xl p-8 text-center hover:shadow-glow-soft transition-all duration-300 animate-scale-in ${
                  !badge.unlocked && 'opacity-50 grayscale'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Badge Icon */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${
                    badge.tier === 'platinum' ? 'bg-gradient-to-br from-slate-300 to-slate-500' :
                    badge.tier === 'gold' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                    badge.tier === 'silver' ? 'bg-gradient-to-br from-slate-200 to-slate-400' :
                    'bg-gradient-to-br from-cyan-400 to-blue-600'
                  } shadow-elevation`}>
                    <Trophy className="w-12 h-12 text-background" />
                  </div>
                  
                  {badge.unlocked && (
                    <>
                      <div className="absolute inset-0 bg-gradient-jade opacity-20 blur-2xl animate-glow-pulse" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-glow-emerald">
                        <Star className="w-4 h-4 text-background fill-background" />
                      </div>
                    </>
                  )}
                </div>

                <h3 className="font-bold mb-2">{badge.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{badge.points} points</p>
                
                {badge.unlocked && (
                  <p className="text-xs text-accent font-medium uppercase tracking-wider">Unlocked ✓</p>
                )}
                {!badge.unlocked && (
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Locked</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Available Rewards */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold mb-6">Available Rewards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "₹500 Store Credit", cost: 500, icon: Gift },
              { name: "Premium Support", cost: 1000, icon: Award },
              { name: "Early Access Pass", cost: 2000, icon: Star }
            ].map((reward, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-jade rounded-xl flex items-center justify-center mb-4 shadow-glow-jade">
                  <reward.icon className="w-6 h-6 text-background" />
                </div>
                
                <h3 className="font-bold mb-2">{reward.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{reward.cost} points</p>
                
                <Button 
                  className="w-full bg-gradient-jade hover:shadow-glow-jade transition-all duration-300"
                  disabled={reward.cost > 4750}
                >
                  {reward.cost > 4750 ? 'Not Enough Points' : 'Claim Reward'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Points History */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold mb-6">Recent Points Activity</h2>
          <div className="space-y-4">
            {[
              { action: "Product listed for resale", points: "+150", time: "2 hours ago" },
              { action: "Eco milestone achieved", points: "+300", time: "1 day ago" },
              { action: "Successful buyback", points: "+200", time: "3 days ago" },
              { action: "Reward claimed", points: "-500", time: "1 week ago" }
            ].map((activity, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-xl p-6 flex items-center justify-between hover:shadow-glow-soft transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full shadow-glow-jade ${
                    activity.points.startsWith('+') ? 'bg-accent animate-glow-pulse' : 'bg-muted'
                  }`} />
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <span className={`font-bold text-lg ${
                  activity.points.startsWith('+') ? 'text-accent' : 'text-muted-foreground'
                }`}>
                  {activity.points}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
