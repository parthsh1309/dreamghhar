import { Switch, Route, Router as WouterRouter,useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Properties from "@/pages/Properties";
import PropertyDetail from "@/pages/PropertyDetail";
import Agent from "@/pages/Agent";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// 👇 Custom location hook to read path from query (e.g., /dreamghhar/?/search)
const locationHook: () => [string, (to: string) => void] = () => {
  const query = new URLSearchParams(window.location.search);
  const path = query.keys().next().value || "/";

  const navigate = (to: string) => {
    window.history.pushState(null, "", `/dreamghhar/?${to}`);
    // Dispatch event so Wouter picks up route change
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return [path, navigate];
};


function Router() {
  return (
    <WouterRouter hook={locationHook}>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/properties" component={Properties} />
          <Route path="/property/:id" component={PropertyDetail} />
          <Route path="/agent" component={Agent} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
