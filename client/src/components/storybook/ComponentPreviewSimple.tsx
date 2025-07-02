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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Drawer,
  Tooltip,
  BottomNavigation,
  BottomNavigationAction,
  Menu,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Skeleton,
  Backdrop,
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
  StepLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon2 from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';

interface ComponentControls {
  [key: string]: any;
}

interface ComponentPreviewProps {
  component: string;
  story: string;
  controls: ComponentControls;
  viewport: string;
  zoom: number;
}

export function ComponentPreview({ component, story, controls, viewport, zoom }: ComponentPreviewProps) {
  const [selectedViewport, setSelectedViewport] = useState(viewport || 'desktop');
  const [currentZoom, setCurrentZoom] = useState(zoom && zoom > 0 ? zoom / 100 : 1);
  const [tabValue, setTabValue] = useState(controls.value || 0);
  const [isDark, setIsDark] = useState(false);
  const [currentView, setCurrentView] = useState<'canvas' | 'design'>('canvas');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
            variant={controls.variant === "contained" ? "outlined" : (controls.variant || "outlined")}
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
          <Card 
            variant={controls.variant || "elevation"}
            elevation={controls.elevation || 1}
            raised={controls.raised || false}
            sx={{ maxWidth: 345 }}
          >
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

      case "Alert":
        return (
          <Alert 
            severity={controls.severity || "info"}
            variant={controls.variant || "standard"}
            onClose={controls.onClose ? () => {} : undefined}
            icon={controls.icon || undefined}
          >
            {controls.message || "This is an alert message"}
          </Alert>
        );

      case "Chip":
        return (
          <Chip 
            label={controls.label || "Chip"}
            variant={controls.variant || "filled"}
            color={controls.color || "default"}
            size={controls.size || "medium"}
            clickable={controls.clickable || false}
            onDelete={controls.deletable ? () => {} : undefined}
            disabled={controls.disabled || false}
            icon={controls.icon ? <NotificationsIcon /> : undefined}
          />
        );

      case "Avatar":
        return (
          <Avatar 
            variant={controls.variant || "circular"}
            sx={{ 
              width: controls.size === "small" ? 32 : controls.size === "large" ? 56 : 40,
              height: controls.size === "small" ? 32 : controls.size === "large" ? 56 : 40
            }}
          >
            {controls.text || "JD"}
          </Avatar>
        );

      case "Badge":
        return (
          <Badge 
            badgeContent={controls.badgeContent || "4"}
            color={controls.color || "default"}
            variant={controls.variant || "standard"}
            max={controls.max || 99}
            invisible={controls.invisible || false}
            showZero={controls.showZero || false}
          >
            <NotificationsIcon />
          </Badge>
        );

      case "Progress":
        return (
          <LinearProgress 
            variant={controls.variant || "determinate"}
            value={controls.value || 50}
            color={controls.color || "primary"}
            sx={{ width: '100%', minWidth: 200 }}
          />
        );

      case "Tabs":
        return (
          <Box sx={{ width: '100%' }}>
            <Tabs 
              value={tabValue}
              onChange={(event, newValue) => setTabValue(newValue)}
              orientation={controls.orientation || "horizontal"}
              variant={controls.variant || "standard"}
              centered={controls.centered || false}
              scrollButtons={controls.scrollButtons || false}
            >
              <Tab label="Tab 1" />
              <Tab label="Tab 2" />
              <Tab label="Tab 3" />
            </Tabs>
            <Box sx={{ p: 2 }}>
              <Typography>Content for Tab {tabValue + 1}</Typography>
            </Box>
          </Box>
        );

      case "Drawer":
        return (
          <Box>
            <MuiButton 
              variant="contained" 
              onClick={() => {}}
            >
              {controls.buttonText || "Open Drawer"}
            </MuiButton>
            <Drawer
              anchor={controls.anchor || "left"}
              open={controls.open || false}
              variant={controls.variant || "temporary"}
              onClose={() => {}}
            >
              <Box
                sx={{ width: controls.width || 250 }}
                role="presentation"
              >
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
        );

      case "Accordion":
        return (
          <Accordion 
            expanded={controls.expanded || false}
            disabled={controls.disabled || false}
            variant={controls.variant || "elevation"}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{controls.summary || "Accordion Summary"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {controls.details || "Accordion details content goes here."}
              </Typography>
            </AccordionDetails>
          </Accordion>
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
      case "Select":
        return (
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Select</InputLabel>
            <Select value={controls.value || "option1"} label="Select">
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>
        );
      case "Radio":
        return (
          <RadioGroup value={controls.value || "option1"}>
            <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
            <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          </RadioGroup>
        );
      case "Switch":
        return (
          <FormControlLabel 
            control={
              <Switch 
                checked={controls.checked || false}
                color={controls.color || "primary"}
                size={controls.size || "medium"}
              />
            } 
            label={controls.label || "Switch"} 
          />
        );
      case "Slider":
        return (
          <Slider 
            defaultValue={controls.value || 30} 
            min={controls.min || 0}
            max={controls.max || 100}
            step={controls.step || 1}
            disabled={controls.disabled || false}
            color={controls.color || "primary"}
            sx={{ width: 200 }} 
          />
        );
      case "Rating":
        return (
          <Rating 
            value={controls.value || 4} 
            max={controls.max || 5}
            precision={controls.precision || 1}
            size={controls.size || "medium"}
            readOnly={controls.readOnly || false}
            disabled={controls.disabled || false}
          />
        );
      case "Autocomplete":
        return (
          <Autocomplete
            options={['Option 1', 'Option 2', 'Option 3']}
            sx={{ width: 300 }}
            multiple={controls.multiple || false}
            freeSolo={controls.freeSolo || false}
            disabled={controls.disabled || false}
            size={controls.size || "medium"}
            renderInput={(params) => <TextField {...params} label={controls.label || "Autocomplete"} />}
          />
        );

      case "ToggleButton":
        return (
          <ToggleButton
            value={controls.value || "value"}
            selected={controls.selected || false}
            color={controls.color || "primary"}
            size={controls.size || "medium"}
            disabled={controls.disabled || false}
            onChange={() => {}}
          >
            {controls.label || "Toggle"}
          </ToggleButton>
        );

      case "ButtonGroup":
        return (
          <ButtonGroup
            variant={controls.variant || "contained"}
            color={controls.color || "primary"}
            size={controls.size || "medium"}
            orientation={controls.orientation || "horizontal"}
            disabled={controls.disabled || false}
          >
            <MuiButton>One</MuiButton>
            <MuiButton>Two</MuiButton>
            <MuiButton>Three</MuiButton>
          </ButtonGroup>
        );

      case "Fab":
        return (
          <Fab
            color={controls.color || "primary"}
            size={controls.size || "medium"}
            variant={controls.variant || "circular"}
            disabled={controls.disabled || false}
          >
            <SendIcon />
          </Fab>
        );

      case "Tooltip":
        return (
          <Tooltip title={controls.title || "Tooltip text"} placement={controls.placement || "top"}>
            <MuiButton variant="contained">
              {controls.buttonText || "Hover me"}
            </MuiButton>
          </Tooltip>
        );

      case "BottomNavigation":
        return (
          <BottomNavigation
            value={controls.value || 0}
            onChange={() => {}}
            showLabels={controls.showLabels !== false}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        );

      case "Menu":
        const open = Boolean(anchorEl);
        
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget);
        };
        
        const handleClose = () => {
          setAnchorEl(null);
        };
        
        return (
          <div>
            <MuiButton 
              variant="contained"
              onClick={handleClick}
            >
              {controls.buttonText || "Open Menu"}
            </MuiButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        );

      case "Pagination":
        return (
          <Pagination
            count={controls.count || 10}
            page={controls.page || 1}
            color={controls.color || "primary"}
            size={controls.size || "medium"}
            variant={controls.variant || "text"}
            disabled={controls.disabled || false}
            showFirstButton={controls.showFirstButton || false}
            showLastButton={controls.showLastButton || false}
            onChange={() => {}}
          />
        );

      case "SpeedDial":
        return (
          <SpeedDial
            ariaLabel="SpeedDial"
            icon={<SpeedDialIcon />}
            open={controls.open || false}
            direction={controls.direction || "up"}
          >
            <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
          </SpeedDial>
        );

      case "Typography":
        return (
          <Typography
            variant={controls.variant || "body1"}
            color={controls.color || "inherit"}
            align={controls.align || "inherit"}
            gutterBottom={controls.gutterBottom || false}
            noWrap={controls.noWrap || false}
          >
            {controls.children || "Typography text content"}
          </Typography>
        );

      case "Breadcrumbs":
        return (
          <Breadcrumbs
            separator={controls.separator || "/"}
            maxItems={controls.maxItems || 8}
            itemsAfterCollapse={controls.itemsAfterCollapse || 1}
            itemsBeforeCollapse={controls.itemsBeforeCollapse || 1}
          >
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="/category">
              Category
            </Link>
            <Typography color="textPrimary">Current Page</Typography>
          </Breadcrumbs>
        );

      case "Stepper":
        return (
          <Stepper activeStep={controls.activeStep || 1} orientation={controls.orientation || "horizontal"}>
            <Step>
              <StepLabel>Select campaign settings</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create an ad group</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create an ad</StepLabel>
            </Step>
          </Stepper>
        );

      case "List":
        return (
          <List
            dense={controls.dense || false}
            disablePadding={controls.disablePadding || false}
          >
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        );

      case "Table":
        const tableData = [
          { name: 'John Doe', age: 30, city: 'New York' },
          { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
          { name: 'Bob Johnson', age: 35, city: 'Chicago' }
        ];

        return (
          <TableContainer component={Paper}>
            <Table
              size={controls.size || "medium"}
              stickyHeader={controls.stickyHeader || false}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">City</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );

      case "AppBar":
        return (
          <AppBar
            position={controls.position || "static"}
            color={controls.color || "primary"}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {controls.title || "App Bar Title"}
              </Typography>
              <MuiButton color="inherit">Login</MuiButton>
            </Toolbar>
          </AppBar>
        );

      case "Drawer":
        return (
          <Box sx={{ display: 'flex', width: '100%', height: 240 }}>
            <Drawer
              variant={controls.variant || "temporary"}
              anchor={controls.anchor || "left"}
              open={controls.open || true}
              sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: 240,
                  boxSizing: 'border-box',
                },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: 'auto' }}>
                <List>
                  {['Home', 'About', 'Contact'].map((text, index) => (
                    <ListItem key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Typography>
                Main content area with drawer navigation.
              </Typography>
            </Box>
          </Box>
        );

      default:
        return (
          <div style={{ 
            padding: '40px 20px', 
            textAlign: 'center',
            color: '#666',
            border: '2px dashed #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#fafafa'
          }}>
            <Typography variant="h6" gutterBottom>
              Controls Coming Soon
            </Typography>
            <Typography variant="body2">
              Interactive controls for this component will be available in the next update.
            </Typography>
          </div>
        );
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

      case "ToggleButton":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Toggle Buttons</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <ToggleButton value="left" selected={false}>Left</ToggleButton>
                <ToggleButton value="center" selected={true}>Center</ToggleButton>
                <ToggleButton value="right" selected={false}>Right</ToggleButton>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <ToggleButton value="standard" selected={true} color="standard">Standard</ToggleButton>
                <ToggleButton value="primary" selected={true} color="primary">Primary</ToggleButton>
                <ToggleButton value="secondary" selected={true} color="secondary">Secondary</ToggleButton>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes & States</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <ToggleButton value="small" size="small" selected={true}>Small</ToggleButton>
                <ToggleButton value="medium" size="medium" selected={true}>Medium</ToggleButton>
                <ToggleButton value="large" size="large" selected={true}>Large</ToggleButton>
                <ToggleButton value="disabled" disabled>Disabled</ToggleButton>
              </div>
            </div>
          </div>
        );

      case "ButtonGroup":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Button Groups</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <ButtonGroup variant="contained">
                  <MuiButton>One</MuiButton>
                  <MuiButton>Two</MuiButton>
                  <MuiButton>Three</MuiButton>
                </ButtonGroup>
                <ButtonGroup variant="outlined">
                  <MuiButton>One</MuiButton>
                  <MuiButton>Two</MuiButton>
                  <MuiButton>Three</MuiButton>
                </ButtonGroup>
                <ButtonGroup variant="text">
                  <MuiButton>One</MuiButton>
                  <MuiButton>Two</MuiButton>
                  <MuiButton>Three</MuiButton>
                </ButtonGroup>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <ButtonGroup variant="contained" color="primary">
                  <MuiButton>Primary</MuiButton>
                  <MuiButton>Group</MuiButton>
                </ButtonGroup>
                <ButtonGroup variant="contained" color="secondary">
                  <MuiButton>Secondary</MuiButton>
                  <MuiButton>Group</MuiButton>
                </ButtonGroup>
                <ButtonGroup variant="contained" color="success">
                  <MuiButton>Success</MuiButton>
                  <MuiButton>Group</MuiButton>
                </ButtonGroup>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Orientations & Sizes</h3>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Vertical</p>
                  <ButtonGroup orientation="vertical" variant="outlined">
                    <MuiButton>Top</MuiButton>
                    <MuiButton>Middle</MuiButton>
                    <MuiButton>Bottom</MuiButton>
                  </ButtonGroup>
                </div>
                <div>
                  <p style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Small Size</p>
                  <ButtonGroup size="small" variant="contained">
                    <MuiButton>Small</MuiButton>
                    <MuiButton>Group</MuiButton>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        );

      case "Fab":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic FABs</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Fab color="primary"><SendIcon /></Fab>
                <Fab color="secondary"><EditIcon /></Fab>
                <Fab disabled><FavoriteIcon /></Fab>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Fab color="default"><SendIcon /></Fab>
                <Fab color="primary"><SendIcon /></Fab>
                <Fab color="secondary"><SendIcon /></Fab>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes & Variants</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Fab size="small" color="primary"><SendIcon /></Fab>
                <Fab size="medium" color="primary"><SendIcon /></Fab>
                <Fab size="large" color="primary"><SendIcon /></Fab>
                <Fab variant="extended" color="primary">
                  <SendIcon sx={{ mr: 1 }} />Extended
                </Fab>
              </div>
            </div>
          </div>
        );

      case "Tooltip":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Tooltips</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Tooltip title="Delete" placement="top">
                  <MuiButton variant="contained">Top</MuiButton>
                </Tooltip>
                <Tooltip title="Add" placement="bottom">
                  <MuiButton variant="contained">Bottom</MuiButton>
                </Tooltip>
                <Tooltip title="Settings" placement="left">
                  <MuiButton variant="contained">Left</MuiButton>
                </Tooltip>
                <Tooltip title="Help" placement="right">
                  <MuiButton variant="contained">Right</MuiButton>
                </Tooltip>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Placements</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Tooltip title="Top Start" placement="top-start">
                  <MuiButton variant="outlined">Top Start</MuiButton>
                </Tooltip>
                <Tooltip title="Top End" placement="top-end">
                  <MuiButton variant="outlined">Top End</MuiButton>
                </Tooltip>
                <Tooltip title="Bottom Start" placement="bottom-start">
                  <MuiButton variant="outlined">Bottom Start</MuiButton>
                </Tooltip>
                <Tooltip title="Bottom End" placement="bottom-end">
                  <MuiButton variant="outlined">Bottom End</MuiButton>
                </Tooltip>
              </div>
            </div>
          </div>
        );

      case "Typography":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Headings</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="h1">h1. Heading</Typography>
                <Typography variant="h2">h2. Heading</Typography>
                <Typography variant="h3">h3. Heading</Typography>
                <Typography variant="h4">h4. Heading</Typography>
                <Typography variant="h5">h5. Heading</Typography>
                <Typography variant="h6">h6. Heading</Typography>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Body Text</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography variant="body1">body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                <Typography variant="body2">body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet.</Typography>
                <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet.</Typography>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors & Variants</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Typography color="primary">Primary color text</Typography>
                <Typography color="secondary">Secondary color text</Typography>
                <Typography color="textPrimary">Text primary color</Typography>
                <Typography color="textSecondary">Text secondary color</Typography>
                <Typography color="error">Error color text</Typography>
                <Typography variant="caption">Caption text</Typography>
                <Typography variant="overline">OVERLINE TEXT</Typography>
              </div>
            </div>
          </div>
        );

      case "Accordion":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Accordions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Disabled Accordion</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        );

      case "BottomNavigation":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Bottom Navigation</h3>
              <BottomNavigation value={0} showLabels>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
              </BottomNavigation>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Without Labels</h3>
              <BottomNavigation value={1} showLabels={false}>
                <BottomNavigationAction icon={<RestoreIcon />} />
                <BottomNavigationAction icon={<FavoriteIcon />} />
                <BottomNavigationAction icon={<LocationOnIcon />} />
              </BottomNavigation>
            </div>
          </div>
        );

      case "Menu":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Menu</h3>
              <div style={{ position: 'relative' }}>
                <MuiButton variant="contained">Open Menu</MuiButton>
                <Menu open={true} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        );

      case "Pagination":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Pagination</h3>
              <Pagination count={10} />
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors & Variants</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
                <Pagination count={10} variant="outlined" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Pagination count={10} size="small" />
                <Pagination count={10} size="medium" />
                <Pagination count={10} size="large" />
              </div>
            </div>
          </div>
        );

      case "SpeedDial":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Speed Dial</h3>
              <div style={{ position: 'relative', height: '200px' }}>
                <SpeedDial ariaLabel="SpeedDial" open={true} icon={<SpeedDialIcon />}>
                  <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
                  <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
                  <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
                </SpeedDial>
              </div>
            </div>
          </div>
        );

      case "Breadcrumbs":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Breadcrumbs</h3>
              <Breadcrumbs>
                <Link color="inherit" href="/">Home</Link>
                <Link color="inherit" href="/category">Category</Link>
                <Typography color="textPrimary">Current Page</Typography>
              </Breadcrumbs>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Custom Separator</h3>
              <Breadcrumbs separator="›">
                <Link color="inherit" href="/">Home</Link>
                <Link color="inherit" href="/category">Category</Link>
                <Typography color="textPrimary">Current Page</Typography>
              </Breadcrumbs>
            </div>
          </div>
        );

      case "Stepper":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Horizontal Stepper</h3>
              <Stepper activeStep={1}>
                <Step><StepLabel>Select campaign settings</StepLabel></Step>
                <Step><StepLabel>Create an ad group</StepLabel></Step>
                <Step><StepLabel>Create an ad</StepLabel></Step>
              </Stepper>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Vertical Stepper</h3>
              <Stepper activeStep={0} orientation="vertical">
                <Step><StepLabel>Step 1</StepLabel></Step>
                <Step><StepLabel>Step 2</StepLabel></Step>
                <Step><StepLabel>Step 3</StepLabel></Step>
              </Stepper>
            </div>
          </div>
        );

      case "Drawer":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Drawer Example</h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                <MuiButton variant="contained">Open Left Drawer</MuiButton>
                <MuiButton variant="outlined">Open Right Drawer</MuiButton>
              </div>
              <p style={{ marginTop: '12px', fontSize: '14px', color: '#666' }}>
                Drawer content would typically contain navigation items, user info, or other sidebar content.
              </p>
            </div>
          </div>
        );

      case "Alert":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Interactive Alert</h3>
              <Alert 
                severity={controls.severity || "info"}
                variant={controls.variant || "standard"}
                icon={controls.icon !== false}
                onClose={controls.onClose ? () => {} : undefined}
              >
                {controls.message || "This is an alert message"}
              </Alert>
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Severity Types</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Alert severity="error">This is an error alert</Alert>
                <Alert severity="warning">This is a warning alert</Alert>
                <Alert severity="info">This is an info alert</Alert>
                <Alert severity="success">This is a success alert</Alert>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Variants</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Alert severity="info" variant="standard">Standard variant</Alert>
                <Alert severity="info" variant="filled">Filled variant</Alert>
                <Alert severity="info" variant="outlined">Outlined variant</Alert>
              </div>
            </div>
          </div>
        );

      case "Dialog":
        const [anchorOrigin, setAnchorOrigin] = useState({ vertical: 'bottom', horizontal: 'left' });
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Interactive Dialog</h3>
              <MuiButton variant="contained" onClick={() => {}}>
                Open Dialog
              </MuiButton>
              <Dialog
                open={controls.open || false}
                onClose={() => {}}
                maxWidth={controls.maxWidth || "sm"}
                fullWidth={controls.fullWidth || false}
                fullScreen={controls.fullScreen || false}
              >
                <DialogTitle>{controls.title || "Dialog Title"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {controls.content || "This is the dialog content. You can put any text here."}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <MuiButton onClick={() => {}}>Cancel</MuiButton>
                  <MuiButton variant="contained" onClick={() => {}}>Confirm</MuiButton>
                </DialogActions>
              </Dialog>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Dialog Sizes</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <MuiButton variant="outlined" size="small">XS Dialog</MuiButton>
                <MuiButton variant="outlined" size="small">SM Dialog</MuiButton>
                <MuiButton variant="outlined" size="small">MD Dialog</MuiButton>
                <MuiButton variant="outlined" size="small">LG Dialog</MuiButton>
                <MuiButton variant="outlined" size="small">XL Dialog</MuiButton>
              </div>
            </div>
          </div>
        );

      case "Snackbar":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Interactive Snackbar</h3>
              <MuiButton variant="contained" onClick={() => {}}>
                Show Snackbar
              </MuiButton>
              <Snackbar
                open={controls.open || false}
                autoHideDuration={controls.autoHideDuration || 6000}
                onClose={() => {}}
                message={controls.message || "This is a snackbar message"}
                anchorOrigin={{
                  vertical: controls.anchorOrigin?.includes('top') ? 'top' : 'bottom',
                  horizontal: controls.anchorOrigin?.includes('center') ? 'center' : 
                            controls.anchorOrigin?.includes('right') ? 'right' : 'left'
                }}
                action={controls.action ? (
                  <MuiButton color="secondary" size="small" onClick={() => {}}>
                    UNDO
                  </MuiButton>
                ) : undefined}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Position Examples</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <MuiButton variant="outlined" size="small">Top Left</MuiButton>
                <MuiButton variant="outlined" size="small">Top Center</MuiButton>
                <MuiButton variant="outlined" size="small">Top Right</MuiButton>
                <MuiButton variant="outlined" size="small">Bottom Left</MuiButton>
                <MuiButton variant="outlined" size="small">Bottom Center</MuiButton>
                <MuiButton variant="outlined" size="small">Bottom Right</MuiButton>
              </div>
            </div>
          </div>
        );

      case "CircularProgress":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Interactive Circular Progress</h3>
              <CircularProgress
                variant={controls.variant || "indeterminate"}
                value={controls.variant === "determinate" ? (controls.value || 25) : undefined}
                size={controls.size || 40}
                thickness={controls.thickness || 3.6}
                color={controls.color || "primary"}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <CircularProgress color="primary" />
                <CircularProgress color="secondary" />
                <CircularProgress color="error" />
                <CircularProgress color="warning" />
                <CircularProgress color="info" />
                <CircularProgress color="success" />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <CircularProgress size={20} />
                <CircularProgress size={40} />
                <CircularProgress size={60} />
                <CircularProgress size={80} />
              </div>
            </div>
          </div>
        );

      case "LinearProgress":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Interactive Linear Progress</h3>
              <div style={{ width: '100%' }}>
                <LinearProgress
                  variant={controls.variant || "indeterminate"}
                  value={controls.variant === "determinate" ? (controls.value || 50) : undefined}
                  valueBuffer={controls.variant === "buffer" ? (controls.valueBuffer || 75) : undefined}
                  color={controls.color || "primary"}
                />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Variants</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <Typography variant="body2" gutterBottom>Indeterminate</Typography>
                  <LinearProgress />
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>Determinate (50%)</Typography>
                  <LinearProgress variant="determinate" value={50} />
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>Buffer (50% / 75%)</Typography>
                  <LinearProgress variant="buffer" value={50} valueBuffer={75} />
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>Query</Typography>
                  <LinearProgress variant="query" />
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <LinearProgress color="primary" />
                <LinearProgress color="secondary" />
                <LinearProgress color="error" />
                <LinearProgress color="warning" />
                <LinearProgress color="info" />
                <LinearProgress color="success" />
              </div>
            </div>
          </div>
        );

      case "Skeleton":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Interactive Skeleton</h3>
              <Skeleton
                variant={controls.variant || "text"}
                width={controls.width || 210}
                height={controls.height || 60}
                animation={controls.animation === "false" ? false : controls.animation || "pulse"}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Variants</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <Typography variant="body2" gutterBottom>Text</Typography>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>Circular</Typography>
                  <Skeleton variant="circular" width={40} height={40} />
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>Rectangular</Typography>
                  <Skeleton variant="rectangular" width={210} height={60} />
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>Rounded</Typography>
                  <Skeleton variant="rounded" width={210} height={60} />
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Animations</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <Typography variant="body2" gutterBottom>Pulse (default)</Typography>
                  <Skeleton animation="pulse" />
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>Wave</Typography>
                  <Skeleton animation="wave" />
                </div>
                <div>
                  <Typography variant="body2" gutterBottom>No animation</Typography>
                  <Skeleton animation={false} />
                </div>
              </div>
            </div>
          </div>
        );

      case "Backdrop":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Interactive Backdrop</h3>
              <MuiButton variant="contained" onClick={() => {}}>
                Show Backdrop
              </MuiButton>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={controls.open || false}
                onClick={() => {}}
                invisible={controls.invisible || false}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Usage Examples</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <MuiButton variant="outlined" size="small">Loading Backdrop</MuiButton>
                <MuiButton variant="outlined" size="small">Invisible Backdrop</MuiButton>
                <MuiButton variant="outlined" size="small">Custom Content</MuiButton>
              </div>
              <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                Backdrop is used to display loading states or block user interaction
              </Typography>
            </div>
          </div>
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