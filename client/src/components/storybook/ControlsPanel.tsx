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

      case "Checkbox":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="success">success</option>
                <option value="error">error</option>
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

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">label</label>
              <input
                type="text"
                value={controls.label || "Checkbox"}
                onChange={(e) => onUpdateControl("label", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div className="space-y-3">
              {["checked", "disabled"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Select":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "outlined"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="standard">standard</option>
                <option value="outlined">outlined</option>
                <option value="filled">filled</option>
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

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">value</label>
              <select
                value={controls.value || "option1"}
                onChange={(e) => onUpdateControl("value", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="option1">option1</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
              </select>
            </div>

            <div className="space-y-3">
              {["disabled", "error"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Switch":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="success">success</option>
                <option value="error">error</option>
                <option value="warning">warning</option>
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

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">label</label>
              <input
                type="text"
                value={controls.label || "Switch"}
                onChange={(e) => onUpdateControl("label", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div className="space-y-3">
              {["checked", "disabled"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Slider":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">value</label>
              <input
                type="number"
                value={controls.value || 30}
                onChange={(e) => onUpdateControl("value", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">min</label>
              <input
                type="number"
                value={controls.min || 0}
                onChange={(e) => onUpdateControl("min", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">max</label>
              <input
                type="number"
                value={controls.max || 100}
                onChange={(e) => onUpdateControl("max", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">step</label>
              <input
                type="number"
                value={controls.step || 1}
                onChange={(e) => onUpdateControl("step", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="success">success</option>
                <option value="error">error</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">disabled</label>
                <input
                  type="checkbox"
                  checked={controls.disabled || false}
                  onChange={(e) => onUpdateControl("disabled", e.target.checked)}
                  className="rounded border-border focus:ring-primary"
                />
              </div>
            </div>
          </>
        );

      case "Rating":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">value</label>
              <input
                type="number"
                min="0"
                max="10"
                step="0.5"
                value={controls.value || 4}
                onChange={(e) => onUpdateControl("value", parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">max</label>
              <input
                type="number"
                min="1"
                max="20"
                value={controls.max || 5}
                onChange={(e) => onUpdateControl("max", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">precision</label>
              <select
                value={controls.precision || 1}
                onChange={(e) => onUpdateControl("precision", parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="1">1</option>
                <option value="0.5">0.5</option>
                <option value="0.1">0.1</option>
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
                <option value="large">large</option>
              </select>
            </div>

            <div className="space-y-3">
              {["readOnly", "disabled"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Autocomplete":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">label</label>
              <input
                type="text"
                value={controls.label || "Autocomplete"}
                onChange={(e) => onUpdateControl("label", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
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
              {["multiple", "freeSolo", "disabled"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Card":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "elevation"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="elevation">elevation</option>
                <option value="outlined">outlined</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">elevation</label>
              <input
                type="number"
                min="0"
                max="24"
                value={controls.elevation || 1}
                onChange={(e) => onUpdateControl("elevation", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">title</label>
              <input
                type="text"
                value={controls.title || "Card Title"}
                onChange={(e) => onUpdateControl("title", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">content</label>
              <textarea
                value={controls.content || "This is a sample card component with content."}
                onChange={(e) => onUpdateControl("content", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
                rows={3}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">raised</label>
                <input
                  type="checkbox"
                  checked={controls.raised || false}
                  onChange={(e) => onUpdateControl("raised", e.target.checked)}
                  className="rounded border-border focus:ring-primary"
                />
              </div>
            </div>
          </>
        );

      case "Alert":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">severity</label>
              <select
                value={controls.severity || "info"}
                onChange={(e) => onUpdateControl("severity", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="error">error</option>
                <option value="warning">warning</option>
                <option value="info">info</option>
                <option value="success">success</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "standard"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="standard">standard</option>
                <option value="filled">filled</option>
                <option value="outlined">outlined</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">message</label>
              <input
                type="text"
                value={controls.message || "This is an alert message"}
                onChange={(e) => onUpdateControl("message", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div className="space-y-3">
              {["onClose", "icon"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Chip":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "filled"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="filled">filled</option>
                <option value="outlined">outlined</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "default"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="default">default</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="error">error</option>
                <option value="info">info</option>
                <option value="success">success</option>
                <option value="warning">warning</option>
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

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">label</label>
              <input
                type="text"
                value={controls.label || "Chip"}
                onChange={(e) => onUpdateControl("label", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div className="space-y-3">
              {["clickable", "deletable", "disabled"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Avatar":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "circular"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="circular">circular</option>
                <option value="rounded">rounded</option>
                <option value="square">square</option>
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
                <option value="large">large</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">children</label>
              <input
                type="text"
                value={controls.children || "A"}
                onChange={(e) => onUpdateControl("children", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
                maxLength={2}
              />
            </div>
          </>
        );

      case "Badge":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "default"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="default">default</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="error">error</option>
                <option value="info">info</option>
                <option value="success">success</option>
                <option value="warning">warning</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "standard"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="standard">standard</option>
                <option value="dot">dot</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">badgeContent</label>
              <input
                type="text"
                value={controls.badgeContent || "4"}
                onChange={(e) => onUpdateControl("badgeContent", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">max</label>
              <input
                type="number"
                value={controls.max || 99}
                onChange={(e) => onUpdateControl("max", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div className="space-y-3">
              {["invisible", "showZero"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Progress":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "determinate"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="determinate">determinate</option>
                <option value="indeterminate">indeterminate</option>
                <option value="buffer">buffer</option>
                <option value="query">query</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="inherit">inherit</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">value</label>
              <input
                type="number"
                min="0"
                max="100"
                value={controls.value || 50}
                onChange={(e) => onUpdateControl("value", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
          </>
        );

      case "Tabs":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">orientation</label>
              <select
                value={controls.orientation || "horizontal"}
                onChange={(e) => onUpdateControl("orientation", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="horizontal">horizontal</option>
                <option value="vertical">vertical</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "standard"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="standard">standard</option>
                <option value="scrollable">scrollable</option>
                <option value="fullWidth">fullWidth</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">value</label>
              <input
                type="number"
                min="0"
                max="2"
                value={controls.value || 0}
                onChange={(e) => onUpdateControl("value", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div className="space-y-3">
              {["centered", "scrollButtons"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Accordion":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "elevation"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="elevation">elevation</option>
                <option value="outlined">outlined</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">summary</label>
              <input
                type="text"
                value={controls.summary || "Accordion Summary"}
                onChange={(e) => onUpdateControl("summary", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">details</label>
              <textarea
                value={controls.details || "Accordion details content goes here."}
                onChange={(e) => onUpdateControl("details", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
                rows={3}
              />
            </div>

            <div className="space-y-3">
              {["expanded", "disabled"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Radio":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="success">success</option>
                <option value="error">error</option>
                <option value="warning">warning</option>
                <option value="info">info</option>
                <option value="default">default</option>
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

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">label</label>
              <input
                type="text"
                value={controls.label || "Radio"}
                onChange={(e) => onUpdateControl("label", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div className="space-y-3">
              {["checked", "disabled"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Typography":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "body1"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="h1">h1</option>
                <option value="h2">h2</option>
                <option value="h3">h3</option>
                <option value="h4">h4</option>
                <option value="h5">h5</option>
                <option value="h6">h6</option>
                <option value="subtitle1">subtitle1</option>
                <option value="subtitle2">subtitle2</option>
                <option value="body1">body1</option>
                <option value="body2">body2</option>
                <option value="caption">caption</option>
                <option value="button">button</option>
                <option value="overline">overline</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "inherit"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="inherit">inherit</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="textPrimary">textPrimary</option>
                <option value="textSecondary">textSecondary</option>
                <option value="error">error</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">align</label>
              <select
                value={controls.align || "inherit"}
                onChange={(e) => onUpdateControl("align", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="inherit">inherit</option>
                <option value="left">left</option>
                <option value="center">center</option>
                <option value="right">right</option>
                <option value="justify">justify</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">children</label>
              <textarea
                value={controls.children || "Typography text content"}
                onChange={(e) => onUpdateControl("children", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
                rows={3}
              />
            </div>

            <div className="space-y-3">
              {["gutterBottom", "noWrap"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "List":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "default"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="default">default</option>
                <option value="dense">dense</option>
              </select>
            </div>

            <div className="space-y-3">
              {["dense", "disablePadding"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Table":
        return (
          <>
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
              {["stickyHeader", "padding"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "AppBar":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">position</label>
              <select
                value={controls.position || "static"}
                onChange={(e) => onUpdateControl("position", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="static">static</option>
                <option value="fixed">fixed</option>
                <option value="absolute">absolute</option>
                <option value="sticky">sticky</option>
                <option value="relative">relative</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="inherit">inherit</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="default">default</option>
                <option value="transparent">transparent</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">title</label>
              <input
                type="text"
                value={controls.title || "App Bar Title"}
                onChange={(e) => onUpdateControl("title", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>

            <div className="space-y-3">
              {["enableColorOnDark", "elevation"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Drawer":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "temporary"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="permanent">permanent</option>
                <option value="persistent">persistent</option>
                <option value="temporary">temporary</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">anchor</label>
              <select
                value={controls.anchor || "left"}
                onChange={(e) => onUpdateControl("anchor", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="left">left</option>
                <option value="top">top</option>
                <option value="right">right</option>
                <option value="bottom">bottom</option>
              </select>
            </div>

            <div className="space-y-3">
              {["open", "elevation"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="rounded border-border focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "ToggleButton":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">label</label>
              <input
                type="text"
                value={controls.label || "Toggle"}
                onChange={(e) => onUpdateControl("label", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "standard"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="standard">standard</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
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
                <option value="large">large</option>
              </select>
            </div>
            <div className="space-y-3">
              {["selected", "disabled"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "ButtonGroup":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "outlined"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="text">text</option>
                <option value="outlined">outlined</option>
                <option value="contained">contained</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="inherit">inherit</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="success">success</option>
                <option value="error">error</option>
                <option value="info">info</option>
                <option value="warning">warning</option>
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
                <option value="large">large</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">orientation</label>
              <select
                value={controls.orientation || "horizontal"}
                onChange={(e) => onUpdateControl("orientation", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="horizontal">horizontal</option>
                <option value="vertical">vertical</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground">disabled</label>
              <input
                type="checkbox"
                checked={controls.disabled || false}
                onChange={(e) => onUpdateControl("disabled", e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
            </div>
          </>
        );

      case "Fab":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="default">default</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="inherit">inherit</option>
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
                <option value="large">large</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "circular"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="circular">circular</option>
                <option value="extended">extended</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground">disabled</label>
              <input
                type="checkbox"
                checked={controls.disabled || false}
                onChange={(e) => onUpdateControl("disabled", e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
            </div>
          </>
        );

      case "Tooltip":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">title</label>
              <input
                type="text"
                value={controls.title || "Tooltip text"}
                onChange={(e) => onUpdateControl("title", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">buttonText</label>
              <input
                type="text"
                value={controls.buttonText || "Hover me"}
                onChange={(e) => onUpdateControl("buttonText", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">placement</label>
              <select
                value={controls.placement || "top"}
                onChange={(e) => onUpdateControl("placement", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="bottom-end">bottom-end</option>
                <option value="bottom-start">bottom-start</option>
                <option value="bottom">bottom</option>
                <option value="left-end">left-end</option>
                <option value="left-start">left-start</option>
                <option value="left">left</option>
                <option value="right-end">right-end</option>
                <option value="right-start">right-start</option>
                <option value="right">right</option>
                <option value="top-end">top-end</option>
                <option value="top-start">top-start</option>
                <option value="top">top</option>
              </select>
            </div>
          </>
        );

      case "Menu":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">buttonText</label>
              <input
                type="text"
                value={controls.buttonText || "Open Menu"}
                onChange={(e) => onUpdateControl("buttonText", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
          </>
        );

      case "Pagination":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">count</label>
              <input
                type="range"
                min="1"
                max="50"
                value={controls.count || 10}
                onChange={(e) => onUpdateControl("count", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.count || 10}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">page</label>
              <input
                type="range"
                min="1"
                max={controls.count || 10}
                value={controls.page || 1}
                onChange={(e) => onUpdateControl("page", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.page || 1}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="standard">standard</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "text"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="text">text</option>
                <option value="outlined">outlined</option>
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
                <option value="large">large</option>
              </select>
            </div>
            <div className="space-y-3">
              {["disabled", "showFirstButton", "showLastButton"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "SpeedDial":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">direction</label>
              <select
                value={controls.direction || "up"}
                onChange={(e) => onUpdateControl("direction", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="up">up</option>
                <option value="down">down</option>
                <option value="left">left</option>
                <option value="right">right</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground">open</label>
              <input
                type="checkbox"
                checked={controls.open || false}
                onChange={(e) => onUpdateControl("open", e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
            </div>
          </>
        );

      case "Breadcrumbs":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">separator</label>
              <input
                type="text"
                value={controls.separator || "/"}
                onChange={(e) => onUpdateControl("separator", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">maxItems</label>
              <input
                type="range"
                min="1"
                max="20"
                value={controls.maxItems || 8}
                onChange={(e) => onUpdateControl("maxItems", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.maxItems || 8}</div>
            </div>
          </>
        );

      case "Stepper":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">activeStep</label>
              <input
                type="range"
                min="0"
                max="2"
                value={controls.activeStep || 1}
                onChange={(e) => onUpdateControl("activeStep", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.activeStep || 1}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">orientation</label>
              <select
                value={controls.orientation || "horizontal"}
                onChange={(e) => onUpdateControl("orientation", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="horizontal">horizontal</option>
                <option value="vertical">vertical</option>
              </select>
            </div>
          </>
        );

      case "BottomNavigation":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">value</label>
              <input
                type="range"
                min="0"
                max="2"
                value={controls.value || 0}
                onChange={(e) => onUpdateControl("value", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.value || 0}</div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground">showLabels</label>
              <input
                type="checkbox"
                checked={controls.showLabels !== false}
                onChange={(e) => onUpdateControl("showLabels", e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
            </div>
          </>
        );

      case "Alert":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">message</label>
              <input
                type="text"
                value={controls.message || "This is an alert message"}
                onChange={(e) => onUpdateControl("message", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">severity</label>
              <select
                value={controls.severity || "info"}
                onChange={(e) => onUpdateControl("severity", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="error">error</option>
                <option value="warning">warning</option>
                <option value="info">info</option>
                <option value="success">success</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "standard"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="standard">standard</option>
                <option value="filled">filled</option>
                <option value="outlined">outlined</option>
              </select>
            </div>
            <div className="space-y-3">
              {["icon", "onClose"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] !== false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Dialog":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">title</label>
              <input
                type="text"
                value={controls.title || "Dialog Title"}
                onChange={(e) => onUpdateControl("title", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">content</label>
              <textarea
                value={controls.content || "This is the dialog content. You can put any text here."}
                onChange={(e) => onUpdateControl("content", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">maxWidth</label>
              <select
                value={controls.maxWidth || "sm"}
                onChange={(e) => onUpdateControl("maxWidth", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="xs">xs</option>
                <option value="sm">sm</option>
                <option value="md">md</option>
                <option value="lg">lg</option>
                <option value="xl">xl</option>
              </select>
            </div>
            <div className="space-y-3">
              {["open", "fullWidth", "fullScreen"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Snackbar":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">message</label>
              <input
                type="text"
                value={controls.message || "This is a snackbar message"}
                onChange={(e) => onUpdateControl("message", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">autoHideDuration</label>
              <input
                type="range"
                min="1000"
                max="10000"
                step="1000"
                value={controls.autoHideDuration || 6000}
                onChange={(e) => onUpdateControl("autoHideDuration", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.autoHideDuration || 6000}ms</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">anchorOrigin</label>
              <select
                value={controls.anchorOrigin || "bottom-left"}
                onChange={(e) => onUpdateControl("anchorOrigin", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="top-left">top-left</option>
                <option value="top-center">top-center</option>
                <option value="top-right">top-right</option>
                <option value="bottom-left">bottom-left</option>
                <option value="bottom-center">bottom-center</option>
                <option value="bottom-right">bottom-right</option>
              </select>
            </div>
            <div className="space-y-3">
              {["open", "action"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "CircularProgress":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "indeterminate"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="determinate">determinate</option>
                <option value="indeterminate">indeterminate</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">value</label>
              <input
                type="range"
                min="0"
                max="100"
                value={controls.value || 25}
                onChange={(e) => onUpdateControl("value", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.value || 25}%</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">size</label>
              <input
                type="range"
                min="20"
                max="120"
                value={controls.size || 40}
                onChange={(e) => onUpdateControl("size", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.size || 40}px</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="error">error</option>
                <option value="info">info</option>
                <option value="success">success</option>
                <option value="warning">warning</option>
                <option value="inherit">inherit</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">thickness</label>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={controls.thickness || 3.6}
                onChange={(e) => onUpdateControl("thickness", parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.thickness || 3.6}</div>
            </div>
          </>
        );

      case "LinearProgress":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "indeterminate"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="determinate">determinate</option>
                <option value="indeterminate">indeterminate</option>
                <option value="buffer">buffer</option>
                <option value="query">query</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">value</label>
              <input
                type="range"
                min="0"
                max="100"
                value={controls.value || 50}
                onChange={(e) => onUpdateControl("value", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.value || 50}%</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">valueBuffer</label>
              <input
                type="range"
                min="0"
                max="100"
                value={controls.valueBuffer || 75}
                onChange={(e) => onUpdateControl("valueBuffer", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.valueBuffer || 75}%</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">color</label>
              <select
                value={controls.color || "primary"}
                onChange={(e) => onUpdateControl("color", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="error">error</option>
                <option value="info">info</option>
                <option value="success">success</option>
                <option value="warning">warning</option>
                <option value="inherit">inherit</option>
              </select>
            </div>
          </>
        );

      case "Skeleton":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "text"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="text">text</option>
                <option value="rectangular">rectangular</option>
                <option value="rounded">rounded</option>
                <option value="circular">circular</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">width</label>
              <input
                type="range"
                min="50"
                max="500"
                value={controls.width || 210}
                onChange={(e) => onUpdateControl("width", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.width || 210}px</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">height</label>
              <input
                type="range"
                min="20"
                max="200"
                value={controls.height || 60}
                onChange={(e) => onUpdateControl("height", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.height || 60}px</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">animation</label>
              <select
                value={controls.animation || "pulse"}
                onChange={(e) => onUpdateControl("animation", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="pulse">pulse</option>
                <option value="wave">wave</option>
                <option value="false">none</option>
              </select>
            </div>
          </>
        );

      case "Backdrop":
        return (
          <>
            <div className="space-y-3">
              {["open", "invisible"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Grid":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">spacing</label>
              <input
                type="range"
                min="0"
                max="8"
                value={controls.spacing || 2}
                onChange={(e) => onUpdateControl("spacing", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.spacing || 2}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">direction</label>
              <select
                value={controls.direction || "row"}
                onChange={(e) => onUpdateControl("direction", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="row">row</option>
                <option value="column">column</option>
                <option value="row-reverse">row-reverse</option>
                <option value="column-reverse">column-reverse</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">justifyContent</label>
              <select
                value={controls.justifyContent || "flex-start"}
                onChange={(e) => onUpdateControl("justifyContent", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">alignItems</label>
              <select
                value={controls.alignItems || "stretch"}
                onChange={(e) => onUpdateControl("alignItems", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="stretch">stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
                <option value="baseline">baseline</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">Item xs</label>
              <input
                type="range"
                min="1"
                max="12"
                value={controls.itemXs || 12}
                onChange={(e) => onUpdateControl("itemXs", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.itemXs || 12}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">Item sm</label>
              <input
                type="range"
                min="1"
                max="12"
                value={controls.itemSm || 6}
                onChange={(e) => onUpdateControl("itemSm", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.itemSm || 6}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">Item md</label>
              <input
                type="range"
                min="1"
                max="12"
                value={controls.itemMd || 4}
                onChange={(e) => onUpdateControl("itemMd", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.itemMd || 4}</div>
            </div>
          </>
        );

      case "Container":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">maxWidth</label>
              <select
                value={controls.maxWidth || "md"}
                onChange={(e) => onUpdateControl("maxWidth", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="xs">xs</option>
                <option value="sm">sm</option>
                <option value="md">md</option>
                <option value="lg">lg</option>
                <option value="xl">xl</option>
                <option value={false}>false (no max width)</option>
              </select>
            </div>
            <div className="space-y-3">
              {["fixed", "disableGutters"].map((prop) => (
                <div key={prop} className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">{prop}</label>
                  <input
                    type="checkbox"
                    checked={controls[prop] || false}
                    onChange={(e) => onUpdateControl(prop, e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                  />
                </div>
              ))}
            </div>
          </>
        );

      case "Box":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">component</label>
              <select
                value={controls.component || "div"}
                onChange={(e) => onUpdateControl("component", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="div">div</option>
                <option value="span">span</option>
                <option value="section">section</option>
                <option value="article">article</option>
                <option value="main">main</option>
                <option value="aside">aside</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">padding</label>
              <input
                type="range"
                min="0"
                max="8"
                value={controls.padding || 2}
                onChange={(e) => onUpdateControl("padding", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.padding || 2}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">margin</label>
              <input
                type="range"
                min="0"
                max="8"
                value={controls.margin || 1}
                onChange={(e) => onUpdateControl("margin", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.margin || 1}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">borderRadius</label>
              <input
                type="range"
                min="0"
                max="16"
                value={controls.borderRadius || 0}
                onChange={(e) => onUpdateControl("borderRadius", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.borderRadius || 0}px</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">backgroundColor</label>
              <input
                type="color"
                value={controls.backgroundColor || "#ffffff"}
                onChange={(e) => onUpdateControl("backgroundColor", e.target.value)}
                className="w-full h-10 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">textAlign</label>
              <select
                value={controls.textAlign || "left"}
                onChange={(e) => onUpdateControl("textAlign", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="left">left</option>
                <option value="center">center</option>
                <option value="right">right</option>
                <option value="justify">justify</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">display</label>
              <select
                value={controls.display || "block"}
                onChange={(e) => onUpdateControl("display", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="block">block</option>
                <option value="flex">flex</option>
                <option value="inline">inline</option>
                <option value="inline-block">inline-block</option>
                <option value="none">none</option>
              </select>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">border</label>
                <input
                  type="checkbox"
                  checked={controls.border || false}
                  onChange={(e) => onUpdateControl("border", e.target.checked)}
                  className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                />
              </div>
            </div>
          </>
        );

      case "Stack":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">direction</label>
              <select
                value={controls.direction || "column"}
                onChange={(e) => onUpdateControl("direction", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="column">column</option>
                <option value="row">row</option>
                <option value="column-reverse">column-reverse</option>
                <option value="row-reverse">row-reverse</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">spacing</label>
              <input
                type="range"
                min="0"
                max="8"
                value={controls.spacing || 2}
                onChange={(e) => onUpdateControl("spacing", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.spacing || 2}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">justifyContent</label>
              <select
                value={controls.justifyContent || "flex-start"}
                onChange={(e) => onUpdateControl("justifyContent", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">alignItems</label>
              <select
                value={controls.alignItems || "stretch"}
                onChange={(e) => onUpdateControl("alignItems", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="stretch">stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
                <option value="baseline">baseline</option>
              </select>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">divider</label>
                <input
                  type="checkbox"
                  checked={controls.divider || false}
                  onChange={(e) => onUpdateControl("divider", e.target.checked)}
                  className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                />
              </div>
            </div>
          </>
        );

      case "Divider":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">orientation</label>
              <select
                value={controls.orientation || "horizontal"}
                onChange={(e) => onUpdateControl("orientation", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="horizontal">horizontal</option>
                <option value="vertical">vertical</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "fullWidth"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="fullWidth">fullWidth</option>
                <option value="inset">inset</option>
                <option value="middle">middle</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">textAlign</label>
              <select
                value={controls.textAlign || "center"}
                onChange={(e) => onUpdateControl("textAlign", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="center">center</option>
                <option value="left">left</option>
                <option value="right">right</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">children</label>
              <input
                type="text"
                value={controls.children || "Divider Text"}
                onChange={(e) => onUpdateControl("children", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">flexItem</label>
                <input
                  type="checkbox"
                  checked={controls.flexItem || false}
                  onChange={(e) => onUpdateControl("flexItem", e.target.checked)}
                  className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                />
              </div>
            </div>
          </>
        );

      case "Paper":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">elevation</label>
              <input
                type="range"
                min="0"
                max="24"
                value={controls.elevation || 1}
                onChange={(e) => onUpdateControl("elevation", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.elevation || 1}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "elevation"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="elevation">elevation</option>
                <option value="outlined">outlined</option>
              </select>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">square</label>
                <input
                  type="checkbox"
                  checked={controls.square || false}
                  onChange={(e) => onUpdateControl("square", e.target.checked)}
                  className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                />
              </div>
            </div>
          </>
        );

      case "ImageList":
        return (
          <>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">cols</label>
              <input
                type="range"
                min="1"
                max="6"
                value={controls.cols || 3}
                onChange={(e) => onUpdateControl("cols", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.cols || 3}</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">rowHeight</label>
              <input
                type="range"
                min="120"
                max="300"
                step="20"
                value={controls.rowHeight || 164}
                onChange={(e) => onUpdateControl("rowHeight", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.rowHeight || 164}px</div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">variant</label>
              <select
                value={controls.variant || "standard"}
                onChange={(e) => onUpdateControl("variant", e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              >
                <option value="standard">standard</option>
                <option value="quilted">quilted</option>
                <option value="woven">woven</option>
                <option value="masonry">masonry</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">gap</label>
              <input
                type="range"
                min="0"
                max="24"
                value={controls.gap || 8}
                onChange={(e) => onUpdateControl("gap", parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">Current: {controls.gap || 8}px</div>
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
