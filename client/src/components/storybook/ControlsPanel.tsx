interface ControlsPanelProps {
  controls: any;
  onUpdateControl: (key: string, value: any) => void;
  component: string;
}

export function ControlsPanel({ controls, onUpdateControl, component }: ControlsPanelProps) {
  const copyCode = () => {
    const code = generateComponentCode();
    navigator.clipboard.writeText(code).then(() => {
      // Show success feedback - you could add a toast here
      console.log('Code copied to clipboard');
    });
  };

  const generateComponentCode = () => {
    const props = Object.entries(controls)
      .filter(([_, value]) => value !== false && value !== "")
      .map(([key, value]) => {
        if (typeof value === "boolean") {
          return value ? key : "";
        }
        return `${key}="${value}"`;
      })
      .filter(Boolean)
      .join(" ");

    return `<${component} ${props}>
  ${controls.children || `${component} Content`}
</${component}>`;
  };

  const getControlsForComponent = () => {
    switch (component) {
      case "Button":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="contained">contained</option>
                <option value="outlined">outlined</option>
                <option value="text">text</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="success">success</option>
                <option value="error">error</option>
                <option value="warning">warning</option>
                <option value="info">info</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">size</label>
              <div className="flex space-x-2">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => onUpdateControl("size", size)}
                    className={`flex-1 px-3 py-2 text-xs border rounded hover:bg-muted ${
                      controls.size === size
                        ? "border-primary bg-blue-50 text-primary"
                        : "border-border"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">children</label>
              <input
                type="text"
                value={controls.children}
                onChange={(e) => onUpdateControl("children", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div className="space-y-3">
              {["disabled", "fullWidth", "disableElevation"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop]}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "TextField":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "outlined"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="outlined">outlined</option>
                <option value="filled">filled</option>
                <option value="standard">standard</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">size</label>
              <select
                value={controls.size || "medium"}
                onChange={(e) => onUpdateControl("size", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="small">small</option>
                <option value="medium">medium</option>
              </select>
            </div>

            <div className="space-y-3">
              {["disabled", "fullWidth"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop]}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      default:
        return (
          <div className="text-center text-muted-foreground">
            <span className="material-icons text-2xl mb-2">tune</span>
            <p className="text-sm">Controls for {component} coming soon</p>
          </div>
        );
    }
  };

  return (
    <div className="w-80 bg-surface border-l border-border flex flex-col">
      {/* Controls Header */}
      <div className="h-12 border-b border-border flex items-center px-4">
        <h3 className="text-sm font-medium text-foreground">Controls</h3>
        <button
          onClick={() => onUpdateControl("reset", true)}
          className="ml-auto p-1 hover:bg-muted rounded"
          title="Reset Controls"
        >
          <span className="material-icons text-sm text-muted-foreground">refresh</span>
        </button>
      </div>

      {/* Controls Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {getControlsForComponent()}

        {/* Actions Section */}
        <div className="pt-4 border-t border-border">
          <h4 className="text-xs font-medium text-muted-foreground mb-3">Actions</h4>
          <div className="space-y-2">
            <button
              onClick={copyCode}
              className="w-full px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded flex items-center justify-center"
            >
              <span className="material-icons text-xs mr-1">content_copy</span>
              Copy Code
            </button>
            <button
              className="w-full px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded flex items-center justify-center"
            >
              <span className="material-icons text-xs mr-1">download</span>
              Export Component
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
