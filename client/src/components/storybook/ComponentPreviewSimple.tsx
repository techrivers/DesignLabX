import { useState } from 'react';
import { 
  Button as MuiButton, 
  TextField, 
  Card, 
  CardContent, 
  CardActions,
  Typography,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
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
  const [currentZoom, setCurrentZoom] = useState(zoom && zoom > 0 ? zoom / 100 : 1);
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState<'canvas' | 'design'>('canvas');

  const renderControlledComponent = () => {
    switch (component) {
      case "Button":
        return (
          <MuiButton 
            variant={controls.variant || "contained"}
            color={controls.color || "primary"}
            size={controls.size || "medium"}
            disabled={controls.disabled || false}
            fullWidth={controls.fullWidth || false}
            disableElevation={controls.disableElevation || false}
          >
            {controls.children || "Button"}
          </MuiButton>
        );
      case "TextField":
        return (
          <TextField 
            label={controls.label || "Text Field"}
            variant={controls.variant || "outlined"}
            size={controls.size || "medium"}
            disabled={controls.disabled || false}
            fullWidth={controls.fullWidth || false}
            error={controls.error || false}
            helperText={controls.helperText || ""}
            multiline={controls.multiline || false}
            rows={controls.rows || 1}
          />
        );
      case "Card":
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {controls.title || "Card Title"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {controls.content || "This is a sample card component with content."}
              </Typography>
            </CardContent>
          </Card>
        );
      case "Checkbox":
        return (
          <FormControlLabel
            control={
              <Checkbox 
                checked={controls.checked || false}
                disabled={controls.disabled || false}
                color={controls.color || "primary"}
                size={controls.size || "medium"}
              />
            }
            label={controls.label || "Checkbox"}
          />
        );
      default:
        return <div style={{ padding: '20px', color: '#666' }}>Select a component to preview</div>;
    }
  };

  const renderVariantShowcase = () => {
    switch (component) {
      case "Button":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Variants</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <MuiButton variant="contained" color="primary">Contained</MuiButton>
                <MuiButton variant="outlined" color="primary">Outlined</MuiButton>
                <MuiButton variant="text" color="primary">Text</MuiButton>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <MuiButton variant="contained" color="primary">Primary</MuiButton>
                <MuiButton variant="contained" color="secondary">Secondary</MuiButton>
                <MuiButton variant="contained" color="success">Success</MuiButton>
                <MuiButton variant="contained" color="error">Error</MuiButton>
                <MuiButton variant="contained" color="warning">Warning</MuiButton>
                <MuiButton variant="contained" color="info">Info</MuiButton>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <MuiButton variant="contained" size="small">Small</MuiButton>
                <MuiButton variant="contained" size="medium">Medium</MuiButton>
                <MuiButton variant="contained" size="large">Large</MuiButton>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>States</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <MuiButton variant="contained">Default</MuiButton>
                <MuiButton variant="contained" disabled>Disabled</MuiButton>
                <MuiButton variant="contained" fullWidth style={{ maxWidth: '200px' }}>Full Width</MuiButton>
              </div>
            </div>
          </div>
        );
      case "TextField":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Variants</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <TextField label="Standard" variant="standard" />
                <TextField label="Filled" variant="filled" />
                <TextField label="Outlined" variant="outlined" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <TextField label="Small" variant="outlined" size="small" />
                <TextField label="Medium" variant="outlined" size="medium" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>States</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <TextField label="Default" variant="outlined" />
                <TextField label="Disabled" variant="outlined" disabled />
                <TextField label="Error" variant="outlined" error helperText="Error message" />
                <TextField label="Multiline" variant="outlined" multiline rows={3} />
              </div>
            </div>
          </div>
        );
      case "Card":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Cards</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Simple Card
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Basic card with content only.
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 300 }} variant="outlined">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Outlined Card
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Card with outlined variant.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>With Actions</h3>
              <Card sx={{ maxWidth: 300 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Interactive Card
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Card with action buttons.
                  </Typography>
                </CardContent>
                <CardActions>
                  <MuiButton size="small">Share</MuiButton>
                  <MuiButton size="small">Learn More</MuiButton>
                </CardActions>
              </Card>
            </div>
          </div>
        );
      case "Checkbox":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic States</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <FormControlLabel control={<Checkbox />} label="Unchecked" />
                <FormControlLabel control={<Checkbox checked />} label="Checked" />
                <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <FormControlLabel control={<Checkbox checked color="primary" />} label="Primary" />
                <FormControlLabel control={<Checkbox checked color="secondary" />} label="Secondary" />
                <FormControlLabel control={<Checkbox checked color="success" />} label="Success" />
                <FormControlLabel control={<Checkbox checked color="error" />} label="Error" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes & States</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <FormControlLabel control={<Checkbox checked size="small" />} label="Small" />
                <FormControlLabel control={<Checkbox checked size="medium" />} label="Medium" />
                <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
                <FormControlLabel control={<Checkbox checked disabled />} label="Checked Disabled" />
              </div>
            </div>
          </div>
        );
      case "Select":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Variants</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '200px' }}>
                <FormControl fullWidth>
                  <InputLabel>Standard</InputLabel>
                  <Select value="option1" label="Standard">
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>Outlined</InputLabel>
                  <Select value="option1" label="Outlined">
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="filled" fullWidth>
                  <InputLabel>Filled</InputLabel>
                  <Select value="option1" label="Filled">
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes & States</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '200px' }}>
                <FormControl size="small" fullWidth>
                  <InputLabel>Small</InputLabel>
                  <Select value="option1" label="Small">
                    <MenuItem value="option1">Small Option</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth disabled>
                  <InputLabel>Disabled</InputLabel>
                  <Select value="option1" label="Disabled">
                    <MenuItem value="option1">Disabled Option</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth error>
                  <InputLabel>Error</InputLabel>
                  <Select value="option1" label="Error">
                    <MenuItem value="option1">Error Option</MenuItem>
                  </Select>
                  <FormHelperText>Error message</FormHelperText>
                </FormControl>
              </div>
            </div>
          </div>
        );
      case "Radio":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Radio Group</h3>
              <RadioGroup defaultValue="option1">
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
              </RadioGroup>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <FormControlLabel control={<Radio checked color="primary" />} label="Primary" />
                <FormControlLabel control={<Radio checked color="secondary" />} label="Secondary" />
                <FormControlLabel control={<Radio checked color="success" />} label="Success" />
                <FormControlLabel control={<Radio checked color="error" />} label="Error" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes & States</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <FormControlLabel control={<Radio checked size="small" />} label="Small" />
                <FormControlLabel control={<Radio checked size="medium" />} label="Medium" />
                <FormControlLabel control={<Radio disabled />} label="Disabled" />
                <FormControlLabel control={<Radio checked disabled />} label="Checked Disabled" />
              </div>
            </div>
          </div>
        );
      case "Switch":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Switches</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <FormControlLabel control={<Switch />} label="Off" />
                <FormControlLabel control={<Switch checked />} label="On" />
                <FormControlLabel control={<Switch defaultChecked />} label="Default Checked" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <FormControlLabel control={<Switch checked color="primary" />} label="Primary" />
                <FormControlLabel control={<Switch checked color="secondary" />} label="Secondary" />
                <FormControlLabel control={<Switch checked color="success" />} label="Success" />
                <FormControlLabel control={<Switch checked color="error" />} label="Error" />
                <FormControlLabel control={<Switch checked color="warning" />} label="Warning" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes & States</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <FormControlLabel control={<Switch checked size="small" />} label="Small" />
                <FormControlLabel control={<Switch checked size="medium" />} label="Medium" />
                <FormControlLabel control={<Switch disabled />} label="Disabled" />
                <FormControlLabel control={<Switch checked disabled />} label="Checked Disabled" />
              </div>
            </div>
          </div>
        );
      case "Slider":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Sliders</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <Slider defaultValue={30} />
                <Slider defaultValue={[20, 37]} />
                <Slider defaultValue={50} disabled />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <Slider defaultValue={30} color="primary" />
                <Slider defaultValue={30} color="secondary" />
                <Slider defaultValue={30} color="success" />
                <Slider defaultValue={30} color="error" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>With Marks</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <Slider defaultValue={30} step={10} marks min={0} max={100} />
                <Slider defaultValue={[20, 37]} marks={[
                  { value: 0, label: '0°C' },
                  { value: 20, label: '20°C' },
                  { value: 37, label: '37°C' },
                  { value: 100, label: '100°C' }
                ]} />
              </div>
            </div>
          </div>
        );
      case "Rating":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Rating</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Rating value={4} />
                <Rating value={2.5} precision={0.5} />
                <Rating value={3} readOnly />
                <Rating value={4} disabled />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Rating value={4} size="small" />
                <Rating value={4} size="medium" />
                <Rating value={4} size="large" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Customization</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Rating value={4} max={10} />
                <Rating value={4} precision={0.5} />
                <Rating value={null} />
              </div>
            </div>
          </div>
        );
      case "Autocomplete":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Autocomplete</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <Autocomplete
                  options={['Option 1', 'Option 2', 'Option 3']}
                  renderInput={(params) => <TextField {...params} label="Basic" />}
                />
                <Autocomplete
                  multiple
                  options={['Option 1', 'Option 2', 'Option 3']}
                  renderInput={(params) => <TextField {...params} label="Multiple" />}
                />
                <Autocomplete
                  freeSolo
                  options={['Option 1', 'Option 2', 'Option 3']}
                  renderInput={(params) => <TextField {...params} label="Free Solo" />}
                />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes & States</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <Autocomplete
                  size="small"
                  options={['Small Option 1', 'Small Option 2']}
                  renderInput={(params) => <TextField {...params} label="Small" />}
                />
                <Autocomplete
                  disabled
                  options={['Disabled Option 1', 'Disabled Option 2']}
                  renderInput={(params) => <TextField {...params} label="Disabled" />}
                />
                <Autocomplete
                  loading
                  options={['Loading Option 1', 'Loading Option 2']}
                  renderInput={(params) => <TextField {...params} label="Loading" />}
                />
              </div>
            </div>
          </div>
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
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px' }}>
                {/* Main controlled component */}
                <div style={{ 
                  padding: '32px', 
                  border: '2px solid #e0e0e0', 
                  borderRadius: '12px', 
                  backgroundColor: 'white',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '120px',
                  width: '100%'
                }}>
                  {renderControlledComponent()}
                </div>
                
                {/* Variant showcase */}
                <div style={{ width: '100%' }}>
                  {renderVariantShowcase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}