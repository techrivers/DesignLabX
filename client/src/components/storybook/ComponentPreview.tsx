import { Button as MuiButton, TextField, Card, CardContent, Typography } from "@mui/material";

interface ComponentPreviewProps {
  component: string;
  story: string;
  controls: any;
  viewport: string;
  zoom: number;
}

export function ComponentPreview({ component, story, controls, viewport, zoom }: ComponentPreviewProps) {
  const getViewportStyles = () => {
    switch (viewport) {
      case "mobile":
        return { maxWidth: "375px" };
      case "tablet":
        return { maxWidth: "768px" };
      default:
        return {};
    }
  };

  const renderComponent = () => {
    switch (component) {
      case "Button":
        return (
          <MuiButton
            variant={controls.variant}
            color={controls.color}
            size={controls.size}
            disabled={controls.disabled}
            fullWidth={controls.fullWidth}
            disableElevation={controls.disableElevation}
          >
            {controls.children}
          </MuiButton>
        );
      case "TextField":
        return (
          <TextField
            label="Text Field"
            variant={controls.variant || "outlined"}
            size={controls.size}
            disabled={controls.disabled}
            fullWidth={controls.fullWidth}
            error={story === "Error"}
            helperText={story === "Error" ? "This field has an error" : "Helper text"}
            multiline={story === "Multiline"}
            rows={story === "Multiline" ? 4 : 1}
          />
        );
      case "Card":
        return (
          <Card variant={story === "Outlined" ? "outlined" : "elevation"}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a sample card component with some content to demonstrate
                the Material-UI Card component.
              </Typography>
            </CardContent>
          </Card>
        );
      default:
        return (
          <div className="p-8 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
            <span className="material-icons text-4xl text-muted-foreground mb-2">widgets</span>
            <p className="text-muted-foreground">Component preview for {component} coming soon</p>
          </div>
        );
    }
  };

  const renderVariants = () => {
    if (component === "Button") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface rounded-lg border border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Size Variants</h3>
            <div className="space-y-3">
              <MuiButton variant="contained" size="small">Small</MuiButton>
              <MuiButton variant="contained" size="medium">Medium</MuiButton>
              <MuiButton variant="contained" size="large">Large</MuiButton>
            </div>
          </div>

          <div className="bg-surface rounded-lg border border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Color Variants</h3>
            <div className="space-y-3">
              <MuiButton variant="contained" color="primary">Primary</MuiButton>
              <MuiButton variant="contained" color="secondary">Secondary</MuiButton>
              <MuiButton variant="contained" color="success">Success</MuiButton>
            </div>
          </div>

          <div className="bg-surface rounded-lg border border-border p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">State Variants</h3>
            <div className="space-y-3">
              <MuiButton variant="contained">Default</MuiButton>
              <MuiButton variant="contained" disabled>Disabled</MuiButton>
              <MuiButton variant="contained" startIcon={
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              }>
                Loading
              </MuiButton>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex-1 bg-muted/30 p-8 overflow-auto" style={getViewportStyles()}>
      <div className="max-w-4xl mx-auto" style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top left" }}>
        {/* Main Component Showcase */}
        <div className="bg-surface rounded-lg shadow-sm border border-border p-12 mb-8">
          <div className="flex items-center justify-center min-h-32">
            {renderComponent()}
          </div>
        </div>

        {/* Component Variants */}
        {renderVariants()}

        {/* Usage Examples */}
        <div className="bg-surface rounded-lg border border-border p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Usage Examples</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Basic Implementation</h4>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm syntax-highlight">
                <div className="text-gray-300">
                  <span className="keyword">import</span> {`{ ${component} }`} <span className="keyword">from</span> <span className="string">'@mui/material'</span>;<br /><br />
                  <span className="keyword">function</span> <span className="attr">MyComponent</span>() {`{`}<br />
                  &nbsp;&nbsp;<span className="keyword">return</span> (<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;{component}</span> <span className="attr">variant</span>=<span className="string">"{controls.variant}"</span> <span className="attr">color</span>=<span className="string">"{controls.color}"</span><span className="tag">&gt;</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{controls.children || `${component} Content`}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/{component}&gt;</span><br />
                  &nbsp;&nbsp;);<br />
                  {`}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
