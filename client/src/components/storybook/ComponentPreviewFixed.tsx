import { useState } from 'react';
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
  Container,
  Box,
  Stack,
  Divider,
  Paper,
  AppBar,
  Toolbar,
  Drawer,
  Tabs,
  Tab
} from '@mui/material';

interface ComponentPreviewProps {
  component: string;
  story: string;
  controls: any;
  viewport: string;
  zoom: number;
}

export function ComponentPreview({ component, story, controls, viewport, zoom }: ComponentPreviewProps) {
  const [selectedViewport, setSelectedViewport] = useState(viewport || 'desktop');
  const [currentZoom, setCurrentZoom] = useState(zoom || 1);
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState<'canvas' | 'design'>('canvas');

  const renderComponent = () => {
    switch (component) {
      case "Button":
        return <MuiButton variant="contained" color="primary">Button</MuiButton>;
      case "TextField":
        return <TextField label="Text Field" variant="outlined" />;
      case "Card":
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a sample card component with content.
              </Typography>
            </CardContent>
          </Card>
        );
      case "Checkbox":
        return (
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Checkbox"
          />
        );
      case "Select":
        return (
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Select</InputLabel>
            <Select value="option1" label="Select">
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        );
      case "Radio":
        return (
          <RadioGroup defaultValue="option1">
            <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
            <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
            <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
          </RadioGroup>
        );
      case "Switch":
        return <FormControlLabel control={<Switch defaultChecked />} label="Switch" />;
      case "Slider":
        return <Slider defaultValue={30} />;
      case "Rating":
        return <Rating value={4} readOnly />;
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
      case "List":
        return (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemIcon>
                <span className="material-icons">inbox</span>
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <span className="material-icons">drafts</span>
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        );
      case "Chip":
        return <Chip label="Chip" />;
      case "Avatar":
        return <Avatar>A</Avatar>;
      case "Badge":
        return (
          <Badge badgeContent={4} color="primary">
            <span className="material-icons">mail</span>
          </Badge>
        );
      case "Typography":
        return <Typography variant="h4">Typography</Typography>;
      case "Accordion":
        return (
          <Accordion>
            <AccordionSummary expandIcon={<span className="material-icons">expand_more</span>}>
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      case "Alert":
        return <Alert severity="info">This is an info alert</Alert>;
      case "Progress":
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <CircularProgress />
            <LinearProgress />
          </Box>
        );
      case "Table":
        return (
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ padding: '16px', textAlign: 'left' }}>Name</th>
                  <th style={{ padding: '16px', textAlign: 'left' }}>Calories</th>
                  <th style={{ padding: '16px', textAlign: 'left' }}>Fat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '16px' }}>Frozen yoghurt</td>
                  <td style={{ padding: '16px' }}>159</td>
                  <td style={{ padding: '16px' }}>6.0</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px' }}>Ice cream sandwich</td>
                  <td style={{ padding: '16px' }}>237</td>
                  <td style={{ padding: '16px' }}>9.0</td>
                </tr>
              </tbody>
            </table>
          </Paper>
        );
      case "Pagination":
        return <Pagination count={10} />;
      case "AppBar":
        return (
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                App Bar
              </Typography>
              <MuiButton color="inherit">Login</MuiButton>
            </Toolbar>
          </AppBar>
        );
      case "Tabs":
        return (
          <Box sx={{ width: '100%' }}>
            <Tabs value={0}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
        );
      case "Breadcrumbs":
        return (
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Catalog
            </Link>
            <Typography color="text.primary">Breadcrumb</Typography>
          </Breadcrumbs>
        );
      case "Stepper":
        return (
          <Stepper activeStep={1}>
            <Step><StepLabel>Select campaign settings</StepLabel></Step>
            <Step><StepLabel>Create an ad group</StepLabel></Step>
            <Step><StepLabel>Create an ad</StepLabel></Step>
          </Stepper>
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

  const renderCanvasView = () => (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-96 flex items-center justify-center">
      {renderComponent()}
    </div>
  );

  const renderDesignView = () => (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 min-h-96 flex items-center justify-center relative">
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-20">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="bg-blue-200 dark:bg-gray-700 h-4"></div>
        ))}
      </div>
      <div className="relative z-10">
        {renderComponent()}
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-muted">
        <div className="flex items-center space-x-4">
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setCurrentView('canvas')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                currentView === 'canvas'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Canvas
            </button>
            <button
              onClick={() => setCurrentView('design')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                currentView === 'design'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Design
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm text-muted-foreground">Viewport:</label>
            <select 
              value={selectedViewport}
              onChange={(e) => setSelectedViewport(e.target.value)}
              className="text-sm border border-muted rounded px-2 py-1"
            >
              <option value="mobile">Mobile</option>
              <option value="tablet">Tablet</option>
              <option value="desktop">Desktop</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentZoom(Math.max(0.5, currentZoom - 0.1))}
              className="p-1 text-muted-foreground hover:text-foreground"
            >
              <span className="material-icons text-sm">zoom_out</span>
            </button>
            <span className="text-sm text-muted-foreground min-w-12 text-center">
              {Math.round(currentZoom * 100)}%
            </span>
            <button
              onClick={() => setCurrentZoom(Math.min(2, currentZoom + 0.1))}
              className="p-1 text-muted-foreground hover:text-foreground"
            >
              <span className="material-icons text-sm">zoom_in</span>
            </button>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-muted-foreground hover:text-foreground"
          >
            <span className="material-icons text-sm">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 overflow-auto">
        <div 
          style={{ 
            transform: `scale(${currentZoom})`, 
            transformOrigin: 'top left',
            width: selectedViewport === 'mobile' ? '375px' : 
                   selectedViewport === 'tablet' ? '768px' : '100%',
            margin: '0 auto'
          }}
          className={isDark ? 'dark' : ''}
        >
          {currentView === 'canvas' ? renderCanvasView() : renderDesignView()}
        </div>
      </div>
    </div>
  );
}