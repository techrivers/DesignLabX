import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { ComponentPreview } from "./ComponentPreviewSimple";
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
      components: ["Button", "TextField", "Checkbox", "Select", "Radio", "Switch", "Slider", "Rating", "Autocomplete", "ToggleButton", "ButtonGroup", "Fab"]
    },
    {
      name: "Data Display",
      components: ["Table", "Card", "List", "Chip", "Avatar", "Badge", "Tooltip", "Typography", "Accordion", "Timeline", "TreeView"]
    },
    {
      name: "Navigation",
      components: ["AppBar", "Drawer", "Tabs", "Breadcrumbs", "Stepper", "BottomNavigation", "Menu", "Pagination", "SpeedDial"]
    },
    {
      name: "Feedback",
      components: ["Alert", "Dialog", "Snackbar", "Progress", "Skeleton", "Backdrop", "CircularProgress", "LinearProgress"]
    },
    {
      name: "Layout",
      components: ["Grid", "Container", "Box", "Stack", "Divider", "Paper", "ImageList"]
    },
    {
      name: "Surfaces",
      components: ["AppBar", "Paper", "Card", "Accordion"]
    },
    {
      name: "Utils",
      components: ["ClickAwayListener", "Portal", "TextareaAutosize", "Popper", "Grow", "Fade", "Slide", "Zoom"]
    }
  ];

  const stories = {
    Button: ["Primary", "Secondary", "Outlined", "Text", "Disabled", "Loading"],
    TextField: ["Basic", "Outlined", "Filled", "Error", "Disabled", "Multiline"],
    Card: ["Basic", "With Media", "With Actions", "Outlined"],
    Table: ["Basic", "Dense", "With Pagination", "Sortable"],
    AppBar: ["Default", "Dense", "With Menu", "Elevated"],
    Checkbox: ["Basic", "With Label", "Disabled", "Indeterminate", "Color Variants"],
    Select: ["Basic", "With Helper Text", "Error", "Multiple", "Small"],
    Radio: ["Basic", "With Label", "Disabled", "Color Variants"],
    Switch: ["Basic", "With Label", "Disabled", "Color Variants"],
    Slider: ["Basic", "Range", "Disabled", "Marks", "Vertical"],
    Rating: ["Basic", "Read Only", "Half Rating", "Custom Icon"],
    Autocomplete: ["Basic", "Multiple", "Grouped", "Free Solo"],
    ToggleButton: ["Basic", "Multiple", "Size Variants"],
    ButtonGroup: ["Basic", "Vertical", "Split Button"],
    Fab: ["Basic", "Extended", "Size Variants"],
    List: ["Basic", "With Icons", "With Avatars", "Interactive"],
    Chip: ["Basic", "Deletable", "Clickable", "Avatar"],
    Avatar: ["Basic", "With Image", "Group", "Size Variants"],
    Badge: ["Basic", "Dot", "Custom", "Color Variants"],
    Tooltip: ["Basic", "Positioned", "Custom"],
    Typography: ["Headers", "Body", "Colors"],
    Accordion: ["Basic", "Controlled", "Detailed"],
    Timeline: ["Basic", "Alternate", "Custom"],
    Drawer: ["Temporary", "Permanent", "Right Anchor"],
    Tabs: ["Basic", "Scrollable", "Vertical", "Centered"],
    Breadcrumbs: ["Basic", "Custom Separator", "With Icons"],
    Stepper: ["Horizontal", "Vertical", "Non Linear"],
    BottomNavigation: ["Basic", "With Badge"],
    Menu: ["Basic", "Positioned", "Dense"],
    Pagination: ["Basic", "Outlined", "Size Variants"],
    SpeedDial: ["Basic", "Direction", "Persistent"],
    Alert: ["Basic", "Severity", "Action", "Filled"],
    Dialog: ["Basic", "Form", "Full Screen"],
    Snackbar: ["Basic", "Action", "Positioned"],
    Progress: ["Circular", "Linear", "With Label"],
    Skeleton: ["Text", "Rectangular", "Circular"],
    Backdrop: ["Basic", "Custom"],
    CircularProgress: ["Basic", "Determinate", "Size Variants"],
    LinearProgress: ["Basic", "Determinate", "Buffer"],
    Grid: ["Basic", "Spacing", "Breakpoints"],
    Container: ["Basic", "Max Width", "Fixed"],
    Box: ["Basic", "System Props"],
    Stack: ["Basic", "Direction", "Spacing"],
    Divider: ["Basic", "Vertical", "With Text"],
    Paper: ["Basic", "Elevation", "Outlined"],
    ImageList: ["Standard", "Quilted", "Woven"]
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  const updateControl = (key: string, value: any) => {
    setControls(prev => ({ ...prev, [key]: value }));
  };

  const generateComponentCode = () => {
    const getControlsString = () => {
      return Object.entries(controls)
        .filter(([key, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => {
          if (typeof value === 'string') {
            return `${key}="${value}"`;
          } else if (typeof value === 'boolean' && value) {
            return key;
          } else {
            return `${key}={${JSON.stringify(value)}}`;
          }
        })
        .join('\n      ');
    };

    const getImportStatement = () => {
      const componentMap: Record<string, string> = {
        'Button': 'Button',
        'TextField': 'TextField',
        'Card': 'Card, CardContent',
        'Checkbox': 'Checkbox, FormControlLabel',
        'Select': 'Select, FormControl, InputLabel, MenuItem',
        'Radio': 'Radio, RadioGroup, FormControlLabel',
        'Switch': 'Switch, FormControlLabel',
        'Slider': 'Slider',
        'Rating': 'Rating',
        'Autocomplete': 'Autocomplete, TextField',
        'ToggleButton': 'ToggleButton, ToggleButtonGroup',
        'ButtonGroup': 'ButtonGroup, Button',
        'Fab': 'Fab',
        'Table': 'Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper',
        'List': 'List, ListItem, ListItemText, ListItemIcon',
        'Chip': 'Chip',
        'Avatar': 'Avatar',
        'Badge': 'Badge',
        'Typography': 'Typography',
        'Accordion': 'Accordion, AccordionSummary, AccordionDetails',
        'AppBar': 'AppBar, Toolbar, Typography',
        'Drawer': 'Drawer, List, ListItem, ListItemText',
        'Tabs': 'Tabs, Tab',
        'Alert': 'Alert',
        'Dialog': 'Dialog, DialogTitle, DialogContent, DialogActions, Button',
        'Progress': 'CircularProgress, LinearProgress',
        'Grid': 'Grid',
        'Paper': 'Paper',
        'Box': 'Box',
        'Stack': 'Stack',
        'Divider': 'Divider'
      };
      
      return `import { ${componentMap[selectedComponent] || selectedComponent} } from '@mui/material';`;
    };

    const getComponentJSX = () => {
      const controlsString = getControlsString();
      
      switch (selectedComponent) {
        case 'Button':
          return `<Button${controlsString ? `\n      ${controlsString}` : ''}>
      Button Text
    </Button>`;
        case 'TextField':
          return `<TextField${controlsString ? `\n      ${controlsString}` : ''}
      label="Text Field"
      variant="outlined"
    />`;
        case 'Card':
          return `<Card${controlsString ? `\n      ${controlsString}` : ''}>
      <CardContent>
        <Typography variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Card content goes here
        </Typography>
      </CardContent>
    </Card>`;
        case 'Checkbox':
          return `<FormControlLabel
      control={<Checkbox${controlsString ? `\n        ${controlsString}` : ''} />}
      label="Checkbox Label"
    />`;
        default:
          return `<${selectedComponent}${controlsString ? `\n      ${controlsString}` : ''}>
      {/* Component content */}
    </${selectedComponent}>`;
      }
    };

    return `${getImportStatement()}

function ${selectedComponent}Example() {
  return (
    ${getComponentJSX()}
  );
}

export default ${selectedComponent}Example;`;
  };

  const exportComponent = () => {
    const code = generateComponentCode();
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedComponent}-${selectedStory}.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

            {/* Export Component Button */}
            <button
              onClick={exportComponent}
              className="px-3 py-2 text-sm flex items-center bg-green-600 hover:bg-green-700 text-white rounded-lg"
              title="Export Component Code"
            >
              <span className="material-icons text-sm mr-1">download</span>
              Export
            </button>

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
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <ComponentPreview
                component={selectedComponent}
                story={selectedStory}
                controls={controls}
                viewport={viewport}
                zoom={zoom}
              />
            </div>
            <div className="w-80 overflow-auto border-l">
              <ControlsPanel
                controls={controls}
                onUpdateControl={updateControl}
                component={selectedComponent}
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-auto">
            <DocumentationPanel component={selectedComponent} />
          </div>
        )}
      </div>
    </div>
  );
}
