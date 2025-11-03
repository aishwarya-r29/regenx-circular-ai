import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <nav className="glass-card rounded-2xl px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-jade rounded-lg opacity-20 blur-lg animate-glow-pulse" />
              <div className="relative w-full h-full bg-gradient-jade rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-xl">X</span>
              </div>
            </div>
            <span className="text-2xl font-bold tracking-wider gradient-text">
              RegenX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/scan" className="text-sm font-medium hover:text-primary transition-colors">
              AI Scanner
            </Link>
            <Link to="/impact" className="text-sm font-medium hover:text-primary transition-colors">
              Eco Impact
            </Link>
            <Link to="/rewards" className="text-sm font-medium hover:text-primary transition-colors">
              Rewards
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-sm font-medium">
                  Services
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-border bg-popover">
                <DropdownMenuItem asChild>
                  <Link to="/warranty" className="cursor-pointer">
                    Warranty Tracking
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/buyback" className="cursor-pointer">
                    Buyback Tracking
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              size="sm" 
              className="bg-gradient-jade hover:shadow-glow-jade transition-all duration-300 flex-shrink-0"
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/products" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/scan" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Scanner
              </Link>
              <Link 
                to="/impact" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Eco Impact
              </Link>
              <Link 
                to="/rewards" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rewards
              </Link>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Services</p>
                <Link 
                  to="/warranty" 
                  className="block text-sm font-medium hover:text-primary transition-colors mb-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Warranty Tracking
                </Link>
                <Link 
                  to="/buyback" 
                  className="block text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buyback Tracking
                </Link>
              </div>
              <Button 
                className="w-full bg-gradient-jade hover:shadow-glow-jade transition-all duration-300"
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
