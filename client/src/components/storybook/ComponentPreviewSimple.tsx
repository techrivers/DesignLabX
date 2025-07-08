import { useState, useEffect } from 'react';
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
  Grid,
  Container,
  Box,
  Stack,
  Divider,
  ImageList,
  ImageListItem,
  ClickAwayListener,
  Portal,
  TextareaAutosize,
  Popper,
  Grow,
  Fade,
  Slide,
  Zoom,
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
  AccordionDetails,
  AvatarGroup
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
  const [popperAnchor, setPopperAnchor] = useState<null | HTMLElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(controls.multiple ? [] : "");
  
  // Additional state variables for interactive components
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [ratingValue, setRatingValue] = useState(4);
  const [autocompleteValue, setAutocompleteValue] = useState(null);
  const [toggleValue, setToggleValue] = useState('');
  const [buttonGroupValue, setButtonGroupValue] = useState('left');
  const [textFieldValue, setTextFieldValue] = useState('');
  const [chipData, setChipData] = useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' }
  ]);
  const [progressValue, setProgressValue] = useState(75);
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const [stepperActiveStep, setStepperActiveStep] = useState(0);
  // TreeView state
  const [expandedItems, setExpandedItems] = useState<string[]>(['applications']);

  // Update select value when controls change
  useEffect(() => {
    if (controls.multiple && !Array.isArray(selectValue)) {
      setSelectValue([]);
    } else if (!controls.multiple && Array.isArray(selectValue)) {
      setSelectValue("");
    }
  }, [controls.multiple]);

  const popperOpen = Boolean(popperAnchor);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

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
            value={textFieldValue}
            onChange={(event) => setTextFieldValue(event.target.value)}
            label={controls.label || "Text Field"}
            variant={controls.variant === "contained" ? "outlined" : (controls.variant || "outlined")}
            size={controls.size || "medium"}
            disabled={controls.disabled || false}
            fullWidth={controls.fullWidth || false}
            error={controls.error || false}
            helperText={controls.helperText || ""}
            multiline={controls.multiline || false}
            rows={controls.rows || 1}
            placeholder={controls.placeholder || "Enter text..."}
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
        if (story === "Basic") {
          return (
            <Avatar>
              {controls.text || "JD"}
            </Avatar>
          );
        } else if (story === "WithImage") {
          return (
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Avatar>H</Avatar>
              <Avatar><PersonIcon /></Avatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
            </div>
          );
        } else if (story === "Group") {
          return (
            <AvatarGroup max={4}>
              <Avatar alt="User 1" sx={{ bgcolor: 'primary.main' }}>R</Avatar>
              <Avatar alt="User 2" sx={{ bgcolor: 'secondary.main' }}>T</Avatar>
              <Avatar alt="User 3" sx={{ bgcolor: 'success.main' }}>C</Avatar>
              <Avatar alt="User 4" sx={{ bgcolor: 'warning.main' }}>A</Avatar>
              <Avatar alt="User 5" sx={{ bgcolor: 'info.main' }}>T</Avatar>
            </AvatarGroup>
          );
        } else if (story === "SizeVariants") {
          return (
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Avatar sx={{ width: 24, height: 24, fontSize: '12px' }}>S</Avatar>
              <Avatar sx={{ width: 32, height: 32, fontSize: '14px' }}>M</Avatar>
              <Avatar sx={{ width: 40, height: 40 }}>D</Avatar>
              <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
            </div>
          );
        } else if (story === "VariantStyles") {
          return (
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Avatar variant="circular">C</Avatar>
              <Avatar variant="rounded">R</Avatar>
              <Avatar variant="square">S</Avatar>
            </div>
          );
        } else {
          return (
            <Avatar 
              variant={controls.variant || "circular"}
              sx={{ 
                width: controls.size === "small" ? 32 : controls.size === "large" ? 56 : 40,
                height: controls.size === "small" ? 32 : controls.size === "large" ? 56 : 40,
                bgcolor: controls.color === "primary" ? "primary.main" : 
                         controls.color === "secondary" ? "secondary.main" : 
                         controls.color === "success" ? "success.main" : 
                         controls.color === "error" ? "error.main" : "grey.500"
              }}
            >
              {controls.text || "JD"}
            </Avatar>
          );
        }

      case "Badge":
        if (story === "Basic") {
          return (
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          );
        } else if (story === "Dot") {
          return (
            <Badge variant="dot" color="error">
              <MailIcon />
            </Badge>
          );
        } else if (story === "Custom") {
          return (
            <Badge badgeContent={100} color="secondary">
              <MailIcon />
            </Badge>
          );
        } else if (story === "ColorVariants") {
          return (
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Badge badgeContent={4} color="primary"><MailIcon /></Badge>
              <Badge badgeContent={4} color="secondary"><MailIcon /></Badge>
              <Badge badgeContent={4} color="success"><MailIcon /></Badge>
              <Badge badgeContent={4} color="error"><MailIcon /></Badge>
            </div>
          );
        } else if (story === "WithAvatar") {
          return (
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Badge badgeContent={4} color="primary">
                <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
              </Badge>
              <Badge variant="dot" color="error">
                <Avatar sx={{ bgcolor: 'secondary.main' }}>JS</Avatar>
              </Badge>
            </div>
          );
        } else {
          return (
            <Badge 
              badgeContent={controls.badgeContent || 4}
              color={controls.color || "primary"}
              variant={controls.variant || "standard"}
              invisible={controls.invisible || false}
            >
              {controls.children === "avatar" ? (
                <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
              ) : (
                <MailIcon />
              )}
            </Badge>
          );
        }

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
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              {drawerOpen ? "Close Drawer" : (controls.buttonText || "Open Drawer")}
            </MuiButton>
            <Drawer
              anchor={controls.anchor || "left"}
              open={drawerOpen}
              variant={controls.variant || "temporary"}
              onClose={() => setDrawerOpen(false)}
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
                checked={checkboxChecked}
                onChange={(event) => setCheckboxChecked(event.target.checked)}
                disabled={controls.disabled || false}
                color={controls.color || "primary"}
                size={controls.size || "medium"}
                indeterminate={controls.indeterminate || false}
              />
            }
            label={controls.label || "Checkbox"}
          />
        );
      case "Select":
        return (
          <FormControl 
            variant={controls.variant || "outlined"} 
            sx={{ minWidth: 200 }}
            error={controls.error || false}
            disabled={controls.disabled || false}
            size={controls.size || "medium"}
            fullWidth={controls.fullWidth || false}
          >
            <InputLabel>{controls.label || "Select"}</InputLabel>
            <Select 
              value={selectValue} 
              label={controls.label || "Select"}
              multiple={controls.multiple || false}
              onChange={(event) => {
                const value = event.target.value;
                setSelectValue(value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
              <MenuItem value="option4">Option 4</MenuItem>
            </Select>
            {controls.helperText && (
              <FormHelperText>{controls.helperText}</FormHelperText>
            )}
          </FormControl>
        );
      case "Radio":
        return (
          <RadioGroup 
            value={radioValue} 
            onChange={(event) => setRadioValue(event.target.value)}
          >
            <FormControlLabel 
              value="basic" 
              control={
                <Radio 
                  color={controls.color || "primary"}
                  size={controls.size || "medium"}
                  disabled={controls.disabled || false}
                />
              } 
              label={controls.label || "Radio"} 
              disabled={controls.disabled || false}
            />
            <FormControlLabel 
              value="option2" 
              control={
                <Radio 
                  color={controls.color || "primary"}
                  size={controls.size || "medium"}
                />
              } 
              label="Option 2" 
            />
            <FormControlLabel 
              value="option3" 
              control={
                <Radio 
                  color={controls.color || "primary"}
                  size={controls.size || "medium"}
                />
              } 
              label="Option 3" 
            />
          </RadioGroup>
        );
      case "Switch":
        return (
          <FormControlLabel 
            control={
              <Switch 
                checked={switchChecked}
                onChange={(event) => setSwitchChecked(event.target.checked)}
                color={controls.color || "primary"}
                size={controls.size || "medium"}
                disabled={controls.disabled || false}
              />
            } 
            label={controls.label || "Switch"} 
          />
        );
      case "Slider":
        const sliderValue = Array.isArray(controls.value) ? controls.value : (controls.value || 30);
        const sliderMarks = controls.marks ? [
          { value: 0, label: '0' },
          { value: 25, label: '25' },
          { value: 50, label: '50' },
          { value: 75, label: '75' },
          { value: 100, label: '100' }
        ] : false;
        
        return (
          <Box sx={{ width: controls.orientation === 'vertical' ? 40 : 300, height: controls.orientation === 'vertical' ? 300 : 'auto' }}>
            <Slider 
              value={sliderValue}
              onChange={(event, newValue) => setSliderValue(newValue)}
              min={controls.min || 0}
              max={controls.max || 100}
              step={controls.step || 1}
              disabled={controls.disabled || false}
              color={controls.color || "primary"}
              size={controls.size || "medium"}
              orientation={controls.orientation || "horizontal"}
              marks={sliderMarks}
              valueLabelDisplay={controls.valueLabelDisplay || "off"}
            />
          </Box>
        );
      case "Rating":
        const getRatingProps = () => {
          switch (story) {
            case "ReadOnly":
              return { value: 3, readOnly: true, precision: 1 };
            case "HalfRating":
              return { value: 2.5, precision: 0.5, readOnly: false };
            case "CustomIcon":
              return { 
                value: 4, 
                icon: <FavoriteIcon fontSize="inherit" />, 
                emptyIcon: <FavoriteBorderIcon fontSize="inherit" /> 
              };
            case "Controlled":
              return { value: controls.value || 3, precision: 1 };
            default:
              return { value: 4, precision: 1 };
          }
        };
        
        const ratingProps = getRatingProps();
        
        return (
          <Rating 
            {...ratingProps}
            value={ratingValue}
            onChange={(event, newValue) => setRatingValue(newValue)}
            max={controls.max || 5}
            size={controls.size || "medium"}
            disabled={controls.disabled || false}
          />
        );
      case "Autocomplete":
        const autocompleteOptions = controls.grouped ? [
          { title: 'Group 1', options: ['Option 1', 'Option 2'] },
          { title: 'Group 2', options: ['Option 3', 'Option 4'] }
        ] : ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
        
        return (
          <Autocomplete
            value={autocompleteValue}
            onChange={(event, newValue) => setAutocompleteValue(newValue)}
            options={autocompleteOptions}
            sx={{ width: 300 }}
            multiple={controls.multiple || false}
            freeSolo={controls.freeSolo || false}
            disabled={controls.disabled || false}
            size={controls.size || "medium"}
            groupBy={controls.grouped ? (option: any) => option.title : undefined}
            getOptionLabel={controls.grouped ? (option: any) => option.options?.[0] || option : (option: any) => option}
            renderInput={(params) => <TextField {...params} label={controls.label || "Autocomplete"} />}
          />
        );

      case "ToggleButton":
        return (
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <ToggleButton
              value={controls.value || "format_bold"}
              selected={controls.selected || false}
              color={controls.color || "primary"}
              size={controls.size || "medium"}
              disabled={controls.disabled || false}
              onChange={() => {}}
            >
              {controls.icon ? <EditIcon /> : (controls.label || "Bold")}
            </ToggleButton>
            {!controls.exclusive && (
              <>
                <ToggleButton value="format_italic" onChange={() => {}}>
                  <ShareIcon />
                </ToggleButton>
                <ToggleButton value="format_underlined" onChange={() => {}}>
                  <PrintIcon />
                </ToggleButton>
              </>
            )}
          </div>
        );

      case "ButtonGroup":
        return (
          <ButtonGroup
            variant={controls.variant || "contained"}
            color={controls.color || "primary"}
            size={controls.size || "medium"}
            orientation={controls.orientation || "horizontal"}
            disabled={controls.disabled || false}
            fullWidth={controls.fullWidth || false}
          >
            <MuiButton>{controls.label1 || "One"}</MuiButton>
            <MuiButton>{controls.label2 || "Two"}</MuiButton>
            <MuiButton>{controls.label3 || "Three"}</MuiButton>
            {controls.fourButtons && <MuiButton>Four</MuiButton>}
          </ButtonGroup>
        );

      case "Fab":
        const getFabContent = () => {
          switch (story) {
            case "Extended":
              return (
                <Fab variant="extended" color={controls.color || "primary"} size={controls.size || "medium"}>
                  <SendIcon sx={{ mr: 1 }} />
                  {controls.label || "Extended"}
                </Fab>
              );
            case "WithIcon":
              return (
                <Fab color={controls.color || "primary"} size={controls.size || "medium"}>
                  <FavoriteIcon />
                </Fab>
              );
            case "Sizes":
              return (
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <Fab color="primary" size="small">
                    <EditIcon />
                  </Fab>
                  <Fab color="primary" size="medium">
                    <FavoriteIcon />
                  </Fab>
                  <Fab color="primary" size="large">
                    <SendIcon />
                  </Fab>
                </div>
              );
            case "Colors":
              return (
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <Fab color="primary"><EditIcon /></Fab>
                  <Fab color="secondary"><FavoriteIcon /></Fab>
                  <Fab color="success"><SendIcon /></Fab>
                  <Fab color="error"><CloseIcon /></Fab>
                </div>
              );
            default:
              return (
                <Fab 
                  color={controls.color || "primary"}
                  size={controls.size || "medium"}
                  disabled={controls.disabled || false}
                  onClick={() => {}}
                >
                  {controls.icon ? <SendIcon /> : <EditIcon />}
                </Fab>
              );
          }
        };
        
        return getFabContent();

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





      case "Dialog":
        return (
          <div>
            <MuiButton 
              variant="contained" 
              onClick={() => setDialogOpen(true)}
            >
              Open Dialog
            </MuiButton>
            <Dialog
              open={controls.open !== undefined ? controls.open : dialogOpen}
              onClose={() => setDialogOpen(false)}
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
                <MuiButton onClick={() => setDialogOpen(false)}>Cancel</MuiButton>
                <MuiButton variant="contained" onClick={() => setDialogOpen(false)}>Confirm</MuiButton>
              </DialogActions>
            </Dialog>
          </div>
        );

      case "Snackbar":
        return (
          <div>
            <MuiButton variant="contained" onClick={() => setSnackbarOpen(true)}>
              Open Snackbar
            </MuiButton>
            <Snackbar
              open={controls.open !== undefined ? controls.open : snackbarOpen}
              autoHideDuration={controls.autoHideDuration || 6000}
              onClose={() => setSnackbarOpen(false)}
              message={controls.message || "This is a snackbar message"}
              anchorOrigin={{
                vertical: controls.anchorOrigin?.includes('top') ? 'top' : 'bottom',
                horizontal: controls.anchorOrigin?.includes('center') ? 'center' : 
                          controls.anchorOrigin?.includes('right') ? 'right' : 'left'
              }}
              action={controls.action ? (
                <MuiButton color="secondary" size="small" onClick={() => setSnackbarOpen(false)}>
                  UNDO
                </MuiButton>
              ) : undefined}
            />
          </div>
        );

      case "CircularProgress":
        return (
          <CircularProgress
            variant={controls.variant || "indeterminate"}
            value={controls.variant === "determinate" ? (controls.value || 25) : undefined}
            size={controls.size || 40}
            thickness={controls.thickness || 3.6}
            color={controls.color || "primary"}
          />
        );

      case "LinearProgress":
        return (
          <div style={{ width: '300px' }}>
            <LinearProgress
              variant={controls.variant || "indeterminate"}
              value={controls.variant === "determinate" ? (controls.value || 50) : undefined}
              valueBuffer={controls.variant === "buffer" ? (controls.valueBuffer || 75) : undefined}
              color={controls.color || "primary"}
            />
          </div>
        );

      case "Skeleton":
        return (
          <Skeleton
            variant={controls.variant || "text"}
            width={controls.width || 210}
            height={controls.height || 60}
            animation={controls.animation === "false" ? false : controls.animation || "pulse"}
          />
        );

      case "Backdrop":
        return (
          <div>
            <MuiButton variant="contained" onClick={() => {}}>
              {controls.open ? "Backdrop Open" : "Backdrop Closed"} (Use controls)
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
        );

      case "Grid":
        return (
          <Box sx={{ display: 'flex', flexDirection: controls.direction === 'column' ? 'column' : 'row', gap: controls.spacing || 2, justifyContent: controls.justifyContent || 'flex-start', alignItems: controls.alignItems || 'stretch', flexWrap: 'wrap' }}>
            <Box sx={{ flex: `0 0 ${100 / (12 / (controls.itemXs || 12))}%`, minWidth: 0 }}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e3f2fd' }}>
                Grid Item 1
              </Paper>
            </Box>
            <Box sx={{ flex: `0 0 ${100 / (12 / (controls.itemSm || 6))}%`, minWidth: 0 }}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#f3e5f5' }}>
                Grid Item 2
              </Paper>
            </Box>
            <Box sx={{ flex: `0 0 ${100 / (12 / (controls.itemMd || 4))}%`, minWidth: 0 }}>
              <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e8f5e8' }}>
                Grid Item 3
              </Paper>
            </Box>
          </Box>
        );

      case "Container":
        return (
          <Container
            maxWidth={controls.maxWidth || "md"}
            fixed={controls.fixed || false}
            disableGutters={controls.disableGutters || false}
          >
            <Paper sx={{ p: 3, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom>
                Container Content
              </Typography>
              <Typography variant="body1">
                This content is inside a {controls.maxWidth || "md"} container.
                Container provides consistent max-widths and centering.
              </Typography>
            </Paper>
          </Container>
        );

      case "Box":
        return (
          <Box
            component={controls.component || "div"}
            sx={{
              padding: controls.padding || 2,
              margin: controls.margin || 1,
              border: controls.border ? '1px solid #ccc' : 'none',
              borderRadius: controls.borderRadius || 0,
              backgroundColor: controls.backgroundColor || 'transparent',
              textAlign: controls.textAlign || 'left',
              display: controls.display || 'block'
            }}
          >
            <Typography variant="body1">
              This is a Box component with customizable styling.
              Box is the most primitive layout component in Material-UI.
            </Typography>
          </Box>
        );

      case "Stack":
        return (
          <Stack
            direction={controls.direction || "column"}
            spacing={controls.spacing || 2}
            divider={controls.divider ? <Divider orientation={controls.direction === "row" ? "vertical" : "horizontal"} flexItem /> : undefined}
            justifyContent={controls.justifyContent || "flex-start"}
            alignItems={controls.alignItems || "stretch"}
          >
            <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e3f2fd' }}>Stack Item 1</Paper>
            <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#f3e5f5' }}>Stack Item 2</Paper>
            <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#e8f5e8' }}>Stack Item 3</Paper>
          </Stack>
        );

      case "Divider":
        return (
          <Box>
            <Typography variant="body1" sx={{ mb: 2 }}>Content above divider</Typography>
            <Divider 
              orientation={controls.orientation || "horizontal"}
              variant={controls.variant || "fullWidth"}
              flexItem={controls.flexItem || false}
              textAlign={controls.textAlign || "center"}
              sx={{ my: 2 }}
            >
              {controls.children || "Divider Text"}
            </Divider>
            <Typography variant="body1" sx={{ mt: 2 }}>Content below divider</Typography>
          </Box>
        );

      case "Paper":
        return (
          <Paper
            elevation={controls.elevation || 1}
            variant={controls.variant || "elevation"}
            square={controls.square || false}
            sx={{ 
              p: 3, 
              maxWidth: 400,
              textAlign: 'center'
            }}
          >
            <Typography variant="h6" gutterBottom>
              Paper Component
            </Typography>
            <Typography variant="body1">
              Paper provides elevation and background for content.
              Current elevation: {controls.elevation || 1}
            </Typography>
          </Paper>
        );

      case "ImageList":
        const imageListData = [
          { img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f', title: 'Fern' },
          { img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25', title: 'Mushrooms' },
          { img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af', title: 'Tomato basil' },
          { img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1', title: 'Sea star' },
          { img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6', title: 'Bike' },
          { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger' }
        ];

        return (
          <ImageList
            sx={{ width: 500, height: 300 }}
            cols={controls.cols || 3}
            rowHeight={controls.rowHeight || 164}
            variant={controls.variant || "standard"}
            gap={controls.gap || 8}
          >
            {imageListData.slice(0, 6).map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        );

      case "ClickAwayListener":
        return (
          <ClickAwayListener onClickAway={() => {}}>
            <Paper 
              elevation={controls.elevation || 2}
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                backgroundColor: controls.active ? '#e3f2fd' : '#f5f5f5',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onClick={() => {}}
            >
              <Typography variant="h6" gutterBottom>
                ClickAwayListener Demo
              </Typography>
              <Typography variant="body2">
                Click outside this area to trigger the ClickAwayListener event.
                The background changes when {controls.active ? 'active' : 'inactive'}.
              </Typography>
            </Paper>
          </ClickAwayListener>
        );

      case "Portal":
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Portal Component
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Portal renders children into a different part of the DOM tree.
            </Typography>
            <MuiButton 
              variant="contained" 
              disabled={!controls.enabled}
              sx={{ mb: 2 }}
            >
              {controls.enabled ? 'Portal Enabled' : 'Portal Disabled'}
            </MuiButton>
            <Portal container={controls.container || undefined}>
              <Paper 
                sx={{ 
                  position: 'fixed', 
                  top: 20, 
                  right: 20, 
                  p: 2, 
                  zIndex: 9999,
                  display: controls.enabled ? 'block' : 'none'
                }}
              >
                <Typography variant="body2">
                  This content is rendered via Portal!
                </Typography>
              </Paper>
            </Portal>
          </Box>
        );

      case "TextareaAutosize":
        return (
          <TextareaAutosize
            minRows={controls.minRows || 3}
            maxRows={controls.maxRows || 8}
            placeholder={controls.placeholder || "Type your message here..."}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '14px',
              fontFamily: 'inherit',
              border: '1px solid #ccc',
              borderRadius: '4px',
              resize: 'none',
              outline: 'none'
            }}
            disabled={controls.disabled || false}
          />
        );

      case "Popper":
        return (
          <Box>
            <MuiButton
              variant="contained"
              onClick={(event) => setPopperAnchor(popperAnchor ? null : event.currentTarget)}
            >
              Toggle Popper
            </MuiButton>
            <Popper 
              open={popperOpen} 
              anchorEl={popperAnchor}
              placement={controls.placement || "bottom"}
              transition={controls.transition !== false}
              disablePortal={controls.disablePortal || false}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={controls.timeout || 350}>
                  <Paper sx={{ p: 2, mt: 1, maxWidth: 300 }}>
                    <Typography variant="h6" gutterBottom>
                      Popper Content
                    </Typography>
                    <Typography variant="body2">
                      This content is positioned using Popper.
                      Placement: {controls.placement || "bottom"}
                    </Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </Box>
        );

      case "Grow":
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <MuiButton
              variant="contained"
              onClick={() => {}}
            >
              Toggle: {controls.show ? 'Hide' : 'Show'}
            </MuiButton>
            <Grow 
              in={controls.show !== false} 
              timeout={controls.timeout || 500}
              style={{ transformOrigin: controls.transformOrigin || '0 0 0' }}
            >
              <Paper 
                elevation={3}
                sx={{ 
                  p: 2, 
                  backgroundColor: '#e8f5e8',
                  minWidth: 200
                }}
              >
                <Typography variant="body1">
                  Grow Transition Component
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Timeout: {controls.timeout || 500}ms
                </Typography>
              </Paper>
            </Grow>
          </Box>
        );

      case "Fade":
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <MuiButton
              variant="contained"
              onClick={() => {}}
            >
              Toggle: {controls.show ? 'Fade Out' : 'Fade In'}
            </MuiButton>
            <Fade 
              in={controls.show !== false} 
              timeout={controls.timeout || 500}
            >
              <Paper 
                elevation={3}
                sx={{ 
                  p: 2, 
                  backgroundColor: '#f3e5f5',
                  minWidth: 200
                }}
              >
                <Typography variant="body1">
                  Fade Transition Component
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Timeout: {controls.timeout || 500}ms
                </Typography>
              </Paper>
            </Fade>
          </Box>
        );

      case "Slide":
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, overflow: 'hidden' }}>
            <MuiButton
              variant="contained"
              onClick={() => {}}
            >
              Toggle: {controls.show ? 'Slide Out' : 'Slide In'}
            </MuiButton>
            <Slide 
              direction={controls.direction || "left"}
              in={controls.show !== false} 
              timeout={controls.timeout || 500}
              mountOnEnter 
              unmountOnExit
            >
              <Paper 
                elevation={3}
                sx={{ 
                  p: 2, 
                  backgroundColor: '#e3f2fd',
                  minWidth: 200
                }}
              >
                <Typography variant="body1">
                  Slide Transition Component
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Direction: {controls.direction || "left"}
                </Typography>
              </Paper>
            </Slide>
          </Box>
        );

      case "Zoom":
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <MuiButton
              variant="contained"
              onClick={() => {}}
            >
              Toggle: {controls.show ? 'Zoom Out' : 'Zoom In'}
            </MuiButton>
            <Zoom 
              in={controls.show !== false} 
              timeout={controls.timeout || 500}
              style={{ transitionDelay: controls.show ? `${controls.delay || 0}ms` : '0ms' }}
            >
              <Paper 
                elevation={3}
                sx={{ 
                  p: 2, 
                  backgroundColor: '#fff3e0',
                  minWidth: 200
                }}
              >
                <Typography variant="body1">
                  Zoom Transition Component
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Timeout: {controls.timeout || 500}ms
                </Typography>
              </Paper>
            </Zoom>
          </Box>
        );

      case "Timeline":
        return (
          <div style={{ maxWidth: 400 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: controls.primaryColor || '#1976d2', marginTop: '4px', flexShrink: 0 }}></div>
                <div style={{ flex: 1 }}>
                  <Typography variant="body1" fontWeight="medium">{controls.firstTitle || "Project Started"}</Typography>
                  <Typography variant="body2" color="text.secondary">{controls.firstTime || "9:30 AM"}</Typography>
                  {controls.firstDescription && (
                    <Typography variant="body2" sx={{ mt: 1 }}>{controls.firstDescription}</Typography>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: controls.secondaryColor || '#388e3c', marginTop: '4px', flexShrink: 0 }}></div>
                <div style={{ flex: 1 }}>
                  <Typography variant="body1" fontWeight="medium">{controls.secondTitle || "Design Phase Completed"}</Typography>
                  <Typography variant="body2" color="text.secondary">{controls.secondTime || "11:45 AM"}</Typography>
                  {controls.secondDescription && (
                    <Typography variant="body2" sx={{ mt: 1 }}>{controls.secondDescription}</Typography>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: controls.tertiaryColor || '#f57c00', marginTop: '4px', flexShrink: 0 }}></div>
                <div style={{ flex: 1 }}>
                  <Typography variant="body1" fontWeight="medium">{controls.thirdTitle || "Development Started"}</Typography>
                  <Typography variant="body2" color="text.secondary">{controls.thirdTime || "2:15 PM"}</Typography>
                  {controls.thirdDescription && (
                    <Typography variant="body2" sx={{ mt: 1 }}>{controls.thirdDescription}</Typography>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case "TreeView":
        return (
          <div style={{ maxWidth: 300 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div 
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}
                onClick={() => toggleExpanded('applications')}
              >
                {expandedItems.includes('applications') ? <ExpandMoreIcon style={{ fontSize: '16px' }} /> : <ChevronRightIcon style={{ fontSize: '16px' }} />}
                <FolderIcon style={{ fontSize: '16px', color: controls.folderColor || '#f57c00' }} />
                <Typography variant="body2">{controls.rootName || "Applications"}</Typography>
              </div>
              {expandedItems.includes('applications') && (
                <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                    <div style={{ width: '16px' }}></div>
                    <InsertDriveFileIcon style={{ fontSize: '16px', color: controls.fileColor || '#42a5f5' }} />
                    <Typography variant="body2">{controls.fileName1 || "app.js"}</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                    <div style={{ width: '16px' }}></div>
                    <InsertDriveFileIcon style={{ fontSize: '16px', color: controls.fileColor || '#42a5f5' }} />
                    <Typography variant="body2">{controls.fileName2 || "config.json"}</Typography>
                  </div>
                  <div 
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}
                    onClick={() => toggleExpanded('components')}
                  >
                    {expandedItems.includes('components') ? <ExpandMoreIcon style={{ fontSize: '16px' }} /> : <ChevronRightIcon style={{ fontSize: '16px' }} />}
                    <FolderIcon style={{ fontSize: '16px', color: controls.subfolderColor || '#ff9800' }} />
                    <Typography variant="body2">{controls.subfolderName || "components"}</Typography>
                  </div>
                  {expandedItems.includes('components') && (
                    <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                        <div style={{ width: '16px' }}></div>
                        <InsertDriveFileIcon style={{ fontSize: '16px', color: controls.fileColor || '#42a5f5' }} />
                        <Typography variant="body2">{controls.subFileName1 || "Header.tsx"}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                        <div style={{ width: '16px' }}></div>
                        <InsertDriveFileIcon style={{ fontSize: '16px', color: controls.fileColor || '#42a5f5' }} />
                        <Typography variant="body2">{controls.subFileName2 || "Footer.tsx"}</Typography>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
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
                <Rating 
                  value={4} 
                  icon={<FavoriteIcon fontSize="inherit" />} 
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} 
                />
              </div>
            </div>
          </div>
        );


      case "Fab":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic FABs</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Fab color="primary">
                  <span style={{ fontSize: '18px' }}>+</span>
                </Fab>
                <Fab color="secondary">
                  <span style={{ fontSize: '18px' }}>✏️</span>
                </Fab>
                <Fab disabled>
                  <span style={{ fontSize: '18px' }}>⚠️</span>
                </Fab>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Extended FAB</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Fab variant="extended" color="primary">
                  <span style={{ marginRight: '8px' }}>+</span>
                  Add Item
                </Fab>
                <Fab variant="extended" color="secondary">
                  <span style={{ marginRight: '8px' }}>✏️</span>
                  Edit
                </Fab>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Fab size="small" color="primary">
                  <span style={{ fontSize: '14px' }}>S</span>
                </Fab>
                <Fab size="medium" color="primary">
                  <span style={{ fontSize: '16px' }}>M</span>
                </Fab>
                <Fab size="large" color="primary">
                  <span style={{ fontSize: '20px' }}>L</span>
                </Fab>
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
                  options={['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']}
                  renderInput={(params) => <TextField {...params} label="Fruits" />}
                />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Multiple Selection</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <Autocomplete
                  multiple
                  options={['React', 'Vue', 'Angular', 'Svelte']}
                  renderInput={(params) => <TextField {...params} label="Frameworks" />}
                />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Free Solo</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
                <Autocomplete
                  freeSolo
                  options={['JavaScript', 'Python', 'Java', 'C++']}
                  renderInput={(params) => <TextField {...params} label="Programming Languages" />}
                />
              </div>
            </div>
          </div>
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

      case "Avatar":
        return <Avatar>A</Avatar>;

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


      case "Badge":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Badges</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Badge badgeContent={4} color="primary">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={10} color="secondary">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={100} color="error">
                  <MailIcon />
                </Badge>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Badge badgeContent={4} color="primary"><MailIcon /></Badge>
                <Badge badgeContent={4} color="secondary"><MailIcon /></Badge>
                <Badge badgeContent={4} color="success"><MailIcon /></Badge>
                <Badge badgeContent={4} color="error"><MailIcon /></Badge>
                <Badge badgeContent={4} color="warning"><MailIcon /></Badge>
                <Badge badgeContent={4} color="info"><MailIcon /></Badge>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Variants</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Badge badgeContent={4} variant="standard"><MailIcon /></Badge>
                <Badge badgeContent={4} variant="dot"><MailIcon /></Badge>
                <Badge color="error" variant="dot"><MailIcon /></Badge>
              </div>
            </div>

          </div>
        );

      case "Avatar":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Avatars</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Avatar>H</Avatar>
                <Avatar><PersonIcon /></Avatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sizes</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Avatar sx={{ width: 24, height: 24, fontSize: '12px' }}>S</Avatar>
                <Avatar sx={{ width: 32, height: 32, fontSize: '14px' }}>M</Avatar>
                <Avatar sx={{ width: 40, height: 40 }}>D</Avatar>
                <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Variants</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Avatar variant="circular">C</Avatar>
                <Avatar variant="rounded">R</Avatar>
                <Avatar variant="square">S</Avatar>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>P</Avatar>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>S</Avatar>
                <Avatar sx={{ bgcolor: 'success.main' }}>✓</Avatar>
                <Avatar sx={{ bgcolor: 'error.main' }}>E</Avatar>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Avatar Group</h3>
              <AvatarGroup max={4}>
                <Avatar alt="User 1" sx={{ bgcolor: 'primary.main' }}>R</Avatar>
                <Avatar alt="User 2" sx={{ bgcolor: 'secondary.main' }}>T</Avatar>
                <Avatar alt="User 3" sx={{ bgcolor: 'success.main' }}>C</Avatar>
                <Avatar alt="User 4" sx={{ bgcolor: 'warning.main' }}>A</Avatar>
                <Avatar alt="User 5" sx={{ bgcolor: 'info.main' }}>T</Avatar>
              </AvatarGroup>
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
                <MuiButton variant="contained">Open Menu (Example)</MuiButton>
                <Paper elevation={2} sx={{ mt: 1, width: 200 }}>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="My account" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Logout" />
                    </ListItem>
                  </List>
                </Paper>
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







      case "Dialog":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Interactive Dialog</h3>
              <MuiButton 
                variant="contained" 
                onClick={() => {}}
              >
                {controls.open ? "Close Dialog" : "Open Dialog"} (Use controls panel)
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

      case "Grid":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Grid Layout</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e3f2fd' }}>Item 1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e8f5e8' }}>Item 2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f3e5f5' }}>Item 3</Paper>
                </Grid>
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Responsive Layout</h3>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Paper sx={{ p: 3, textAlign: 'center', height: 100, bgcolor: '#fff3e0' }}>Main Content (8/12)</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 3, textAlign: 'center', height: 100, bgcolor: '#fce4ec' }}>Sidebar (4/12)</Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        );

      case "Container":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>MaxWidth Variants</h3>
              <Stack spacing={2}>
                <Container maxWidth="xs" sx={{ bgcolor: '#f5f5f5', p: 2 }}>
                  <Typography>xs: maxWidth 444px</Typography>
                </Container>
                <Container maxWidth="sm" sx={{ bgcolor: '#e8f5e8', p: 2 }}>
                  <Typography>sm: maxWidth 600px</Typography>
                </Container>
                <Container maxWidth="md" sx={{ bgcolor: '#e3f2fd', p: 2 }}>
                  <Typography>md: maxWidth 900px</Typography>
                </Container>
              </Stack>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Fixed vs Fluid</h3>
              <Stack spacing={2}>
                <Container fixed sx={{ bgcolor: '#fff3e0', p: 2 }}>
                  <Typography>Fixed Container</Typography>
                </Container>
                <Container sx={{ bgcolor: '#fce4ec', p: 2 }}>
                  <Typography>Fluid Container (default)</Typography>
                </Container>
              </Stack>
            </div>
          </div>
        );

      case "Box":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Flexbox Examples</h3>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 1, p: 2, bgcolor: '#f5f5f5' }}>
                  <Paper sx={{ p: 1, flex: 1, textAlign: 'center' }}>Flex 1</Paper>
                  <Paper sx={{ p: 1, flex: 2, textAlign: 'center' }}>Flex 2</Paper>
                  <Paper sx={{ p: 1, flex: 1, textAlign: 'center' }}>Flex 1</Paper>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, bgcolor: '#e8f5e8' }}>
                  <Paper sx={{ p: 1 }}>Start</Paper>
                  <Paper sx={{ p: 1 }}>Middle</Paper>
                  <Paper sx={{ p: 1 }}>End</Paper>
                </Box>
              </Stack>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>CSS Grid</h3>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, p: 2, bgcolor: '#f3e5f5' }}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>Grid 1</Paper>
                <Paper sx={{ p: 2, textAlign: 'center' }}>Grid 2</Paper>
                <Paper sx={{ p: 2, textAlign: 'center' }}>Grid 3</Paper>
              </Box>
            </div>
          </div>
        );

      case "Stack":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Direction & Spacing</h3>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" gutterBottom>Vertical Stack</Typography>
                  <Stack spacing={1} sx={{ bgcolor: '#f5f5f5', p: 2 }}>
                    <Paper sx={{ p: 1, textAlign: 'center' }}>Item 1</Paper>
                    <Paper sx={{ p: 1, textAlign: 'center' }}>Item 2</Paper>
                    <Paper sx={{ p: 1, textAlign: 'center' }}>Item 3</Paper>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" gutterBottom>Horizontal Stack</Typography>
                  <Stack direction="row" spacing={1} sx={{ bgcolor: '#e8f5e8', p: 2 }}>
                    <Paper sx={{ p: 1, textAlign: 'center', flex: 1 }}>Item 1</Paper>
                    <Paper sx={{ p: 1, textAlign: 'center', flex: 1 }}>Item 2</Paper>
                    <Paper sx={{ p: 1, textAlign: 'center', flex: 1 }}>Item 3</Paper>
                  </Stack>
                </Grid>
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>With Dividers</h3>
              <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />} sx={{ bgcolor: '#e3f2fd', p: 2 }}>
                <Typography>Section 1</Typography>
                <Typography>Section 2</Typography>
                <Typography>Section 3</Typography>
              </Stack>
            </div>
          </div>
        );

      case "Divider":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Dividers</h3>
              <Stack spacing={2}>
                <Typography>Content above</Typography>
                <Divider />
                <Typography>Content below</Typography>
                <Divider variant="middle" />
                <Typography>Middle variant</Typography>
                <Divider variant="inset" />
                <Typography>Inset variant</Typography>
              </Stack>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Vertical Dividers</h3>
              <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} sx={{ height: 60 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', px: 2, bgcolor: '#f5f5f5' }}>Section 1</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', px: 2, bgcolor: '#e8f5e8' }}>Section 2</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', px: 2, bgcolor: '#e3f2fd' }}>Section 3</Box>
              </Stack>
            </div>
          </div>
        );

      case "Paper":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Elevation Levels</h3>
              <Grid container spacing={3}>
                {[0, 1, 2, 4, 8, 12].map((elevation) => (
                  <Grid item xs={6} sm={4} md={2} key={elevation}>
                    <Paper elevation={elevation} sx={{ p: 2, textAlign: 'center' }}>
                      <Typography variant="body2">Elevation {elevation}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Paper Variants</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Paper elevation={2} sx={{ p: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>Default</Typography>
                    <Typography variant="body2">Standard elevation</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper variant="outlined" sx={{ p: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>Outlined</Typography>
                    <Typography variant="body2">Border instead of shadow</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper elevation={0} sx={{ p: 3, bgcolor: 'grey.50' }}>
                    <Typography variant="subtitle2" gutterBottom>Custom</Typography>
                    <Typography variant="body2">Custom background</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        );

      case "ImageList":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Standard Grid</h3>
              <ImageList sx={{ width: '100%', height: 150 }} cols={3} rowHeight={60}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <ImageListItem key={item}>
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        bgcolor: `hsl(${item * 60}, 70%, 80%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="body2">Image {item}</Typography>
                    </Box>
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Quilted Layout</h3>
              <ImageList variant="quilted" sx={{ width: '100%', height: 150 }} cols={4} rowHeight={50}>
                {[{ cols: 2, rows: 2 }, { cols: 1, rows: 1 }, { cols: 1, rows: 1 }, { cols: 2, rows: 1 }].map((item, index) => (
                  <ImageListItem key={index} cols={item.cols} rows={item.rows}>
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        bgcolor: `hsl(${index * 50}, 60%, 75%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="body2">{item.cols}×{item.rows}</Typography>
                    </Box>
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>
        );

      case "ClickAwayListener":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Click Away Detection</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <ClickAwayListener onClickAway={() => {}}>
                    <Paper sx={{ p: 3, textAlign: 'center', bgcolor: '#e3f2fd', cursor: 'pointer' }}>
                      <Typography variant="h6">Clickable Area 1</Typography>
                      <Typography variant="body2">Click outside to trigger event</Typography>
                    </Paper>
                  </ClickAwayListener>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ClickAwayListener onClickAway={() => {}}>
                    <Paper sx={{ p: 3, textAlign: 'center', bgcolor: '#e8f5e8', cursor: 'pointer' }}>
                      <Typography variant="h6">Clickable Area 2</Typography>
                      <Typography variant="body2">Independent detection</Typography>
                    </Paper>
                  </ClickAwayListener>
                </Grid>
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Common Use Cases</h3>
              <Stack spacing={2}>
                <Paper sx={{ p: 2, bgcolor: '#f3e5f5' }}>
                  <Typography variant="body2">💡 Dropdown menus</Typography>
                </Paper>
                <Paper sx={{ p: 2, bgcolor: '#fff3e0' }}>
                  <Typography variant="body2">🗨️ Modal dialogs</Typography>
                </Paper>
                <Paper sx={{ p: 2, bgcolor: '#fce4ec' }}>
                  <Typography variant="body2">📝 Form validation</Typography>
                </Paper>
              </Stack>
            </div>
          </div>
        );

      case "Portal":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Portal Usage</h3>
              <Paper sx={{ p: 3, bgcolor: '#f5f5f5' }}>
                <Typography variant="body1" gutterBottom>
                  Portal renders content outside the normal DOM hierarchy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check the top-right corner when Portal is enabled in controls
                </Typography>
              </Paper>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Common Use Cases</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e8f5e8' }}>
                    <Typography variant="body2">🗂️ Modal Dialogs</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f3e5f5' }}>
                    <Typography variant="body2">🔔 Notifications</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fff3e0' }}>
                    <Typography variant="body2">💡 Tooltips</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        );

      case "TextareaAutosize":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Size Configurations</h3>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2" gutterBottom>Minimal (1-3 rows)</Typography>
                  <TextareaAutosize
                    minRows={1}
                    maxRows={3}
                    placeholder="Compact textarea..."
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'inherit'
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2" gutterBottom>Standard (3-6 rows)</Typography>
                  <TextareaAutosize
                    minRows={3}
                    maxRows={6}
                    placeholder="Standard textarea..."
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'inherit'
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2" gutterBottom>Extended (4-10 rows)</Typography>
                  <TextareaAutosize
                    minRows={4}
                    maxRows={10}
                    placeholder="Extended textarea..."
                    style={{
                      width: '100%',
                      padding: '16px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'inherit'
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Styled Variations</h3>
              <Stack spacing={2}>
                <TextareaAutosize
                  minRows={2}
                  maxRows={4}
                  placeholder="Modern style with border..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e3f2fd',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    backgroundColor: '#fafafa'
                  }}
                />
                <TextareaAutosize
                  minRows={2}
                  maxRows={4}
                  placeholder="Green style with outline..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #4caf50',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    backgroundColor: '#e8f5e8'
                  }}
                />
              </Stack>
            </div>
          </div>
        );

      case "Popper":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Placement Options</h3>
              <Grid container spacing={2}>
                {['top', 'bottom', 'left', 'right', 'top-start', 'bottom-end'].map((placement) => (
                  <Grid item xs={6} sm={4} md={2} key={placement}>
                    <MuiButton variant="outlined" size="small" fullWidth sx={{ textTransform: 'none' }}>
                      {placement}
                    </MuiButton>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Interactive Example</h3>
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 4, bgcolor: '#f5f5f5' }}>
                <Typography variant="body2">
                  Use the controls to test Popper positioning and behavior
                </Typography>
              </Box>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Common Use Cases</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e8f5e8' }}>
                    <Typography variant="body2">🗂️ Dropdown Menus</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f3e5f5' }}>
                    <Typography variant="body2">💡 Tooltips</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fff3e0' }}>
                    <Typography variant="body2">📅 Date Pickers</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fce4ec' }}>
                    <Typography variant="body2">🔍 Search Results</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        );

      case "Grow":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Timing Variations</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>Fast (200ms)</Typography>
                  <Grow in={true} timeout={200}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e3f2fd' }}>
                      <Typography>Fast Grow</Typography>
                    </Paper>
                  </Grow>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>Normal (500ms)</Typography>
                  <Grow in={true} timeout={500}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e8f5e8' }}>
                      <Typography>Normal Grow</Typography>
                    </Paper>
                  </Grow>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>Slow (1000ms)</Typography>
                  <Grow in={true} timeout={1000}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f3e5f5' }}>
                      <Typography>Slow Grow</Typography>
                    </Paper>
                  </Grow>
                </Grid>
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Transform Origins</h3>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <Grow in={true} style={{ transformOrigin: 'top left' }}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fff3e0' }}>
                      <Typography variant="body2">Top Left</Typography>
                    </Paper>
                  </Grow>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Grow in={true} style={{ transformOrigin: 'center' }}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fce4ec' }}>
                      <Typography variant="body2">Center</Typography>
                    </Paper>
                  </Grow>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Grow in={true} style={{ transformOrigin: 'bottom right' }}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f1f8e9' }}>
                      <Typography variant="body2">Bottom Right</Typography>
                    </Paper>
                  </Grow>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Grow in={true} style={{ transformOrigin: 'top center' }}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f3e5f5' }}>
                      <Typography variant="body2">Top Center</Typography>
                    </Paper>
                  </Grow>
                </Grid>
              </Grid>
            </div>
          </div>
        );

      case "Fade":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Timing Variations</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>Quick Fade (150ms)</Typography>
                  <Fade in={true} timeout={150}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e3f2fd' }}>
                      <Typography>Quick Fade</Typography>
                    </Paper>
                  </Fade>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>Standard (300ms)</Typography>
                  <Fade in={true} timeout={300}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e8f5e8' }}>
                      <Typography>Standard Fade</Typography>
                    </Paper>
                  </Fade>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>Smooth (800ms)</Typography>
                  <Fade in={true} timeout={800}>
                    <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f3e5f5' }}>
                      <Typography>Smooth Fade</Typography>
                    </Paper>
                  </Fade>
                </Grid>
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Staggered Animation</h3>
              <Grid container spacing={1}>
                {[0, 200, 400, 600, 800].map((delay, index) => (
                  <Grid item xs={12} sm={6} md key={index}>
                    <Fade in={true} timeout={500} style={{ transitionDelay: `${delay}ms` }}>
                      <Paper sx={{ p: 2, textAlign: 'center', bgcolor: `hsl(${index * 40}, 60%, 85%)` }}>
                        <Typography variant="body2">Item {index + 1}</Typography>
                        <Typography variant="caption">{delay}ms delay</Typography>
                      </Paper>
                    </Fade>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        );

      case "Slide":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Slide Directions</h3>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2" gutterBottom>Slide Up</Typography>
                  <Box sx={{ height: 80, overflow: 'hidden', bgcolor: '#f5f5f5', position: 'relative' }}>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                      <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e3f2fd', position: 'absolute', width: '100%' }}>
                        <Typography variant="body2">Up</Typography>
                      </Paper>
                    </Slide>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2" gutterBottom>Slide Down</Typography>
                  <Box sx={{ height: 80, overflow: 'hidden', bgcolor: '#f5f5f5', position: 'relative' }}>
                    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                      <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e8f5e8', position: 'absolute', width: '100%' }}>
                        <Typography variant="body2">Down</Typography>
                      </Paper>
                    </Slide>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2" gutterBottom>Slide Left</Typography>
                  <Box sx={{ height: 80, overflow: 'hidden', bgcolor: '#f5f5f5', position: 'relative' }}>
                    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                      <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f3e5f5', position: 'absolute', width: '100%' }}>
                        <Typography variant="body2">Left</Typography>
                      </Paper>
                    </Slide>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2" gutterBottom>Slide Right</Typography>
                  <Box sx={{ height: 80, overflow: 'hidden', bgcolor: '#f5f5f5', position: 'relative' }}>
                    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                      <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fff3e0', position: 'absolute', width: '100%' }}>
                        <Typography variant="body2">Right</Typography>
                      </Paper>
                    </Slide>
                  </Box>
                </Grid>
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Sequential Animation</h3>
              <Box sx={{ height: 100, overflow: 'hidden', bgcolor: '#f5f5f5', position: 'relative' }}>
                {['First', 'Second', 'Third'].map((text, index) => (
                  <Slide 
                    key={index}
                    direction="left" 
                    in={true} 
                    timeout={500}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    mountOnEnter 
                    unmountOnExit
                  >
                    <Paper 
                      sx={{ 
                        p: 2, 
                        textAlign: 'center', 
                        bgcolor: `hsl(${index * 60}, 60%, 80%)`,
                        position: 'absolute',
                        top: index * 25,
                        left: 0,
                        right: 0
                      }}
                    >
                      <Typography variant="body2">{text} Card</Typography>
                    </Paper>
                  </Slide>
                ))}
              </Box>
            </div>
          </div>
        );

      case "Zoom":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Timing Variations</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>Quick Zoom (200ms)</Typography>
                  <Zoom in={true} timeout={200}>
                    <Paper sx={{ p: 3, textAlign: 'center', bgcolor: '#e3f2fd' }}>
                      <Typography>Quick</Typography>
                    </Paper>
                  </Zoom>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>Standard (500ms)</Typography>
                  <Zoom in={true} timeout={500}>
                    <Paper sx={{ p: 3, textAlign: 'center', bgcolor: '#e8f5e8' }}>
                      <Typography>Standard</Typography>
                    </Paper>
                  </Zoom>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" gutterBottom>Dramatic (1000ms)</Typography>
                  <Zoom in={true} timeout={1000}>
                    <Paper sx={{ p: 3, textAlign: 'center', bgcolor: '#f3e5f5' }}>
                      <Typography>Dramatic</Typography>
                    </Paper>
                  </Zoom>
                </Grid>
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Staggered Zoom Effects</h3>
              <Grid container spacing={1}>
                {[0, 100, 200, 300, 400, 500].map((delay, index) => (
                  <Grid item xs={6} sm={4} md={2} key={index}>
                    <Zoom 
                      in={true} 
                      timeout={400}
                      style={{ transitionDelay: `${delay}ms` }}
                    >
                      <Paper sx={{ 
                        p: 2, 
                        textAlign: 'center', 
                        bgcolor: `hsl(${index * 50}, 65%, 80%)`,
                        aspectRatio: '1'
                      }}>
                        <Typography variant="body2">{index + 1}</Typography>
                        <Typography variant="caption">{delay}ms</Typography>
                      </Paper>
                    </Zoom>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Common Use Cases</h3>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fff3e0' }}>
                    <Typography variant="body2">🎯 Focus Elements</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#fce4ec' }}>
                    <Typography variant="body2">🎉 Success States</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f1f8e9' }}>
                    <Typography variant="body2">📷 Image Previews</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#e8eaf6' }}>
                    <Typography variant="body2">⭐ Highlights</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        );



      case "Table":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Table</h3>
              <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Age</TableCell>
                      <TableCell align="right">City</TableCell>
                      <TableCell align="right">Score</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell align="right">30</TableCell>
                      <TableCell align="right">New York</TableCell>
                      <TableCell align="right">95</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell align="right">25</TableCell>
                      <TableCell align="right">Los Angeles</TableCell>
                      <TableCell align="right">87</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bob Johnson</TableCell>
                      <TableCell align="right">35</TableCell>
                      <TableCell align="right">Chicago</TableCell>
                      <TableCell align="right">92</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Dense Table</h3>
              <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Stock</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Laptop</TableCell>
                      <TableCell align="right">$999</TableCell>
                      <TableCell align="right">15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Phone</TableCell>
                      <TableCell align="right">$699</TableCell>
                      <TableCell align="right">25</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tablet</TableCell>
                      <TableCell align="right">$399</TableCell>
                      <TableCell align="right">8</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>With Status Indicators</h3>
              <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Task</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Priority</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Design Homepage</TableCell>
                      <TableCell><Chip label="In Progress" color="warning" size="small" /></TableCell>
                      <TableCell align="right">High</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Code Review</TableCell>
                      <TableCell><Chip label="Complete" color="success" size="small" /></TableCell>
                      <TableCell align="right">Medium</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Testing</TableCell>
                      <TableCell><Chip label="Pending" color="default" size="small" /></TableCell>
                      <TableCell align="right">Low</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        );





      case "Timeline":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Timeline</h3>
              <div style={{ maxWidth: 400 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1976d2', marginTop: '4px', flexShrink: 0 }}></div>
                    <div style={{ flex: 1 }}>
                      <Typography variant="body1" fontWeight="medium">Project Started</Typography>
                      <Typography variant="body2" color="text.secondary">9:30 AM</Typography>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#388e3c', marginTop: '4px', flexShrink: 0 }}></div>
                    <div style={{ flex: 1 }}>
                      <Typography variant="body1" fontWeight="medium">Design Phase Completed</Typography>
                      <Typography variant="body2" color="text.secondary">2:30 PM</Typography>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f57c00', marginTop: '4px', flexShrink: 0 }}></div>
                    <div style={{ flex: 1 }}>
                      <Typography variant="body1" fontWeight="medium">Development In Progress</Typography>
                      <Typography variant="body2" color="text.secondary">4:00 PM</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Timeline with Icons</h3>
              <div style={{ maxWidth: 400 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <PersonIcon style={{ fontSize: '16px', color: '#1976d2' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <Typography variant="body1" fontWeight="medium">User Registration</Typography>
                      <Typography variant="body2" color="text.secondary">New user joined the platform</Typography>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e8f5e8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckIcon style={{ fontSize: '16px', color: '#388e3c' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <Typography variant="body1" fontWeight="medium">Email Verified</Typography>
                      <Typography variant="body2" color="text.secondary">Email verification completed</Typography>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#fff3e0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <SettingsIcon style={{ fontSize: '16px', color: '#f57c00' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <Typography variant="body1" fontWeight="medium">Profile Setup</Typography>
                      <Typography variant="body2" color="text.secondary">Profile configuration in progress</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "TreeView":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic TreeView</h3>
              <div style={{ maxWidth: 300 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                    <ExpandMoreIcon style={{ fontSize: '16px' }} />
                    <FolderIcon style={{ fontSize: '16px', color: '#f57c00' }} />
                    <Typography variant="body2">Applications</Typography>
                  </div>
                  <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                      <div style={{ width: '16px' }}></div>
                      <InsertDriveFileIcon style={{ fontSize: '16px', color: '#42a5f5' }} />
                      <Typography variant="body2">app.js</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                      <div style={{ width: '16px' }}></div>
                      <InsertDriveFileIcon style={{ fontSize: '16px', color: '#42a5f5' }} />
                      <Typography variant="body2">index.html</Typography>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                    <ChevronRightIcon style={{ fontSize: '16px' }} />
                    <FolderIcon style={{ fontSize: '16px', color: '#f57c00' }} />
                    <Typography variant="body2">Documents</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                    <ExpandMoreIcon style={{ fontSize: '16px' }} />
                    <FolderIcon style={{ fontSize: '16px', color: '#f57c00' }} />
                    <Typography variant="body2">Desktop</Typography>
                  </div>
                  <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                      <div style={{ width: '16px' }}></div>
                      <InsertDriveFileIcon style={{ fontSize: '16px', color: '#66bb6a' }} />
                      <Typography variant="body2">notes.txt</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                      <ChevronRightIcon style={{ fontSize: '16px' }} />
                      <FolderIcon style={{ fontSize: '16px', color: '#f57c00' }} />
                      <Typography variant="body2">Projects</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>TreeView with Selection</h3>
              <div style={{ maxWidth: 300 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
                    <ExpandMoreIcon style={{ fontSize: '16px' }} />
                    <FolderIcon style={{ fontSize: '16px', color: '#1976d2' }} />
                    <Typography variant="body2" color="primary">Components</Typography>
                  </div>
                  <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                      <div style={{ width: '16px' }}></div>
                      <InsertDriveFileIcon style={{ fontSize: '16px', color: '#42a5f5' }} />
                      <Typography variant="body2">Button.tsx</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer', backgroundColor: '#fff3e0', borderRadius: '4px' }}>
                      <div style={{ width: '16px' }}></div>
                      <InsertDriveFileIcon style={{ fontSize: '16px', color: '#f57c00' }} />
                      <Typography variant="body2" color="warning.main">Card.tsx</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', cursor: 'pointer' }}>
                      <div style={{ width: '16px' }}></div>
                      <InsertDriveFileIcon style={{ fontSize: '16px', color: '#42a5f5' }} />
                      <Typography variant="body2">Table.tsx</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Chip":
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Basic Chips</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Chip label="Default" />
                <Chip label="Clickable" clickable />
                <Chip label="Deletable" onDelete={() => {}} />
                <Chip label="Disabled" disabled />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Variants</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Chip label="Filled" variant="filled" />
                <Chip label="Outlined" variant="outlined" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>Colors</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Error" color="error" />
                <Chip label="Warning" color="warning" />
                <Chip label="Info" color="info" />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#333' }}>With Icons</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Chip label="With Icon" icon={<FavoriteIcon />} />
                <Chip label="With Avatar" avatar={<Avatar>M</Avatar>} />
              </div>
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
          <div style={{ 
            display: 'flex', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px', 
            padding: '4px' 
          }}>
            <button
              onClick={() => setSelectedViewport('mobile')}
              style={{
                padding: '8px 12px',
                fontSize: '14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedViewport === 'mobile' ? '#ffffff' : 'transparent',
                color: selectedViewport === 'mobile' ? '#000000' : '#666666',
                boxShadow: selectedViewport === 'mobile' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              📱
            </button>
            <button
              onClick={() => setSelectedViewport('tablet')}
              style={{
                padding: '8px 12px',
                fontSize: '14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedViewport === 'tablet' ? '#ffffff' : 'transparent',
                color: selectedViewport === 'tablet' ? '#000000' : '#666666',
                boxShadow: selectedViewport === 'tablet' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              💻
            </button>
            <button
              onClick={() => setSelectedViewport('desktop')}
              style={{
                padding: '8px 12px',
                fontSize: '14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedViewport === 'desktop' ? '#ffffff' : 'transparent',
                color: selectedViewport === 'desktop' ? '#000000' : '#666666',
                boxShadow: selectedViewport === 'desktop' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              🖥️
            </button>
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
      <div style={{ flex: 1, overflow: 'hidden', backgroundColor: '#f5f5f5', position: 'relative' }}>
        <div 
          style={{ 
            transform: `scale(${currentZoom})`, 
            transformOrigin: 'top center',
            width: selectedViewport === 'mobile' ? '375px' : 
                   selectedViewport === 'tablet' ? '768px' : '100%',
            minWidth: selectedViewport === 'desktop' ? '1200px' : undefined,
            margin: '0 auto',
            height: '100%',
            overflow: 'auto'
          }}
        >
          <div style={{ 
            padding: '24px', 
            background: currentView === 'canvas' ? canvasBackground : designBackground,
            minHeight: 'calc(100vh - 120px)', 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'center',
            position: 'relative',
            width: '100%'
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
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '100%',
              padding: '20px 0'
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
                  width: '100%',
                  maxWidth: '100%',
                  overflow: 'hidden'
                }}>
                  {renderControlledComponent()}
                </div>
                
                {/* Variant showcase */}
                <div style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
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