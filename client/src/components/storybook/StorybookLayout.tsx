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
  const [controls, setControls] = useState<any>({
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Primary Button",
    disabled: false,
    fullWidth: false,
    disableElevation: false,
    startIcon: undefined,
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
    setControls((prev: any) => ({ ...prev, [key]: value }));
  };

  // Function to get default controls based on component and story
  const getDefaultControls = (component: string, story: string) => {
    switch (component) {
      case "Button":
        switch (story) {
          case "Primary":
            return {
              variant: "contained",
              color: "primary",
              size: "medium",
              children: "Primary Button",
              disabled: false,
              fullWidth: false,
              disableElevation: false,
              startIcon: undefined,
            };
          case "Secondary":
            return {
              variant: "contained",
              color: "secondary",
              size: "medium",
              children: "Secondary Button",
              disabled: false,
              fullWidth: false,
              disableElevation: false,
              startIcon: undefined,
            };
          case "Outlined":
            return {
              variant: "outlined",
              color: "primary",
              size: "medium",
              children: "Outlined Button",
              disabled: false,
              fullWidth: false,
              disableElevation: false,
              startIcon: undefined,
            };
          case "Text":
            return {
              variant: "text",
              color: "primary",
              size: "medium",
              children: "Text Button",
              disabled: false,
              fullWidth: false,
              disableElevation: false,
              startIcon: undefined,
            };
          case "Disabled":
            return {
              variant: "contained",
              color: "primary",
              size: "medium",
              children: "Disabled Button",
              disabled: true,
              fullWidth: false,
              disableElevation: false,
              startIcon: undefined,
            };
          case "Loading":
            return {
              variant: "contained",
              color: "primary",
              size: "medium",
              children: "Loading...",
              disabled: true,
              fullWidth: false,
              disableElevation: false,
              startIcon: "loading",
            };
          default:
            return {
              variant: "contained",
              color: "primary",
              size: "medium",
              children: "Button",
              disabled: false,
              fullWidth: false,
              disableElevation: false,
              startIcon: undefined,
            };
        }
      
      case "TextField":
        switch (story) {
          case "Basic":
            return {
              variant: "outlined",
              label: "Basic TextField",
              placeholder: "Enter text...",
              disabled: false,
              error: false,
              helperText: "",
              fullWidth: false,
              multiline: false,
              size: "medium",
              startIcon: undefined,
            };
          case "Outlined":
            return {
              variant: "outlined",
              label: "Outlined TextField",
              placeholder: "Outlined style",
              disabled: false,
              error: false,
              helperText: "This is an outlined text field",
              fullWidth: false,
              multiline: false,
              size: "medium",
              startIcon: undefined,
            };
          case "Filled":
            return {
              variant: "filled",
              label: "Filled TextField",
              placeholder: "Filled style",
              disabled: false,
              error: false,
              helperText: "This is a filled text field",
              fullWidth: false,
              multiline: false,
              size: "medium",
              startIcon: undefined,
            };
          case "Standard":
            return {
              variant: "standard",
              label: "Standard TextField",
              placeholder: "Standard style",
              disabled: false,
              error: false,
              helperText: "This is a standard text field",
              fullWidth: false,
              multiline: false,
              size: "medium",
              startIcon: undefined,
            };
          case "Error":
            return {
              variant: "outlined",
              label: "Error TextField",
              placeholder: "Error state",
              disabled: false,
              error: true,
              helperText: "This field has an error",
              fullWidth: false,
              multiline: false,
              size: "medium",
              startIcon: undefined,
            };
          case "Disabled":
            return {
              variant: "outlined",
              label: "Disabled TextField",
              placeholder: "Disabled",
              disabled: true,
              error: false,
              helperText: "This field is disabled",
              fullWidth: false,
              multiline: false,
              size: "medium",
              startIcon: undefined,
            };
          case "Multiline":
            return {
              variant: "outlined",
              label: "Multiline TextField",
              placeholder: "Enter multiple lines...",
              disabled: false,
              error: false,
              helperText: "This field supports multiple lines",
              fullWidth: false,
              multiline: true,
              size: "medium",
              startIcon: undefined,
            };
          default:
            return {
              variant: "outlined",
              label: "TextField",
              placeholder: "Enter text...",
              disabled: false,
              error: false,
              helperText: "",
              fullWidth: false,
              multiline: false,
              size: "medium",
              startIcon: undefined,
            };
        }

      case "Checkbox":
        switch (story) {
          case "Basic":
            return {
              checked: false,
              disabled: false,
              color: "primary",
              size: "medium",
              indeterminate: false,
              label: "Basic Checkbox",
              startIcon: undefined,
            };
          case "WithLabel":
            return {
              checked: false,
              disabled: false,
              color: "primary",
              size: "medium",
              indeterminate: false,
              label: "Checkbox with Label",
              startIcon: undefined,
            };
          case "Disabled":
            return {
              checked: false,
              disabled: true,
              color: "primary",
              size: "medium",
              indeterminate: false,
              label: "Disabled Checkbox",
              startIcon: undefined,
            };
          case "Indeterminate":
            return {
              checked: false,
              disabled: false,
              color: "primary",
              size: "medium",
              indeterminate: true,
              label: "Indeterminate Checkbox",
              startIcon: undefined,
            };
          case "ColorVariants":
            return {
              checked: true,
              disabled: false,
              color: "secondary",
              size: "medium",
              indeterminate: false,
              label: "Secondary Color",
              startIcon: undefined,
            };
          case "SizeVariants":
            return {
              checked: true,
              disabled: false,
              color: "primary",
              size: "small",
              indeterminate: false,
              label: "Small Checkbox",
              startIcon: undefined,
            };
          case "Controlled":
            return {
              checked: true,
              disabled: false,
              color: "primary",
              size: "medium",
              indeterminate: false,
              label: "Controlled Checkbox",
              startIcon: undefined,
            };
          default:
            return {
              checked: false,
              disabled: false,
              color: "primary",
              size: "medium",
              indeterminate: false,
              label: "Checkbox",
              startIcon: undefined,
            };
        }

      case "Select":
        switch (story) {
          case "Basic":
            return {
              variant: "outlined",
              label: "Basic Select",
              value: "",
              disabled: false,
              error: false,
              helperText: "",
              fullWidth: false,
              multiple: false,
              size: "medium",
              startIcon: undefined,
            };
          case "WithHelperText":
            return {
              variant: "outlined",
              label: "Select with Helper",
              value: "option1",
              disabled: false,
              error: false,
              helperText: "Choose an option from the list",
              fullWidth: false,
              multiple: false,
              size: "medium",
              startIcon: undefined,
            };
          case "Error":
            return {
              variant: "outlined",
              label: "Error Select",
              value: "",
              disabled: false,
              error: true,
              helperText: "Please select an option",
              fullWidth: false,
              multiple: false,
              size: "medium",
              startIcon: undefined,
            };
          case "Multiple":
            return {
              variant: "outlined",
              label: "Multiple Select",
              value: ["option1"],
              disabled: false,
              error: false,
              helperText: "Select multiple options",
              fullWidth: false,
              multiple: true,
              size: "medium",
              startIcon: undefined,
            };
          case "Small":
            return {
              variant: "outlined",
              label: "Small Select",
              value: "option1",
              disabled: false,
              error: false,
              helperText: "",
              fullWidth: false,
              multiple: false,
              size: "small",
              startIcon: undefined,
            };
          case "Filled":
            return {
              variant: "filled",
              label: "Filled Select",
              value: "option1",
              disabled: false,
              error: false,
              helperText: "Filled variant style",
              fullWidth: false,
              multiple: false,
              size: "medium",
              startIcon: undefined,
            };
          default:
            return {
              variant: "outlined",
              label: "Select",
              value: "",
              disabled: false,
              error: false,
              helperText: "",
              fullWidth: false,
              multiple: false,
              size: "medium",
              startIcon: undefined,
            };
        }

      case "Switch":
        switch (story) {
          case "Basic":
            return {
              checked: false,
              disabled: false,
              color: "primary",
              size: "medium",
              label: "Basic Switch",
              startIcon: undefined,
            };
          case "WithLabel":
            return {
              checked: true,
              disabled: false,
              color: "primary",
              size: "medium",
              label: "Switch with Label",
              startIcon: undefined,
            };
          case "Disabled":
            return {
              checked: false,
              disabled: true,
              color: "primary",
              size: "medium",
              label: "Disabled Switch",
              startIcon: undefined,
            };
          case "ColorVariants":
            return {
              checked: true,
              disabled: false,
              color: "secondary",
              size: "medium",
              label: "Secondary Color",
              startIcon: undefined,
            };
          case "Controlled":
            return {
              checked: true,
              disabled: false,
              color: "primary",
              size: "medium",
              label: "Controlled Switch",
              startIcon: undefined,
            };
          default:
            return {
              checked: false,
              disabled: false,
              color: "primary",
              size: "medium",
              label: "Switch",
              startIcon: undefined,
            };
        }

      case "Radio":
        switch (story) {
          case "Basic":
            return {
              checked: false,
              disabled: false,
              color: "primary",
              size: "medium",
              value: "basic",
              label: "Basic Radio",
              startIcon: undefined,
            };
          case "WithLabel":
            return {
              checked: true,
              disabled: false,
              color: "primary",
              size: "medium",
              value: "labeled",
              label: "Radio with Label",
              startIcon: undefined,
            };
          case "Disabled":
            return {
              checked: false,
              disabled: true,
              color: "primary",
              size: "medium",
              value: "disabled",
              label: "Disabled Radio",
              startIcon: undefined,
            };
          case "ColorVariants":
            return {
              checked: true,
              disabled: false,
              color: "secondary",
              size: "medium",
              value: "secondary",
              label: "Secondary Color",
              startIcon: undefined,
            };
          case "Controlled":
            return {
              checked: true,
              disabled: false,
              color: "primary",
              size: "medium",
              value: "controlled",
              label: "Controlled Radio",
              startIcon: undefined,
            };
          default:
            return {
              checked: false,
              disabled: false,
              color: "primary",
              size: "medium",
              value: "default",
              label: "Radio",
              startIcon: undefined,
            };
        }

      case "Slider":
        switch (story) {
          case "Basic":
            return {
              value: 30,
              min: 0,
              max: 100,
              step: 1,
              disabled: false,
              color: "primary",
              size: "medium",
              orientation: "horizontal",
              marks: false,
              valueLabelDisplay: "off",
              startIcon: undefined,
            };
          case "Range":
            return {
              value: [20, 60],
              min: 0,
              max: 100,
              step: 1,
              disabled: false,
              color: "primary",
              size: "medium",
              orientation: "horizontal",
              marks: false,
              valueLabelDisplay: "on",
              startIcon: undefined,
            };
          case "Disabled":
            return {
              value: 50,
              min: 0,
              max: 100,
              step: 1,
              disabled: true,
              color: "primary",
              size: "medium",
              orientation: "horizontal",
              marks: false,
              valueLabelDisplay: "off",
              startIcon: undefined,
            };
          case "Marks":
            return {
              value: 40,
              min: 0,
              max: 100,
              step: 10,
              disabled: false,
              color: "primary",
              size: "medium",
              orientation: "horizontal",
              marks: true,
              valueLabelDisplay: "auto",
              startIcon: undefined,
            };
          case "Vertical":
            return {
              value: 30,
              min: 0,
              max: 100,
              step: 1,
              disabled: false,
              color: "primary",
              size: "medium",
              orientation: "vertical",
              marks: false,
              valueLabelDisplay: "auto",
              startIcon: undefined,
            };
          default:
            return {
              value: 30,
              min: 0,
              max: 100,
              step: 1,
              disabled: false,
              color: "primary",
              size: "medium",
              orientation: "horizontal",
              marks: false,
              valueLabelDisplay: "off",
              startIcon: undefined,
            };
        }

      case "Alert":
        switch (story) {
          case "Basic":
            return {
              severity: "info",
              variant: "standard",
              children: "This is a basic alert message",
              onClose: undefined,
              action: undefined,
              icon: undefined,
              title: "",
              startIcon: undefined,
            };
          case "Severity":
            return {
              severity: "success",
              variant: "standard",
              children: "This is a success alert message",
              onClose: undefined,
              action: undefined,
              icon: undefined,
              title: "",
              startIcon: undefined,
            };
          case "Action":
            return {
              severity: "warning",
              variant: "standard",
              children: "This alert has an action button",
              onClose: "close",
              action: "UNDO",
              icon: undefined,
              title: "",
              startIcon: undefined,
            };
          case "Filled":
            return {
              severity: "error",
              variant: "filled",
              children: "This is a filled alert message",
              onClose: undefined,
              action: undefined,
              icon: undefined,
              title: "",
              startIcon: undefined,
            };
          case "WithTitle":
            return {
              severity: "info",
              variant: "standard",
              children: "This alert includes a title for better context",
              onClose: undefined,
              action: undefined,
              icon: undefined,
              title: "Information",
              startIcon: undefined,
            };
          default:
            return {
              severity: "info",
              variant: "standard",
              children: "Alert message",
              onClose: undefined,
              action: undefined,
              icon: undefined,
              title: "",
              startIcon: undefined,
            };
        }

      case "Card":
        switch (story) {
          case "Basic":
            return {
              variant: "elevation",
              elevation: 1,
              title: "Basic Card",
              subtitle: "This is a basic card",
              content: "Card content goes here. This is a simple Material-UI card component.",
              actions: false,
              media: false,
              startIcon: undefined,
            };
          case "WithMedia":
            return {
              variant: "elevation",
              elevation: 2,
              title: "Card with Media",
              subtitle: "Includes header image",
              content: "This card demonstrates media integration with image headers.",
              actions: true,
              media: true,
              startIcon: undefined,
            };
          case "WithActions":
            return {
              variant: "elevation",
              elevation: 1,
              title: "Interactive Card",
              subtitle: "With action buttons",
              content: "This card includes action buttons for user interaction.",
              actions: true,
              media: false,
              startIcon: undefined,
            };
          case "Outlined":
            return {
              variant: "outlined",
              elevation: 0,
              title: "Outlined Card",
              subtitle: "Clean border style",
              content: "This card uses outlined variant with border styling.",
              actions: false,
              media: false,
              startIcon: undefined,
            };
          default:
            return {
              variant: "elevation",
              elevation: 1,
              title: "Card Title",
              subtitle: "Card subtitle",
              content: "Card content",
              actions: false,
              media: false,
              startIcon: undefined,
            };
        }

      case "Typography":
        switch (story) {
          case "Headers":
            return {
              variant: "h1",
              color: "inherit",
              align: "left",
              children: "Header Typography",
              gutterBottom: true,
              noWrap: false,
              component: "h1",
              startIcon: undefined,
            };
          case "Body":
            return {
              variant: "body1",
              color: "inherit",
              align: "left",
              children: "This is body text with standard formatting and proper line spacing.",
              gutterBottom: false,
              noWrap: false,
              component: "p",
              startIcon: undefined,
            };
          case "Colors":
            return {
              variant: "h4",
              color: "primary",
              align: "center",
              children: "Colored Typography",
              gutterBottom: true,
              noWrap: false,
              component: "h4",
              startIcon: undefined,
            };
          default:
            return {
              variant: "body1",
              color: "inherit",
              align: "left",
              children: "Typography example",
              gutterBottom: false,
              noWrap: false,
              component: "p",
              startIcon: undefined,
            };
        }

      case "Avatar":
        switch (story) {
          case "Basic":
            return {
              variant: "circular",
              size: 40,
              children: "U",
              src: "",
              alt: "User Avatar",
              backgroundColor: "primary",
              startIcon: undefined,
            };
          case "WithImage":
            return {
              variant: "circular",
              size: 56,
              children: "",
              src: "/api/placeholder/56/56",
              alt: "Profile Picture",
              backgroundColor: "primary",
              startIcon: undefined,
            };
          case "Group":
            return {
              variant: "circular",
              size: 40,
              children: "G",
              src: "",
              alt: "Group Avatar",
              backgroundColor: "secondary",
              startIcon: undefined,
            };
          case "SizeVariants":
            return {
              variant: "circular",
              size: 24,
              children: "S",
              src: "",
              alt: "Small Avatar",
              backgroundColor: "primary",
              startIcon: undefined,
            };
          case "VariantStyles":
            return {
              variant: "rounded",
              size: 40,
              children: "R",
              src: "",
              alt: "Rounded Avatar",
              backgroundColor: "primary",
              startIcon: undefined,
            };
          default:
            return {
              variant: "circular",
              size: 40,
              children: "A",
              src: "",
              alt: "Avatar",
              backgroundColor: "primary",
              startIcon: undefined,
            };
        }

      case "Badge":
        switch (story) {
          case "Basic":
            return {
              badgeContent: "4",
              color: "primary",
              variant: "standard",
              overlap: "rectangular",
              anchorOrigin: { vertical: "top", horizontal: "right" },
              showZero: false,
              invisible: false,
              max: 99,
              startIcon: undefined,
            };
          case "Dot":
            return {
              badgeContent: "",
              color: "secondary",
              variant: "dot",
              overlap: "circular",
              anchorOrigin: { vertical: "top", horizontal: "right" },
              showZero: false,
              invisible: false,
              max: 99,
              startIcon: undefined,
            };
          case "Custom":
            return {
              badgeContent: "NEW",
              color: "error",
              variant: "standard",
              overlap: "rectangular",
              anchorOrigin: { vertical: "top", horizontal: "right" },
              showZero: false,
              invisible: false,
              max: 99,
              startIcon: undefined,
            };
          case "ColorVariants":
            return {
              badgeContent: "99+",
              color: "success",
              variant: "standard",
              overlap: "circular",
              anchorOrigin: { vertical: "top", horizontal: "right" },
              showZero: true,
              invisible: false,
              max: 99,
              startIcon: undefined,
            };
          case "WithAvatar":
            return {
              badgeContent: "3",
              color: "warning",
              variant: "standard",
              overlap: "circular",
              anchorOrigin: { vertical: "bottom", horizontal: "right" },
              showZero: false,
              invisible: false,
              max: 99,
              startIcon: undefined,
            };
          default:
            return {
              badgeContent: "1",
              color: "primary",
              variant: "standard",
              overlap: "rectangular",
              anchorOrigin: { vertical: "top", horizontal: "right" },
              showZero: false,
              invisible: false,
              max: 99,
              startIcon: undefined,
            };
        }

      case "Chip":
        switch (story) {
          case "Basic":
            return {
              label: "Basic Chip",
              variant: "filled",
              color: "default",
              size: "medium",
              disabled: false,
              clickable: false,
              deletable: false,
              avatar: false,
              icon: false,
              startIcon: undefined,
            };
          case "Deletable":
            return {
              label: "Deletable Chip",
              variant: "filled",
              color: "primary",
              size: "medium",
              disabled: false,
              clickable: false,
              deletable: true,
              avatar: false,
              icon: false,
              startIcon: undefined,
            };
          case "Clickable":
            return {
              label: "Clickable Chip",
              variant: "filled",
              color: "secondary",
              size: "medium",
              disabled: false,
              clickable: true,
              deletable: false,
              avatar: false,
              icon: false,
              startIcon: undefined,
            };
          case "Avatar":
            return {
              label: "Avatar Chip",
              variant: "filled",
              color: "primary",
              size: "medium",
              disabled: false,
              clickable: true,
              deletable: true,
              avatar: true,
              icon: false,
              startIcon: undefined,
            };
          case "ColorVariants":
            return {
              label: "Success Chip",
              variant: "filled",
              color: "success",
              size: "medium",
              disabled: false,
              clickable: false,
              deletable: false,
              avatar: false,
              icon: false,
              startIcon: undefined,
            };
          case "SizeVariants":
            return {
              label: "Small Chip",
              variant: "filled",
              color: "primary",
              size: "small",
              disabled: false,
              clickable: false,
              deletable: false,
              avatar: false,
              icon: false,
              startIcon: undefined,
            };
          case "VariantStyles":
            return {
              label: "Outlined Chip",
              variant: "outlined",
              color: "primary",
              size: "medium",
              disabled: false,
              clickable: false,
              deletable: false,
              avatar: false,
              icon: false,
              startIcon: undefined,
            };
          default:
            return {
              label: "Chip",
              variant: "filled",
              color: "default",
              size: "medium",
              disabled: false,
              clickable: false,
              deletable: false,
              avatar: false,
              icon: false,
              startIcon: undefined,
            };
        }

      default:
        return {
          variant: "contained",
          color: "primary",
          size: "medium",
          children: `${component} Content`,
          disabled: false,
          fullWidth: false,
          disableElevation: false,
          startIcon: undefined,
        };
    }
  };

  // Update controls when component or story changes
  const handleComponentChange = (component: string) => {
    setSelectedComponent(component);
    const firstStory = stories[component as keyof typeof stories]?.[0] || "Default";
    setSelectedStory(firstStory);
    const newControls = getDefaultControls(component, firstStory);
    setControls(newControls);
  };

  const handleStoryChange = (story: string) => {
    setSelectedStory(story);
    const newControls = getDefaultControls(selectedComponent, story);
    setControls(newControls);
  };



  return (
    <div className={`flex h-screen bg-background text-foreground ${theme === "dark" ? "dark" : ""}`}>
      <Sidebar
        categories={componentCategories}
        selectedComponent={selectedComponent}
        onSelectComponent={handleComponentChange}
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
                onClick={() => handleStoryChange(story)}
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
