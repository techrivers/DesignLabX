# Material-UI Component Storybook

## Overview

This is a full-stack application built with React, Express, and Material-UI that serves as an enterprise-ready component library and storybook for Material-UI components. The project demonstrates a comprehensive set of Material-UI components with interactive documentation, controls, live preview capabilities, and dynamic theme management for company design systems. Companies can upload their JSON design system configurations to instantly see all components styled with their brand colors, typography, and theme settings.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Material-UI (MUI) for component library
- **Component Documentation**: Custom Storybook-like interface for component exploration
- **Styling**: 
  - Tailwind CSS for utility classes and layout
  - Material-UI theme system for component styling
  - CSS variables for consistent theming
- **State Management**: React hooks with Context API for component state
- **Data Fetching**: TanStack React Query for server state management
- **Routing**: Wouter for client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for hot reloading
- **Storage**: In-memory storage implementation with interface for future database integration

### Project Structure
- `client/` - Frontend React application
- `server/` - Backend Express API
- `shared/` - Shared types and schemas between frontend and backend
- `.storybook/` - Storybook configuration (currently configured but not actively used)

## Key Components

### Custom Storybook Interface
- **StorybookLayout**: Main layout component that orchestrates the entire storybook experience
- **Sidebar**: Component navigation with categorized component library
- **ComponentPreview**: Live preview of Material-UI components with real-time property updates
- **ControlsPanel**: Interactive controls for modifying component properties
- **DocumentationPanel**: Comprehensive documentation with props, accessibility guidelines, and usage examples

### Material-UI Integration
- **ThemeProvider**: Custom theme provider wrapping Material-UI's theme system
- **Component Stories**: Individual story files for each Material-UI component (Button, TextField, Card, etc.)
- **Comprehensive Coverage**: Stories for Input Components, Data Display, Navigation, Feedback, and Layout categories

### UI Components Library
- **Shadcn/ui Components**: Complete set of accessible UI components built on Radix UI primitives
- **Custom Hooks**: Utilities like `useIsMobile` and `useToast` for responsive design and user feedback

## Data Flow

1. **Component Selection**: User selects a component from the sidebar navigation
2. **Story Loading**: Application loads the appropriate story configuration and controls
3. **Live Preview**: Component renders in the preview area with current property settings
4. **Interactive Controls**: User modifies component properties through the controls panel
5. **Real-time Updates**: Preview updates immediately to reflect property changes
6. **Documentation**: Contextual documentation displays component information, props, and accessibility guidelines

## External Dependencies

### Core Dependencies
- **@mui/material**: Material-UI component library and theming system
- **@radix-ui/***: Accessible primitives for custom UI components
- **@tanstack/react-query**: Server state management and data fetching
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect support
- **@neondatabase/serverless**: Serverless PostgreSQL database adapter

### Development Dependencies
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Storybook**: Component development environment (configured for future use)

### Database Configuration
- **Drizzle ORM**: Configured for PostgreSQL with schema in `shared/schema.ts`
- **Migration Support**: Database migrations configured in `./migrations` directory
- **Environment Variables**: Database connection via `DATABASE_URL` environment variable

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite builds the React application to `dist/public`
- **Backend Build**: esbuild bundles the Express server to `dist/index.js`
- **Production Assets**: Static assets served by Express in production mode

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and Express API
- **Production**: Serves built React app and API from single Express server
- **Database**: PostgreSQL database (Neon) with connection pooling

### Scripts
- `npm run dev`: Development mode with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Database schema deployment

## Changelog
- June 30, 2025. Initial setup with React Storybook v8 and complete Material-UI component library
- June 30, 2025. Added comprehensive component collection including:
  - Input Components: Button, TextField, Checkbox, Select, Radio, Switch, Slider, Rating, Autocomplete, ToggleButton, ButtonGroup, Fab
  - Data Display: Table, Card, List, Chip, Avatar, Badge, Tooltip, Typography, Accordion, Timeline, TreeView
  - Navigation: AppBar, Drawer, Tabs, Breadcrumbs, Stepper, BottomNavigation, Menu, Pagination, SpeedDial
  - Feedback: Alert, Dialog, Snackbar, Progress, Skeleton, Backdrop, CircularProgress, LinearProgress
  - Layout: Grid, Container, Box, Stack, Divider, Paper, ImageList
  - Surfaces: AppBar, Paper, Card, Accordion
  - Utils: ClickAwayListener, Portal, TextareaAutosize, Popper, Grow, Fade, Slide, Zoom
- July 2, 2025. Added enterprise theme management system:
  - JSON theme upload capability for company design systems
  - Dynamic theme application that updates all Material-UI components instantly
  - Theme gallery with 6 pre-designed professional themes (Corporate Blue, Modern Purple, Minimalist Green, Dark Orange, Financial Navy, Healthcare Teal)
  - Persistent theme storage in localStorage
  - Theme validation and error handling
  - Download functionality for example themes and custom configurations
- July 2, 2025. Added comprehensive component showcase page:
  - Created searchable grid of all Material-UI components with descriptions and difficulty levels
  - Added category filtering (Input Components, Data Display, Navigation, Feedback, Layout)
  - Integrated theme uploader as the main entry point for theme management
  - Removed theme configuration from storybook interface for cleaner UX
  - Made showcase page the default homepage with direct component navigation

## User Preferences

Preferred communication style: Simple, everyday language.
Request: Complete all Material-UI components with comprehensive stories and documentation.