import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { ComponentPreview } from "./ComponentPreview";
import { ControlsPanel } from "./ControlsPanel";
import { DocumentationPanel } from "./DocumentationPanel";

export function StorybookLayout() {
  const [selectedComponent, setSelectedComponent] = useState("Button");
  const [selectedStory, setSelectedStory] = useState("Primary");
  const [viewMode, setViewMode] = useState<"canvas" | "docs">("canvas");
  const [viewport, setViewport] = useState("desktop");
  const [theme, setTheme] = useState("light");
  const [zoom, setZoom] = useState(100);
  const [controls, setControls] = useState({
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Primary Button",
    disabled: false,
    fullWidth: false,
    disableElevation: false,
  });

  const componentCategories = [
    {
      name: "Input Components",
      components: ["Button", "TextField", "Checkbox", "Select", "Radio", "Switch"]
    },
    {
      name: "Data Display",
      components: ["Table", "Card", "List", "Chip", "Avatar", "Badge"]
    },
    {
      name: "Navigation",
      components: ["AppBar", "Drawer", "Tabs", "Breadcrumbs", "Stepper"]
    },
    {
      name: "Feedback",
      components: ["Alert", "Dialog", "Snackbar", "Progress", "Skeleton"]
    },
    {
      name: "Layout",
      components: ["Grid", "Container", "Box", "Stack", "Divider"]
    }
  ];

  const stories = {
    Button: ["Primary", "Secondary", "Outlined", "Text", "Disabled", "Loading"],
    TextField: ["Basic", "Outlined", "Filled", "Error", "Disabled", "Multiline"],
    Card: ["Basic", "With Media", "With Actions", "Outlined"],
    Table: ["Basic", "Dense", "With Pagination", "Sortable"],
    AppBar: ["Default", "Dense", "With Menu", "Elevated"]
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  const updateControl = (key: string, value: any) => {
    setControls(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={`flex h-screen bg-background text-foreground ${theme === "dark" ? "dark" : ""}`}>
      <Sidebar
        categories={componentCategories}
        selectedComponent={selectedComponent}
        onSelectComponent={setSelectedComponent}
      />
      
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-16 bg-surface border-b border-border flex items-center px-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-medium text-foreground">{selectedComponent}</h2>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                Primary
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                Stable
              </span>
            </div>
          </div>
          
          <div className="ml-auto flex items-center space-x-2">
            {/* Viewport Controls */}
            <div className="flex items-center space-x-1 border border-border rounded-lg p-1">
              {["mobile", "tablet", "desktop"].map((size) => (
                <button
                  key={size}
                  onClick={() => setViewport(size)}
                  className={`p-2 rounded ${
                    viewport === size ? "bg-primary text-white" : "hover:bg-muted"
                  }`}
                  title={size}
                >
                  <span className="material-icons text-lg">
                    {size === "mobile" ? "smartphone" : size === "tablet" ? "tablet" : "desktop_windows"}
                  </span>
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded"
              title="Toggle Dark Mode"
            >
              <span className="material-icons text-lg">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>

            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 border border-border rounded-lg">
              <button
                onClick={() => setZoom(Math.max(50, zoom - 25))}
                className="px-3 py-2 hover:bg-muted text-sm"
              >
                -
              </button>
              <span className="px-2 py-2 text-sm border-x border-border">{zoom}%</span>
              <button
                onClick={() => setZoom(Math.min(200, zoom + 25))}
                className="px-3 py-2 hover:bg-muted text-sm"
              >
                +
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("canvas")}
                className={`px-3 py-2 text-sm flex items-center ${
                  viewMode === "canvas" ? "bg-primary text-white" : "hover:bg-muted"
                }`}
              >
                <span className="material-icons text-sm mr-1">visibility</span>
                Canvas
              </button>
              <button
                onClick={() => setViewMode("docs")}
                className={`px-3 py-2 text-sm flex items-center ${
                  viewMode === "docs" ? "bg-primary text-white" : "hover:bg-muted"
                }`}
              >
                <span className="material-icons text-sm mr-1">description</span>
                Docs
              </button>
            </div>
          </div>
        </div>

        {/* Story Tabs */}
        <div className="bg-surface border-b border-border">
          <div className="flex px-6">
            {(stories[selectedComponent as keyof typeof stories] || ["Default"]).map((story) => (
              <button
                key={story}
                onClick={() => setSelectedStory(story)}
                className={`px-4 py-3 text-sm font-medium ${
                  selectedStory === story
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {story}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        {viewMode === "canvas" ? (
          <div className="flex-1 flex">
            <ComponentPreview
              component={selectedComponent}
              story={selectedStory}
              controls={controls}
              viewport={viewport}
              zoom={zoom}
            />
            <ControlsPanel
              controls={controls}
              onUpdateControl={updateControl}
              component={selectedComponent}
            />
          </div>
        ) : (
          <DocumentationPanel component={selectedComponent} />
        )}
      </div>
    </div>
  );
}
