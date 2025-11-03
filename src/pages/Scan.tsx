import { useState } from "react";
import { Camera, Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Scan = () => {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">
            AI <span className="gradient-text">Condition Scanner</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Instant product analysis using advanced computer vision
          </p>
        </div>

        {/* Scanner Card */}
        <div className="glass-card rounded-3xl p-12 text-center animate-scale-in">
          {/* Camera Frame */}
          <div className="relative max-w-md mx-auto mb-8">
            <div className="aspect-square rounded-3xl bg-gradient-depth overflow-hidden border-2 border-primary/30 relative">
              {isScanning && (
                <>
                  {/* Scanning animation overlay */}
                  <div className="absolute inset-0 bg-gradient-jade opacity-10 animate-pulse" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-jade animate-slide-in-right shadow-glow-jade" />
                </>
              )}
              
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-20 h-20 text-primary/50" />
              </div>

              {/* Corner indicators (Face ID style) */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-xl" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-xl" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-xl" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-xl" />
            </div>

            {/* Outer glow */}
            {isScanning && (
              <div className="absolute inset-0 bg-gradient-jade opacity-20 blur-3xl animate-glow-pulse -z-10" />
            )}
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Position your product in the frame</h3>
            <p className="text-muted-foreground">
              Our AI will analyze condition, authenticity, and market value
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-jade hover:shadow-glow-jade transition-all duration-300"
              onClick={() => setIsScanning(!isScanning)}
            >
              <Camera className="w-5 h-5 mr-2" />
              {isScanning ? "Stop Scanning" : "Start Camera"}
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Photo
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-jade rounded-xl mx-auto mb-3 flex items-center justify-center shadow-glow-jade">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <h4 className="font-bold mb-1">AI-Powered</h4>
              <p className="text-sm text-muted-foreground">Advanced ML models</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-emerald rounded-xl mx-auto mb-3 flex items-center justify-center shadow-glow-emerald">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <h4 className="font-bold mb-1">Instant Results</h4>
              <p className="text-sm text-muted-foreground">Under 3 seconds</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-jade rounded-xl mx-auto mb-3 flex items-center justify-center shadow-glow-jade">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <h4 className="font-bold mb-1">99% Accuracy</h4>
              <p className="text-sm text-muted-foreground">Industry-leading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
