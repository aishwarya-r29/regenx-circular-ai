export const HeroLogo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-12 md:py-16">
      <div className="relative w-40 h-40 md:w-48 md:h-48">
        {/* Continuously rotating outer square */}
        <div className="absolute inset-0 border-4 border-primary/40 rounded-3xl animate-spin-slow" 
             style={{ animationDuration: '8s' }} />
        
        {/* Breathing glow background - large box */}
        <div className="absolute inset-0 bg-gradient-jade rounded-3xl opacity-30 blur-3xl animate-breathe" />
        
        {/* Inner diamond/square with X */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32 md:w-36 md:h-36 bg-background/90 backdrop-blur-sm rounded-2xl border border-primary/20 flex items-center justify-center shadow-glow-jade">
            <span className="text-6xl md:text-7xl font-bold gradient-text">X</span>
          </div>
        </div>
      </div>
      
      {/* Brand text */}
      <div className="mt-8 text-center space-y-3">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
          <span className="text-foreground">Regen</span>
          <span className="gradient-text">X</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide flex items-center justify-center gap-2">
          <span className="text-primary">✦</span>
          AI-Powered Circular Economy Platform
        </p>
      </div>
      
      {/* Brand story */}
      <div className="mt-8 max-w-4xl mx-auto text-center space-y-4 px-6">
        <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
          Every product has a story — from creation to use, and sometimes, to waste.
        </p>
        <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
          RegenX rewrites that story with AI intelligence that learns, predicts, and regenerates value.
        </p>
      </div>
    </div>
  );
};
