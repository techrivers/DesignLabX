import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/mui/ThemeProvider";
import { DynamicThemeProvider } from "@/components/theme/DynamicThemeProvider";
import NotFound from "@/pages/not-found";
import StorybookPage from "@/pages/storybook";
import ShowcasePage from "@/pages/showcase";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ShowcasePage} />
      <Route path="/storybook" component={StorybookPage} />
      <Route path="/showcase" component={ShowcasePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DynamicThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </DynamicThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
