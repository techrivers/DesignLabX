import React, { useState, useCallback } from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Typography, 
  Alert, 
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  Stack
} from '@mui/material';
import { Upload, Download, Palette, Code, Eye } from 'lucide-react';

export interface ThemeConfig {
  name: string;
  description?: string;
  colors: {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    background?: {
      default: string;
      paper: string;
    };
    text?: {
      primary: string;
      secondary: string;
    };
  };
  typography: {
    fontFamily: string;
    fontSize: number;
    h1?: { fontSize: string; fontWeight: number };
    h2?: { fontSize: string; fontWeight: number };
    h3?: { fontSize: string; fontWeight: number };
    h4?: { fontSize: string; fontWeight: number };
    h5?: { fontSize: string; fontWeight: number };
    h6?: { fontSize: string; fontWeight: number };
    body1?: { fontSize: string; lineHeight: number };
    body2?: { fontSize: string; lineHeight: number };
  };
  spacing?: number;
  borderRadius?: number;
  shadows?: string[];
}

interface ThemeUploaderProps {
  onThemeChange: (theme: ThemeConfig | null) => void;
  currentTheme: ThemeConfig | null;
}

export function ThemeUploader({ onThemeChange, currentTheme }: ThemeUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [exampleOpen, setExampleOpen] = useState(false);

  const validateThemeConfig = (config: any): ThemeConfig => {
    if (!config.name || typeof config.name !== 'string') {
      throw new Error('Theme must have a valid name');
    }
    
    if (!config.colors || typeof config.colors !== 'object') {
      throw new Error('Theme must have a colors object');
    }
    
    const requiredColors = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
    for (const color of requiredColors) {
      if (!config.colors[color] || typeof config.colors[color] !== 'string') {
        throw new Error(`Missing or invalid color: ${color}`);
      }
    }
    
    if (!config.typography || typeof config.typography !== 'object') {
      throw new Error('Theme must have a typography object');
    }
    
    if (!config.typography.fontFamily || typeof config.typography.fontFamily !== 'string') {
      throw new Error('Typography must have a valid fontFamily');
    }
    
    if (!config.typography.fontSize || typeof config.typography.fontSize !== 'number') {
      throw new Error('Typography must have a valid fontSize');
    }
    
    return config as ThemeConfig;
  };

  const handleFile = useCallback(async (file: File) => {
    setError(null);
    setSuccess(null);
    
    if (!file.name.endsWith('.json')) {
      setError('Please upload a JSON file');
      return;
    }
    
    try {
      const text = await file.text();
      const config = JSON.parse(text);
      const validatedConfig = validateThemeConfig(config);
      
      onThemeChange(validatedConfig);
      setSuccess(`Theme "${validatedConfig.name}" loaded successfully!`);
    } catch (err) {
      if (err instanceof SyntaxError) {
        setError('Invalid JSON file format');
      } else {
        setError(err instanceof Error ? err.message : 'Failed to load theme');
      }
    }
  }, [onThemeChange]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const downloadExampleTheme = () => {
    const exampleTheme: ThemeConfig = {
      name: "Corporate Blue",
      description: "Professional corporate theme with blue primary colors",
      colors: {
        primary: "#1976d2",
        secondary: "#dc004e",
        error: "#f44336",
        warning: "#ff9800",
        info: "#2196f3",
        success: "#4caf50",
        background: {
          default: "#fafafa",
          paper: "#ffffff"
        },
        text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.6)"
        }
      },
      typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        h1: { fontSize: "2.5rem", fontWeight: 300 },
        h2: { fontSize: "2rem", fontWeight: 300 },
        h3: { fontSize: "1.75rem", fontWeight: 400 },
        h4: { fontSize: "1.5rem", fontWeight: 400 },
        h5: { fontSize: "1.25rem", fontWeight: 400 },
        h6: { fontSize: "1rem", fontWeight: 500 },
        body1: { fontSize: "1rem", lineHeight: 1.5 },
        body2: { fontSize: "0.875rem", lineHeight: 1.43 }
      },
      spacing: 8,
      borderRadius: 4
    };

    const blob = new Blob([JSON.stringify(exampleTheme, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'example-theme.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetTheme = () => {
    onThemeChange(null);
    setSuccess('Reset to default Material-UI theme');
    setError(null);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Card variant="outlined">
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Palette size={20} />
              <Typography variant="h6">
                Theme Configuration
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                size="small" 
                onClick={() => setExampleOpen(true)}
                title="View example JSON format"
              >
                <Code size={16} />
              </IconButton>
              <IconButton 
                size="small" 
                onClick={downloadExampleTheme}
                title="Download example theme"
              >
                <Download size={16} />
              </IconButton>
              {currentTheme && (
                <IconButton 
                  size="small" 
                  onClick={() => setPreviewOpen(true)}
                  title="Preview current theme"
                >
                  <Eye size={16} />
                </IconButton>
              )}
            </Box>
          </Box>

          {currentTheme && (
            <Box sx={{ mb: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <Chip 
                  label={currentTheme.name} 
                  color="primary" 
                  size="small"
                />
                {currentTheme.description && (
                  <Typography variant="body2" color="text.secondary">
                    {currentTheme.description}
                  </Typography>
                )}
              </Stack>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={resetTheme}
                sx={{ mr: 1 }}
              >
                Reset to Default
              </Button>
            </Box>
          )}

          <Box
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            sx={{
              border: dragActive ? '2px dashed #1976d2' : '2px dashed #ccc',
              borderRadius: 2,
              p: 3,
              textAlign: 'center',
              backgroundColor: dragActive ? 'action.hover' : 'background.default',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: '#1976d2',
                backgroundColor: 'action.hover'
              }
            }}
          >
            <Upload size={32} style={{ marginBottom: '8px', opacity: 0.6 }} />
            <Typography variant="body1" gutterBottom>
              Drop your theme JSON file here or click to browse
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Upload a JSON file containing your design system configuration
            </Typography>
            <input
              type="file"
              accept=".json"
              onChange={handleFileInput}
              style={{ display: 'none' }}
              id="theme-upload"
            />
            <label htmlFor="theme-upload">
              <Button variant="contained" component="span" startIcon={<Upload size={16} />}>
                Browse Files
              </Button>
            </label>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mt: 2 }}>
              {success}
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Theme Preview Dialog */}
      <Dialog open={previewOpen} onClose={() => setPreviewOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Current Theme Preview</DialogTitle>
        <DialogContent>
          {currentTheme && (
            <Box>
              <Typography variant="h6" gutterBottom>
                {currentTheme.name}
              </Typography>
              {currentTheme.description && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {currentTheme.description}
                </Typography>
              )}
              
              <Typography variant="subtitle1" gutterBottom>Colors</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {Object.entries(currentTheme.colors).map(([key, value]) => (
                  typeof value === 'string' && (
                    <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          width: 20, 
                          height: 20, 
                          backgroundColor: value, 
                          borderRadius: '50%',
                          border: '1px solid #ccc'
                        }} 
                      />
                      <Typography variant="body2">{key}: {value}</Typography>
                    </Box>
                  )
                ))}
              </Box>
              
              <Typography variant="subtitle1" gutterBottom>Typography</Typography>
              <Typography variant="body2">
                Font Family: {currentTheme.typography.fontFamily}
              </Typography>
              <Typography variant="body2">
                Base Font Size: {currentTheme.typography.fontSize}px
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Example JSON Dialog */}
      <Dialog open={exampleOpen} onClose={() => setExampleOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Example Theme JSON Format</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            fullWidth
            rows={20}
            variant="outlined"
            value={`{
  "name": "Your Theme Name",
  "description": "Optional description of your theme",
  "colors": {
    "primary": "#1976d2",
    "secondary": "#dc004e", 
    "error": "#f44336",
    "warning": "#ff9800",
    "info": "#2196f3",
    "success": "#4caf50",
    "background": {
      "default": "#fafafa",
      "paper": "#ffffff"
    },
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.6)"
    }
  },
  "typography": {
    "fontFamily": "\\"Roboto\\", \\"Helvetica\\", \\"Arial\\", sans-serif",
    "fontSize": 14,
    "h1": { "fontSize": "2.5rem", "fontWeight": 300 },
    "h2": { "fontSize": "2rem", "fontWeight": 300 },
    "h3": { "fontSize": "1.75rem", "fontWeight": 400 },
    "body1": { "fontSize": "1rem", "lineHeight": 1.5 },
    "body2": { "fontSize": "0.875rem", "lineHeight": 1.43 }
  },
  "spacing": 8,
  "borderRadius": 4
}`}
            InputProps={{
              readOnly: true,
              sx: { fontFamily: 'monospace', fontSize: '0.8rem' }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={downloadExampleTheme} startIcon={<Download size={16} />}>
            Download Example
          </Button>
          <Button onClick={() => setExampleOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}