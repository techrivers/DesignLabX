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
  Alert,
  CircularProgress,
  LinearProgress,
  Paper,
  Box,
  Pagination,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  Stepper,
  Step,
  StepLabel
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
    console.log('Rendering component:', component);
    
    // Test component to ensure visibility
    const TestComponent = () => (
      <div style={{ 
        padding: '20px', 
        background: '#f0f0f0', 
        border: '2px solid #333',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold'
      }}>
        TEST: {component} Component
      </div>
    );
    
    switch (component) {
      case "Button":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <TestComponent />
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <MuiButton variant="contained" color="primary" size="large">Primary</MuiButton>
              <MuiButton variant="outlined" color="primary" size="large">Outlined</MuiButton>
              <MuiButton variant="text" color="primary" size="large">Text</MuiButton>
            </div>
          </div>
        );
      case "TextField":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
            <TextField label="Standard" variant="standard" />
            <TextField label="Filled" variant="filled" />
            <TextField label="Outlined" variant="outlined" />
          </div>
        );
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
          </RadioGroup>
        );
      case "Switch":
        return <FormControlLabel control={<Switch defaultChecked />} label="Switch" />;
      case "Slider":
        return <Slider defaultValue={30} sx={{ width: 200 }} />;
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
            <span style={{ fontSize: '18px' }}>+</span>
          </Fab>
        );
      case "List":
        return (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemIcon>📧</ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem>
              <ListItemIcon>📄</ListItemIcon>
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
            <span style={{ fontSize: '24px' }}>📧</span>
          </Badge>
        );
      case "Typography":
        return <Typography variant="h4">Typography</Typography>;
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
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                  <th style={{ padding: '16px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '16px', borderBottom: '1px solid #eee' }}>Frozen yoghurt</td>
                  <td style={{ padding: '16px', borderBottom: '1px solid #eee' }}>159</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px', borderBottom: '1px solid #eee' }}>Ice cream</td>
                  <td style={{ padding: '16px', borderBottom: '1px solid #eee' }}>237</td>
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
          <div style={{ 
            padding: '32px', 
            border: '2px dashed #ccc', 
            borderRadius: '8px', 
            textAlign: 'center' 
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📦</div>
            <p style={{ color: '#666' }}>Component preview for {component} coming soon</p>
          </div>
        );
    }
  };

  const canvasBackground = isDark ? '#1a1a1a' : '#ffffff';
  const designBackground = isDark 
    ? 'linear-gradient(135deg, #374151 0%, #1f2937 100%)' 
    : 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)';

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '16px', 
        borderBottom: '1px solid #e0e0e0' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            display: 'flex', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px', 
            padding: '4px' 
          }}>
            <button
              onClick={() => setCurrentView('canvas')}
              style={{
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: currentView === 'canvas' ? '#ffffff' : 'transparent',
                color: currentView === 'canvas' ? '#000000' : '#666666',
                boxShadow: currentView === 'canvas' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              Canvas
            </button>
            <button
              onClick={() => setCurrentView('design')}
              style={{
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: currentView === 'design' ? '#ffffff' : 'transparent',
                color: currentView === 'design' ? '#000000' : '#666666',
                boxShadow: currentView === 'design' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              Design
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '14px', color: '#666' }}>Viewport:</label>
            <select 
              value={selectedViewport}
              onChange={(e) => setSelectedViewport(e.target.value)}
              style={{ fontSize: '14px', border: '1px solid #ddd', borderRadius: '4px', padding: '4px 8px' }}
            >
              <option value="mobile">Mobile</option>
              <option value="tablet">Tablet</option>
              <option value="desktop">Desktop</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setCurrentZoom(Math.max(0.5, currentZoom - 0.1))}
              style={{ 
                padding: '4px', 
                border: 'none', 
                background: 'none', 
                cursor: 'pointer', 
                fontSize: '16px' 
              }}
            >
              🔍-
            </button>
            <span style={{ fontSize: '14px', color: '#666', minWidth: '48px', textAlign: 'center' }}>
              {Math.round(currentZoom * 100)}%
            </span>
            <button
              onClick={() => setCurrentZoom(Math.min(2, currentZoom + 0.1))}
              style={{ 
                padding: '4px', 
                border: 'none', 
                background: 'none', 
                cursor: 'pointer', 
                fontSize: '16px' 
              }}
            >
              🔍+
            </button>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            style={{ 
              padding: '8px', 
              border: 'none', 
              background: 'none', 
              cursor: 'pointer', 
              fontSize: '16px' 
            }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Preview Content */}
      <div style={{ flex: 1, overflow: 'auto', backgroundColor: '#f5f5f5' }}>
        <div 
          style={{ 
            transform: `scale(${currentZoom})`, 
            transformOrigin: 'top center',
            width: selectedViewport === 'mobile' ? '375px' : 
                   selectedViewport === 'tablet' ? '768px' : '100%',
            minWidth: selectedViewport === 'desktop' ? '1200px' : undefined,
            margin: '0 auto'
          }}
        >
          <div style={{ 
            padding: '24px', 
            background: currentView === 'canvas' ? canvasBackground : designBackground,
            minHeight: '500px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            height: '100%'
          }}>
            {currentView === 'design' && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(0,0,0,0.1) 50px, rgba(0,0,0,0.1) 50px), repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(0,0,0,0.1) 50px, rgba(0,0,0,0.1) 50px)',
                opacity: 0.3
              }}
              />
            )}
            <div style={{ 
              position: 'relative', 
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '200px',
              minHeight: '100px'
            }}>
              {renderComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}