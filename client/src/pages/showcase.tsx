import React, { useState } from 'react';
import { Link } from 'wouter';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  TextField, 
  InputAdornment,
  Tabs,
  Tab,
  Container,
  Button
} from '@mui/material';
import { Search, ArrowRight } from 'lucide-react';
import { ThemeUploader } from '../components/theme/ThemeUploader';
import { useDynamicTheme } from '../components/theme/DynamicThemeProvider';

interface ComponentInfo {
  name: string;
  description: string;
  category: string;
  variants: string[];
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
}

const componentData: ComponentInfo[] = [
  // Input Components
  { name: "Button", description: "Clickable button with multiple variants", category: "Input Components", variants: ["Contained", "Outlined", "Text"], difficulty: "Basic" },
  { name: "TextField", description: "Text input field with validation", category: "Input Components", variants: ["Outlined", "Filled", "Standard"], difficulty: "Basic" },
  { name: "Checkbox", description: "Binary choice input", category: "Input Components", variants: ["Basic", "With Label", "Indeterminate"], difficulty: "Basic" },
  { name: "Select", description: "Dropdown selection component", category: "Input Components", variants: ["Basic", "Multiple", "Native"], difficulty: "Basic" },
  { name: "Radio", description: "Single choice from options", category: "Input Components", variants: ["Basic", "With Label", "Controlled"], difficulty: "Basic" },
  { name: "Switch", description: "Toggle between two states", category: "Input Components", variants: ["Basic", "With Label", "Disabled"], difficulty: "Basic" },
  { name: "Slider", description: "Range input component", category: "Input Components", variants: ["Continuous", "Discrete", "Range"], difficulty: "Intermediate" },
  { name: "Rating", description: "Star rating component", category: "Input Components", variants: ["Basic", "Half Rating", "Custom Icons"], difficulty: "Intermediate" },
  { name: "Autocomplete", description: "Input with auto-suggestions", category: "Input Components", variants: ["Basic", "Multiple", "Async"], difficulty: "Advanced" },

  // Data Display
  { name: "Table", description: "Data table with sorting", category: "Data Display", variants: ["Basic", "Dense", "Enhanced"], difficulty: "Advanced" },
  { name: "Card", description: "Content container", category: "Data Display", variants: ["Basic", "Media", "Actions"], difficulty: "Basic" },
  { name: "List", description: "Vertical list of items", category: "Data Display", variants: ["Simple", "Nested", "Interactive"], difficulty: "Intermediate" },
  { name: "Chip", description: "Compact element for tags", category: "Data Display", variants: ["Basic", "Deletable", "Clickable"], difficulty: "Basic" },
  { name: "Avatar", description: "User profile image/icon", category: "Data Display", variants: ["Image", "Letter", "Icon"], difficulty: "Basic" },
  { name: "Badge", description: "Small status indicator", category: "Data Display", variants: ["Basic", "Dot", "Max"], difficulty: "Basic" },
  { name: "Typography", description: "Text styling component", category: "Data Display", variants: ["Headers", "Body", "Display"], difficulty: "Basic" },
  { name: "Accordion", description: "Expandable content sections", category: "Data Display", variants: ["Basic", "Controlled", "Detailed"], difficulty: "Intermediate" },

  // Navigation
  { name: "AppBar", description: "Application header bar", category: "Navigation", variants: ["Basic", "Dense", "Prominent"], difficulty: "Intermediate" },
  { name: "Drawer", description: "Side navigation panel", category: "Navigation", variants: ["Temporary", "Permanent", "Persistent"], difficulty: "Intermediate" },
  { name: "Tabs", description: "Tab-based navigation", category: "Navigation", variants: ["Basic", "Scrollable", "Vertical"], difficulty: "Intermediate" },
  { name: "Menu", description: "Contextual action menu", category: "Navigation", variants: ["Basic", "Selected", "Max Height"], difficulty: "Intermediate" },

  // Feedback
  { name: "Alert", description: "Important message display", category: "Feedback", variants: ["Severity", "Actions", "Icons"], difficulty: "Basic" },
  { name: "Dialog", description: "Modal dialog window", category: "Feedback", variants: ["Basic", "Form", "Full Screen"], difficulty: "Intermediate" },
  { name: "Snackbar", description: "Brief message notification", category: "Feedback", variants: ["Basic", "Action", "Positioned"], difficulty: "Intermediate" },
  { name: "Progress", description: "Loading progress indicator", category: "Feedback", variants: ["Circular", "Linear", "Buffer"], difficulty: "Basic" },

  // Layout
  { name: "Grid", description: "Responsive grid system", category: "Layout", variants: ["Basic", "Spacing", "Breakpoints"], difficulty: "Intermediate" },
  { name: "Container", description: "Content container", category: "Layout", variants: ["Fixed", "Fluid", "Breakpoints"], difficulty: "Basic" },
  { name: "Box", description: "Flexible wrapper component", category: "Layout", variants: ["Basic", "System Props", "Component"], difficulty: "Basic" },
  { name: "Stack", description: "One-dimensional layout", category: "Layout", variants: ["Basic", "Direction", "Responsive"], difficulty: "Basic" }
];

const categories = ["All", "Input Components", "Data Display", "Navigation", "Feedback", "Layout"];

export default function ShowcasePage() {
  const { currentTheme, setTheme: setDynamicTheme } = useDynamicTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredComponents = componentData.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Basic': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'default';
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Material-UI Component Showcase
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Explore our comprehensive collection of {componentData.length} Material-UI components. 
          Upload your company's theme to see how all components look with your brand colors and typography.
        </Typography>

        {/* Theme Uploader */}
        <ThemeUploader
          onThemeChange={setDynamicTheme}
          currentTheme={currentTheme}
        />
      </Box>

      {/* Search and Filters */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search components..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={20} />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        <Tabs 
          value={selectedCategory} 
          onChange={(_, value) => setSelectedCategory(value)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((category) => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>
      </Box>

      {/* Results Count */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Showing {filteredComponents.length} of {componentData.length} components
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        {searchTerm && ` matching "${searchTerm}"`}
      </Typography>

      {/* Component Grid */}
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)'
          },
          gap: 3,
          mb: 4
        }}
      >
        {filteredComponents.map((component) => (
          <Card 
            key={component.name}
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography variant="h6" component="h2">
                  {component.name}
                </Typography>
                <Chip 
                  label={component.difficulty} 
                  size="small" 
                  color={getDifficultyColor(component.difficulty) as any}
                  variant="outlined"
                />
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {component.description}
              </Typography>

              <Chip 
                label={component.category} 
                size="small" 
                variant="outlined"
                sx={{ mb: 2 }}
              />

              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                Variants: {component.variants.join(', ')}
              </Typography>

              <Link href={`/storybook?component=${component.name}`}>
                <Button
                  variant="outlined"
                  fullWidth
                  endIcon={<ArrowRight size={16} />}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText'
                    }
                  }}
                >
                  Explore Component
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* No Results */}
      {filteredComponents.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" gutterBottom>
            No components found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your search term or category filter
          </Typography>
        </Box>
      )}

      {/* Footer Stats */}
      <Box sx={{ mt: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: 3,
            textAlign: 'center'
          }}
        >
          <Box>
            <Typography variant="h4" color="primary">
              {componentData.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Components
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" color="primary">
              {categories.length - 1}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Categories
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" color="primary">
              {componentData.filter(c => c.difficulty === 'Basic').length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Basic Components
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" color="primary">
              100%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Theme Compatible
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Navigation to Full Storybook */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Link href="/storybook">
          <Button 
            variant="contained" 
            size="large"
            endIcon={<ArrowRight size={20} />}
          >
            View Full Interactive Storybook
          </Button>
        </Link>
      </Box>
    </Container>
  );
}