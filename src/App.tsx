
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkflowBuilder from "./pages/WorkflowBuilder";
import TemplateMarketplace from "./pages/TemplateMarketplace";
import OutcomeDashboard from "./pages/OutcomeDashboard";
import PricingCalculator from "./pages/PricingCalculator";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/workflow-builder" element={<WorkflowBuilder />} />
              <Route path="/templates" element={<TemplateMarketplace />} />
              <Route path="/dashboard" element={<OutcomeDashboard />} />
              <Route path="/pricing" element={<PricingCalculator />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
