# Material-UI Component Storybook

A comprehensive React component library and design system management platform featuring 60+ interactive Material-UI components with enterprise theme customization capabilities.

![Project Status](https://img.shields.io/badge/Status-Production%20Ready-green)
![React](https://img.shields.io/badge/React-18.2+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Material-UI](https://img.shields.io/badge/Material--UI-5.14+-purple)

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm 8.0 or higher

### Installation
```bash
git clone <repository-url>
cd material-ui-storybook
npm install
npm run dev
```

Visit `http://localhost:5000` to explore the component library.

## ✨ Features

### 🎨 Enterprise Theme Management
- **JSON Theme Upload**: Upload custom design system configurations
- **Live Theme Preview**: See all components update instantly with your brand colors
- **Theme Gallery**: 6 pre-designed professional themes (Corporate, Modern, Minimalist, etc.)
- **Theme Export**: Download theme configurations as JSON files

### 📚 Comprehensive Component Library
- **60+ Material-UI Components** organized by category:
  - Input Components (12): Button, TextField, Checkbox, Select, Radio, Switch, etc.
  - Data Display (12): Table, Card, List, Chip, Avatar, Badge, Typography, etc.
  - Navigation (10): AppBar, Drawer, Tabs, Breadcrumbs, Stepper, etc.
  - Feedback (8): Alert, Dialog, Snackbar, Progress, Skeleton, etc.
  - Layout (10): Grid, Container, Box, Stack, Divider, Paper, etc.

### 🛠️ Developer Tools
- **Interactive Controls**: Real-time component property manipulation
- **Live Preview**: See changes instantly as you adjust settings
- **Code Export**: Generate production-ready TypeScript components
- **Copy Code**: Quick JSX snippets for immediate use
- **Documentation**: Comprehensive props, accessibility, and usage guides

### 🎯 Advanced Features
- **Responsive Design**: Mobile and tablet optimized interface
- **Dark Mode Support**: Toggle between light and dark themes
- **Search & Filter**: Find components quickly by category or name
- **Code Roadmap**: Navigate source files with detailed file location guides
- **Accessibility**: WCAG 2.1 AA compliant components and documentation

## 📖 Documentation

### Core Documentation
- **[Requirements Document](PROJECT_REQUIREMENTS.md)** - Complete functional and technical requirements
- **[Technical Architecture](TECHNICAL_ARCHITECTURE.md)** - System design and architecture details
- **[Deployment Guide](DEPLOYMENT_GUIDE.md)** - Production deployment and setup instructions

### Quick References
- **[Project Overview](replit.md)** - Current project state and architecture summary
- **Component Stories** - Located in `client/src/stories/`
- **Theme Examples** - Example configurations in root directory

## 🏗️ Project Structure

```
├── client/                     # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── storybook/      # Storybook interface components
│   │   │   ├── theme/          # Theme management system
│   │   │   └── ui/             # Custom UI components
│   │   ├── stories/            # Component story definitions
│   │   ├── pages/              # Application pages
│   │   └── hooks/              # Custom React hooks
├── server/                     # Express.js backend
│   ├── index.ts               # Main server entry point
│   ├── routes.ts              # API route definitions
│   ├── storage.ts             # Storage interface and implementations
│   └── vite.ts                # Vite development integration
├── shared/                     # Shared types and schemas
│   └── schema.ts              # Database and validation schemas
├── PROJECT_REQUIREMENTS.md     # Complete requirements documentation
├── TECHNICAL_ARCHITECTURE.md  # System architecture guide
└── DEPLOYMENT_GUIDE.md        # Production deployment instructions
```

## 🎯 Use Cases

### For Developers
- **Component Reference**: Quick access to Material-UI component examples
- **Code Generation**: Export ready-to-use TypeScript components
- **Theme Testing**: Test components with custom brand themes
- **Documentation**: Comprehensive prop and usage documentation

### For Design Teams
- **Brand Application**: Upload design system configurations
- **Visual Preview**: See entire component library with brand styling
- **Theme Management**: Create and manage multiple theme variations
- **Consistency Check**: Ensure components work across different themes

### For Enterprises
- **Design System Management**: Centralized component library management
- **Brand Consistency**: Ensure all components follow brand guidelines
- **Developer Onboarding**: Comprehensive documentation and examples
- **Quality Assurance**: Test components across different configurations

## 🛠️ Technology Stack

### Frontend
- **React 18.2+** with TypeScript for component development
- **Material-UI 5.14+** for comprehensive component library
- **Vite 4.0+** for fast development and optimized builds
- **Tailwind CSS** for utility styling and responsive design
- **React Query** for server state management

### Backend
- **Node.js 18+** with Express.js framework
- **TypeScript** for type-safe backend development
- **PostgreSQL** with Drizzle ORM for production database
- **In-memory storage** for development and testing

### Development Tools
- **ESLint & Prettier** for code quality and formatting
- **Vitest** for unit testing
- **Playwright** for end-to-end testing
- **Replit Deployments** for cloud hosting

## 🚀 Deployment Options

### Cloud Platforms
- **Replit Deployments** (Recommended) - One-click deployment
- **Vercel** - Frontend-optimized deployment
- **Railway** - Full-stack application hosting
- **DigitalOcean App Platform** - Scalable cloud deployment

### Self-Hosting
- **Docker** - Containerized deployment
- **Traditional VPS** - Manual server setup
- **Kubernetes** - Container orchestration

See the [Deployment Guide](DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run tests
npm run lint         # Run ESLint
npm run db:push      # Deploy database schema
```

### Adding New Components
1. Create story file in `client/src/stories/ComponentName.stories.tsx`
2. Add controls in `client/src/components/storybook/ControlsPanel.tsx`
3. Update component preview in `client/src/components/storybook/ComponentPreview.tsx`
4. Add documentation in `client/src/components/storybook/DocumentationPanel.tsx`

### Theme Development
1. Create theme configuration JSON following the schema in `client/src/components/theme/ThemeUploader.tsx`
2. Test theme upload through the showcase page
3. Verify all components render correctly with the new theme
4. Export and save theme configuration for future use

## 🤝 Contributing

### Development Guidelines
1. Follow TypeScript strict mode requirements
2. Maintain component story completeness
3. Ensure theme compatibility for all components
4. Add comprehensive documentation for new features
5. Test across multiple viewport sizes

### Code Quality
- **Type Safety**: All code must be TypeScript with proper type definitions
- **Testing**: Unit tests required for new functionality
- **Documentation**: Update relevant documentation files
- **Accessibility**: Ensure WCAG 2.1 AA compliance

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Material-UI Team** for the comprehensive React component library
- **React Team** for the powerful frontend framework
- **TypeScript Team** for enhanced developer experience
- **Vite Team** for fast build tooling

## 📞 Support

### Documentation
- Check the [Requirements Document](PROJECT_REQUIREMENTS.md) for feature specifications
- Review the [Technical Architecture](TECHNICAL_ARCHITECTURE.md) for system details
- Follow the [Deployment Guide](DEPLOYMENT_GUIDE.md) for setup instructions

### Common Issues
- **Theme Upload Problems**: Ensure JSON follows the schema in ThemeUploader.tsx
- **Component Rendering Issues**: Check browser console for TypeScript errors
- **Performance Issues**: Enable production build for performance testing
- **Database Connection**: Verify DATABASE_URL environment variable

### Getting Help
1. Check existing documentation files
2. Review component story examples
3. Examine the code roadmap in the documentation panel
4. Test with different themes to isolate issues

---

**Built with ❤️ for developers and design teams**

Last Updated: July 4, 2025