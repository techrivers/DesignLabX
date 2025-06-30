import { 
  Button as MuiButton, 
  TextField, 
  Card, 
  CardContent, 
  Typography,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Rating,
  Autocomplete,
  ToggleButton,
  ToggleButtonGroup,
  ButtonGroup,
  Fab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Avatar,
  Badge,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,

  Breadcrumbs,
  Link,
  Stepper,
  Step,
  StepLabel,
  BottomNavigation,
  BottomNavigationAction,
  Menu,
  Pagination,
  SpeedDial,
  SpeedDialAction,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  CircularProgress,
  LinearProgress,
  Skeleton,
  Backdrop,
  Grid,
  Container,
  Box,
  Stack,
  Divider,
  Paper,
  ImageList,
  ImageListItem
} from "@mui/material";

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
      case "Checkbox":
        return (
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Checkbox Label"
          />
        );
      case "Select":
        return (
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Age</InputLabel>
            <Select value="" label="Age">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        );
      case "Radio":
        return (
          <RadioGroup value="option1">
            <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
            <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          </RadioGroup>
        );
      case "Switch":
        return (
          <FormControlLabel
            control={<Switch />}
            label="Switch Label"
          />
        );
      case "Slider":
        return (
          <Box sx={{ width: 300 }}>
            <Slider
              defaultValue={30}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </Box>
        );
      case "Rating":
        return (
          <Rating value={4} readOnly={story === "Read Only"} precision={story === "Half Rating" ? 0.5 : 1} />
        );
      case "Autocomplete":
        return (
          <Autocomplete
            options={['Option 1', 'Option 2', 'Option 3']}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Autocomplete" />}
          />
        );
      case "ToggleButton":
        return (
          <ToggleButtonGroup value="left" exclusive>
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        );
      case "ButtonGroup":
        return (
          <ButtonGroup variant="contained">
            <MuiButton>One</MuiButton>
            <MuiButton>Two</MuiButton>
            <MuiButton>Three</MuiButton>
          </ButtonGroup>
        );
      case "Fab":
        return (
          <Fab color="primary">
            <span className="material-icons">add</span>
          </Fab>
        );
      case "Chip":
        return (
          <Chip label="Chip Label" />
        );
      case "Avatar":
        return (
          <Avatar>
            <span className="material-icons">person</span>
          </Avatar>
        );
      case "Badge":
        return (
          <Badge badgeContent={4} color="primary">
            <span className="material-icons">mail</span>
          </Badge>
        );
      case "Tooltip":
        return (
          <Tooltip title="Tooltip text">
            <MuiButton>Hover me</MuiButton>
          </Tooltip>
        );
      case "Typography":
        return (
          <div>
            <Typography variant="h4" gutterBottom>Heading 4</Typography>
            <Typography variant="body1">Body text content</Typography>
          </div>
        );
      case "Accordion":
        return (
          <Accordion>
            <AccordionSummary expandIcon={<span className="material-icons">expand_more</span>}>
              <Typography>Accordion Summary</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Accordion content goes here</Typography>
            </AccordionDetails>
          </Accordion>
        );
      case "Breadcrumbs":
        return (
          <Breadcrumbs>
            <Link href="#" underline="hover">Home</Link>
            <Link href="#" underline="hover">Category</Link>
            <Typography color="text.primary">Current Page</Typography>
          </Breadcrumbs>
        );
      case "Stepper":
        return (
          <Stepper activeStep={1}>
            <Step><StepLabel>Step 1</StepLabel></Step>
            <Step><StepLabel>Step 2</StepLabel></Step>
            <Step><StepLabel>Step 3</StepLabel></Step>
          </Stepper>
        );
      case "Alert":
        return (
          <Alert severity="info">This is an info alert</Alert>
        );
      case "CircularProgress":
        return (
          <CircularProgress />
        );
      case "LinearProgress":
        return (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        );
      case "Skeleton":
        return (
          <div>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </div>
        );
      case "Paper":
        return (
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography>Paper content</Typography>
          </Paper>
        );
      case "Grid":
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid size={6}>
                <Paper sx={{ p: 2 }}>Item 1</Paper>
              </Grid>
              <Grid size={6}>
                <Paper sx={{ p: 2 }}>Item 2</Paper>
              </Grid>
            </Grid>
          </Box>
        );
      case "Stack":
        return (
          <Stack spacing={2} direction="row">
            <Paper sx={{ p: 1 }}>Item 1</Paper>
            <Paper sx={{ p: 1 }}>Item 2</Paper>
            <Paper sx={{ p: 1 }}>Item 3</Paper>
          </Stack>
        );
      case "Divider":
        return (
          <div>
            <Typography>Content above</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography>Content below</Typography>
          </div>
        );
      case "Pagination":
        return (
          <Pagination count={10} />
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
