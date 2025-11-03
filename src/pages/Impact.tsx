import { CircularProgress } from "@/components/dashboard/CircularProgress";
import { Leaf, Droplet, Wind, Zap } from "lucide-react";

const Impact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">
            Your Eco <span className="gradient-text">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-time environmental contribution through circular economy
          </p>
        </div>

        {/* Main Metrics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Carbon Saved */}
          <div className="glass-card rounded-3xl p-8 flex flex-col items-center animate-scale-in">
            <CircularProgress 
              value={78}
              size={180}
              label="Carbon"
              subLabel="Reduction Goal"
            />
            <div className="mt-6 text-center">
              <p className="text-4xl font-bold gradient-text mb-2">142 kg</p>
              <p className="text-muted-foreground">CO₂ Saved This Year</p>
            </div>
          </div>

          {/* Other Impact Metrics */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-jade rounded-xl flex items-center justify-center mb-4 shadow-glow-jade">
                <Droplet className="w-6 h-6 text-background" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Water Saved</p>
              <p className="text-4xl font-bold mb-1">3,240 L</p>
              <p className="text-sm text-accent">↑ 23% this month</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-emerald rounded-xl flex items-center justify-center mb-4 shadow-glow-emerald">
                <Wind className="w-6 h-6 text-background" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Waste Avoided</p>
              <p className="text-4xl font-bold mb-1">18.5 kg</p>
              <p className="text-sm text-accent">↑ 15% this month</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-gradient-jade rounded-xl flex items-center justify-center mb-4 shadow-glow-jade">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Energy Saved</p>
              <p className="text-4xl font-bold mb-1">456 kWh</p>
              <p className="text-sm text-accent">↑ 18% this month</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:shadow-glow-soft transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-gradient-emerald rounded-xl flex items-center justify-center mb-4 shadow-glow-emerald">
                <Leaf className="w-6 h-6 text-background" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">Trees Equivalent</p>
              <p className="text-4xl font-bold mb-1">6.2</p>
              <p className="text-sm text-muted-foreground">Trees planted impact</p>
            </div>
          </div>
        </div>

        {/* Global Impact Comparison */}
        <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold mb-6">Compare Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative mb-4">
                <div className="h-40 bg-secondary rounded-xl flex items-end justify-center p-4 overflow-hidden">
                  <div className="w-full h-[65%] bg-gradient-jade rounded-t-lg flex items-end justify-center pb-2 shadow-glow-jade animate-scale-in">
                    <span className="text-background font-bold">You</span>
                  </div>
                </div>
              </div>
              <p className="font-bold">Your Impact</p>
              <p className="text-sm text-muted-foreground">142 kg CO₂</p>
            </div>

            <div className="text-center">
              <div className="relative mb-4">
                <div className="h-40 bg-secondary rounded-xl flex items-end justify-center p-4">
                  <div className="w-full h-[45%] bg-muted rounded-t-lg flex items-end justify-center pb-2">
                    <span className="text-muted-foreground font-bold">Avg User</span>
                  </div>
                </div>
              </div>
              <p className="font-bold">Average User</p>
              <p className="text-sm text-muted-foreground">98 kg CO₂</p>
            </div>

            <div className="text-center">
              <div className="relative mb-4">
                <div className="h-40 bg-secondary rounded-xl flex items-end justify-center p-4">
                  <div className="w-full h-[85%] bg-accent/80 rounded-t-lg flex items-end justify-center pb-2 shadow-glow-emerald">
                    <span className="text-background font-bold">Top 10%</span>
                  </div>
                </div>
              </div>
              <p className="font-bold">Top Performers</p>
              <p className="text-sm text-muted-foreground">215 kg CO₂</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold mb-6">Impact Milestones</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "First Resale", desc: "Listed your first item for resale", completed: true },
              { title: "Carbon Saver", desc: "Saved 100kg of CO₂ emissions", completed: true },
              { title: "Eco Warrior", desc: "10 successful circular trades", completed: true },
              { title: "Planet Guardian", desc: "Save 250kg of CO₂", completed: false }
            ].map((milestone, idx) => (
              <div 
                key={idx}
                className={`glass-card rounded-xl p-6 flex items-center gap-4 ${
                  milestone.completed 
                    ? 'hover:shadow-glow-soft' 
                    : 'opacity-50'
                } transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  milestone.completed 
                    ? 'bg-gradient-jade shadow-glow-jade' 
                    : 'bg-secondary'
                }`}>
                  <Leaf className={`w-6 h-6 ${milestone.completed ? 'text-background' : 'text-muted-foreground'}`} />
                </div>
                <div className="flex-1">
                  <p className="font-bold">{milestone.title}</p>
                  <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                </div>
                {milestone.completed && (
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-background text-xs">✓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
