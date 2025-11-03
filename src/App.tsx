import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { AnimatedLogo } from "./components/layout/AnimatedLogo";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Scan from "./pages/Scan";
import Impact from "./pages/Impact";
import Rewards from "./pages/Rewards";
import Warranty from "./pages/Warranty";
import Buyback from "./pages/Buyback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {showLogo && <AnimatedLogo />}
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/buyback" element={<Buyback />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
