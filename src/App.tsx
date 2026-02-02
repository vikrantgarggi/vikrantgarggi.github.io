import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PetBottles from "./pages/products/PetBottles";
import PetJars from "./pages/products/PetJars";
import PpBottleClosures from "./pages/products/PpBottleClosures";
import PpJarClosures from "./pages/products/PpJarClosures";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/pet-bottles" element={<PetBottles />} />
          <Route path="/products/pet-jars" element={<PetJars />} />
          <Route path="/products/pp-bottle-closures" element={<PpBottleClosures />} />
          <Route path="/products/pp-jar-closures" element={<PpJarClosures />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
