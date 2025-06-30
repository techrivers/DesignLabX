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
