import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Stack,
  Paper,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { RotateCcw } from 'lucide-react';
import { ThemeConfig } from './ThemeUploader';

interface ThemeBuilderProps {
  open: boolean;
  onClose: () => void;
  onApplyTheme: (theme: ThemeConfig) => void;
  initialTheme?: ThemeConfig | null;
}

const fontFamilies = [
  'Roboto, sans-serif',
  'Inter, sans-serif',
  'Open Sans, sans-serif',
  'Lato, sans-serif',
  'Montserrat, sans-serif',
  'Poppins, sans-serif',
  'Source Sans Pro, sans-serif',
  'Nunito, sans-serif',
  'Merriweather, serif',
  'Playfair Display, serif',
  'Georgia, serif',
  'Times New Roman, serif',
  'JetBrains Mono, monospace',
  'Fira Code, monospace',
  'Consolas, monospace'
];

const colorPresets = {
  corporate: {
    primary: '#1976d2',
    secondary: '#dc004e',
    success: '#2e7d32',
    error: '#d32f2f',
    warning: '#ed6c02',
    info: '#0288d1'
  },
  modern: {
    primary: '#6366f1',
    secondary: '#ec4899',
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6'
  },
  nature: {
    primary: '#2e7d32',
    secondary: '#795548',
    success: '#388e3c',
    error: '#d32f2f',
    warning: '#f57c00',
    info: '#1976d2'
  },
  sunset: {
    primary: '#ff6b35',
    secondary: '#f7931e',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3'
  }
};

export function ThemeBuilder({ open, onClose, onApplyTheme, initialTheme }: ThemeBuilderProps) {
  const [theme, setTheme] = useState<ThemeConfig>(() => ({
    name: initialTheme?.name || 'Custom Theme',
    description: initialTheme?.description || 'A custom theme created with the theme builder',
    colors: {
      primary: initialTheme?.colors.primary || '#1976d2',
      secondary: initialTheme?.colors.secondary || '#dc004e',
      error: initialTheme?.colors.error || '#d32f2f',
      warning: initialTheme?.colors.warning || '#ed6c02',
      info: initialTheme?.colors.info || '#0288d1',
      success: initialTheme?.colors.success || '#2e7d32',
      background: {
        default: initialTheme?.colors.background?.default || '#ffffff',
        paper: initialTheme?.colors.background?.paper || '#f5f5f5'
      },
      text: {
        primary: initialTheme?.colors.text?.primary || '#212121',
        secondary: initialTheme?.colors.text?.secondary || '#757575'
      }
    },
    typography: {
      fontFamily: initialTheme?.typography.fontFamily || 'Roboto, sans-serif',
      fontSize: initialTheme?.typography.fontSize || 14,
      h1: initialTheme?.typography.h1 || { fontSize: '2.5rem', fontWeight: 300 },
      h2: initialTheme?.typography.h2 || { fontSize: '2rem', fontWeight: 300 },
      h3: initialTheme?.typography.h3 || { fontSize: '1.75rem', fontWeight: 400 },
      h4: initialTheme?.typography.h4 || { fontSize: '1.5rem', fontWeight: 400 },
      h5: initialTheme?.typography.h5 || { fontSize: '1.25rem', fontWeight: 400 },
      h6: initialTheme?.typography.h6 || { fontSize: '1rem', fontWeight: 500 },
      body1: initialTheme?.typography.body1 || { fontSize: '1rem', lineHeight: 1.5 },
      body2: initialTheme?.typography.body2 || { fontSize: '0.875rem', lineHeight: 1.43 }
    },
    spacing: initialTheme?.spacing || 8,
    borderRadius: initialTheme?.borderRadius || 4
  }));

  const updateTheme = useCallback((updates: Partial<ThemeConfig>) => {
    setTheme(prev => ({
      ...prev,
      ...updates,
      colors: { ...prev.colors, ...updates.colors },
      typography: { ...prev.typography, ...updates.typography }
    }));
  }, []);

  const updateColor = useCallback((colorKey: string, value: string) => {
    if (colorKey.includes('.')) {
      const [parent, child] = colorKey.split('.');
      setTheme(prev => ({
        ...prev,
        colors: {
          ...prev.colors,
          [parent]: {
            ...(prev.colors as any)[parent],
            [child]: value
          }
        }
      }));
    } else {
      setTheme(prev => ({
        ...prev,
        colors: {
          ...prev.colors,
          [colorKey]: value
        }
      }));
    }
  }, []);

  const applyColorPreset = useCallback((presetKey: string) => {
    const preset = colorPresets[presetKey as keyof typeof colorPresets];
    if (preset) {
      updateTheme({
        colors: {
          ...theme.colors,
          ...preset
        }
      });
    }
  }, [theme.colors, updateTheme]);

  const downloadTheme = useCallback(() => {
    const dataStr = JSON.stringify(theme, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `${theme.name.toLowerCase().replace(/\s+/g, '-')}-theme.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }, [theme]);

  const handleApply = useCallback(() => {
    onApplyTheme(theme);
    onClose();
  }, [theme, onApplyTheme, onClose]);

  const resetToDefaults = useCallback(() => {
    setTheme({
      name: 'Custom Theme',
      description: 'A custom theme created with the theme builder',
      colors: {
        primary: '#1976d2',
        secondary: '#dc004e',
        error: '#d32f2f',
        warning: '#ed6c02',
        info: '#0288d1',
        success: '#2e7d32',
        background: {
          default: '#ffffff',
          paper: '#f5f5f5'
        },
        text: {
          primary: '#212121',
          secondary: '#757575'
        }
      },
      typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 14,
        h1: { fontSize: '2.5rem', fontWeight: 300 },
        h2: { fontSize: '2rem', fontWeight: 300 },
        h3: { fontSize: '1.75rem', fontWeight: 400 },
        h4: { fontSize: '1.5rem', fontWeight: 400 },
        h5: { fontSize: '1.25rem', fontWeight: 400 },
        h6: { fontSize: '1rem', fontWeight: 500 },
        body1: { fontSize: '1rem', lineHeight: 1.5 },
        body2: { fontSize: '0.875rem', lineHeight: 1.43 }
      },
      spacing: 8,
      borderRadius: 4
    });
  }, []);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <ColorLensIcon />
            <Typography variant="h6">Theme Builder</Typography>
          </Box>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={resetToDefaults}
            startIcon={<RotateCcw size={16} />}
          >
            Reset to Defaults
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          {/* Basic Info */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Theme Name"
                value={theme.name}
                onChange={(e) => updateTheme({ name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Description"
                value={theme.description}
                onChange={(e) => updateTheme({ description: e.target.value })}
              />
            </Grid>
          </Grid>

          {/* Color Presets */}
          <Box>
            <Typography variant="h6" gutterBottom>Color Presets</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {Object.entries(colorPresets).map(([key, preset]) => (
                <Chip
                  key={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  onClick={() => applyColorPreset(key)}
                  sx={{
                    backgroundColor: preset.primary,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: preset.primary,
                      opacity: 0.8
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Colors */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Colors</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>Primary Colors</Typography>
                  <Stack spacing={2}>
                    {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((color) => (
                      <Box key={color} display="flex" alignItems="center" gap={2}>
                        <Typography variant="body2" minWidth={80} textTransform="capitalize">
                          {color}
                        </Typography>
                        <TextField
                          type="color"
                          value={(theme.colors as any)[color]}
                          onChange={(e) => updateColor(color, e.target.value)}
                          size="small"
                          sx={{ minWidth: 60 }}
                        />
                        <Typography variant="body2" fontFamily="monospace">
                          {(theme.colors as any)[color]}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>Background & Text</Typography>
                  <Stack spacing={2}>
                    {[
                      { key: 'background.default', label: 'Background' },
                      { key: 'background.paper', label: 'Paper' },
                      { key: 'text.primary', label: 'Text Primary' },
                      { key: 'text.secondary', label: 'Text Secondary' }
                    ].map(({ key, label }) => (
                      <Box key={key} display="flex" alignItems="center" gap={2}>
                        <Typography variant="body2" minWidth={80}>
                          {label}
                        </Typography>
                        <TextField
                          type="color"
                          value={key.includes('.') ? 
                            (theme.colors as any)[key.split('.')[0]][key.split('.')[1]] :
                            (theme.colors as any)[key]
                          }
                          onChange={(e) => updateColor(key, e.target.value)}
                          size="small"
                          sx={{ minWidth: 60 }}
                        />
                        <Typography variant="body2" fontFamily="monospace">
                          {key.includes('.') ? 
                            (theme.colors as any)[key.split('.')[0]][key.split('.')[1]] :
                            (theme.colors as any)[key]
                          }
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Typography */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Typography</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Font Family</InputLabel>
                    <Select
                      value={theme.typography.fontFamily}
                      onChange={(e) => updateTheme({ 
                        typography: { ...theme.typography, fontFamily: e.target.value } 
                      })}
                    >
                      {fontFamilies.map((font) => (
                        <MenuItem key={font} value={font} sx={{ fontFamily: font }}>
                          {font.split(',')[0]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography gutterBottom>Base Font Size: {theme.typography.fontSize}px</Typography>
                  <Slider
                    value={theme.typography.fontSize}
                    onChange={(_, value) => updateTheme({ 
                      typography: { ...theme.typography, fontSize: value as number } 
                    })}
                    min={10}
                    max={24}
                    step={1}
                    marks={[
                      { value: 12, label: '12px' },
                      { value: 14, label: '14px' },
                      { value: 16, label: '16px' },
                      { value: 18, label: '18px' }
                    ]}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Spacing & Shape */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Spacing & Shape</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography gutterBottom>Spacing Unit: {theme.spacing}px</Typography>
                  <Slider
                    value={theme.spacing || 8}
                    onChange={(_, value) => updateTheme({ spacing: value as number })}
                    min={4}
                    max={16}
                    step={1}
                    marks={[
                      { value: 4, label: '4px' },
                      { value: 8, label: '8px' },
                      { value: 12, label: '12px' },
                      { value: 16, label: '16px' }
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography gutterBottom>Border Radius: {theme.borderRadius}px</Typography>
                  <Slider
                    value={theme.borderRadius || 4}
                    onChange={(_, value) => updateTheme({ borderRadius: value as number })}
                    min={0}
                    max={20}
                    step={1}
                    marks={[
                      { value: 0, label: '0px' },
                      { value: 4, label: '4px' },
                      { value: 8, label: '8px' },
                      { value: 12, label: '12px' },
                      { value: 16, label: '16px' }
                    ]}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Preview */}
          <Paper sx={{ 
            p: theme.spacing || 2, 
            backgroundColor: theme.colors.background?.default,
            fontFamily: theme.typography.fontFamily
          }}>
            <Typography variant="h6" gutterBottom>Preview</Typography>
            <Box sx={{ 
              fontFamily: theme.typography.fontFamily,
              '& *': { 
                fontFamily: `${theme.typography.fontFamily} !important`
              }
            }}>
              <Typography 
                variant="h4" 
                color={theme.colors.primary} 
                gutterBottom
                sx={{ 
                  fontSize: theme.typography.h4?.fontSize || `${theme.typography.fontSize * 2}px`,
                  fontWeight: theme.typography.h4?.fontWeight || 600,
                  marginBottom: `${theme.spacing || 2}px`
                }}
              >
                {theme.name}
              </Typography>
              <Typography 
                variant="body1" 
                color={theme.colors.text?.primary} 
                gutterBottom
                sx={{ 
                  fontSize: theme.typography.body1?.fontSize || `${theme.typography.fontSize}px`,
                  lineHeight: theme.typography.body1?.lineHeight || 1.5,
                  marginBottom: `${theme.spacing || 2}px`
                }}
              >
                This is how your theme will look with font size {theme.typography.fontSize}px and spacing unit {theme.spacing || 2}px.
              </Typography>
              <Stack direction="row" spacing={theme.spacing ? theme.spacing / 8 : 1} mt={theme.spacing ? theme.spacing / 8 : 2}>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ 
                    backgroundColor: theme.colors.primary,
                    borderRadius: `${theme.borderRadius}px`,
                    fontSize: `${theme.typography.fontSize * 0.875}px`,
                    padding: `${(theme.spacing || 2) * 0.5}px ${(theme.spacing || 2) * 1}px`,
                    margin: `${(theme.spacing || 2) * 0.25}px`
                  }}
                >
                  Primary
                </Button>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ 
                    backgroundColor: theme.colors.secondary,
                    borderRadius: `${theme.borderRadius}px`,
                    fontSize: `${theme.typography.fontSize * 0.875}px`,
                    padding: `${(theme.spacing || 2) * 0.5}px ${(theme.spacing || 2) * 1}px`,
                    margin: `${(theme.spacing || 2) * 0.25}px`
                  }}
                >
                  Secondary
                </Button>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ 
                    backgroundColor: theme.colors.success,
                    borderRadius: `${theme.borderRadius}px`,
                    fontSize: `${theme.typography.fontSize * 0.875}px`,
                    padding: `${(theme.spacing || 2) * 0.5}px ${(theme.spacing || 2) * 1}px`,
                    margin: `${(theme.spacing || 2) * 0.25}px`
                  }}
                >
                  Success
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={downloadTheme} startIcon={<DownloadIcon />}>
          Download JSON
        </Button>
        <Button onClick={handleApply} variant="contained">
          Apply Theme
        </Button>
      </DialogActions>
    </Dialog>
  );
}