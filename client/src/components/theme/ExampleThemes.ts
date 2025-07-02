import { ThemeConfig } from './ThemeUploader';

export const exampleThemes: Record<string, ThemeConfig> = {
  "corporate-blue": {
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
  },

  "modern-purple": {
    name: "Modern Purple",
    description: "Modern design system with purple accent and contemporary typography",
    colors: {
      primary: "#7c3aed",
      secondary: "#ec4899",
      error: "#ef4444",
      warning: "#f59e0b",
      info: "#3b82f6",
      success: "#10b981",
      background: {
        default: "#ffffff",
        paper: "#f9fafb"
      },
      text: {
        primary: "rgba(0, 0, 0, 0.9)",
        secondary: "rgba(0, 0, 0, 0.7)"
      }
    },
    typography: {
      fontFamily: '"Inter", "system-ui", "sans-serif"',
      fontSize: 14,
      h1: { fontSize: "3rem", fontWeight: 700 },
      h2: { fontSize: "2.25rem", fontWeight: 600 },
      h3: { fontSize: "1.875rem", fontWeight: 600 },
      h4: { fontSize: "1.5rem", fontWeight: 500 },
      h5: { fontSize: "1.25rem", fontWeight: 500 },
      h6: { fontSize: "1.125rem", fontWeight: 500 },
      body1: { fontSize: "1rem", lineHeight: 1.6 },
      body2: { fontSize: "0.875rem", lineHeight: 1.5 }
    },
    spacing: 8,
    borderRadius: 8
  },

  "minimalist-green": {
    name: "Minimalist Green",
    description: "Clean minimalist theme with green accents for sustainability-focused brands",
    colors: {
      primary: "#059669",
      secondary: "#0891b2",
      error: "#dc2626",
      warning: "#d97706",
      info: "#0284c7",
      success: "#16a34a",
      background: {
        default: "#ffffff",
        paper: "#ffffff"
      },
      text: {
        primary: "#111827",
        secondary: "#6b7280"
      }
    },
    typography: {
      fontFamily: '"Source Sans Pro", "Arial", sans-serif',
      fontSize: 16,
      h1: { fontSize: "2.25rem", fontWeight: 300 },
      h2: { fontSize: "1.875rem", fontWeight: 400 },
      h3: { fontSize: "1.5rem", fontWeight: 400 },
      h4: { fontSize: "1.25rem", fontWeight: 500 },
      h5: { fontSize: "1.125rem", fontWeight: 500 },
      h6: { fontSize: "1rem", fontWeight: 600 },
      body1: { fontSize: "1rem", lineHeight: 1.7 },
      body2: { fontSize: "0.875rem", lineHeight: 1.6 }
    },
    spacing: 12,
    borderRadius: 6
  },

  "dark-orange": {
    name: "Dark Orange",
    description: "Bold dark theme with orange accents for creative and tech companies",
    colors: {
      primary: "#ea580c",
      secondary: "#8b5cf6",
      error: "#ef4444",
      warning: "#f59e0b",
      info: "#06b6d4",
      success: "#22c55e",
      background: {
        default: "#0f172a",
        paper: "#1e293b"
      },
      text: {
        primary: "#f8fafc",
        secondary: "#cbd5e1"
      }
    },
    typography: {
      fontFamily: '"JetBrains Mono", "Monaco", "Consolas", monospace',
      fontSize: 14,
      h1: { fontSize: "2.5rem", fontWeight: 700 },
      h2: { fontSize: "2rem", fontWeight: 600 },
      h3: { fontSize: "1.75rem", fontWeight: 600 },
      h4: { fontSize: "1.5rem", fontWeight: 500 },
      h5: { fontSize: "1.25rem", fontWeight: 500 },
      h6: { fontSize: "1rem", fontWeight: 600 },
      body1: { fontSize: "0.875rem", lineHeight: 1.6 },
      body2: { fontSize: "0.8rem", lineHeight: 1.5 }
    },
    spacing: 8,
    borderRadius: 4
  },

  "financial-navy": {
    name: "Financial Navy",
    description: "Professional navy blue theme for financial and banking applications",
    colors: {
      primary: "#1e40af",
      secondary: "#059669",
      error: "#dc2626",
      warning: "#d97706",
      info: "#0284c7",
      success: "#16a34a",
      background: {
        default: "#f8fafc",
        paper: "#ffffff"
      },
      text: {
        primary: "#1e293b",
        secondary: "#475569"
      }
    },
    typography: {
      fontFamily: '"IBM Plex Sans", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      h1: { fontSize: "2.25rem", fontWeight: 500 },
      h2: { fontSize: "1.875rem", fontWeight: 500 },
      h3: { fontSize: "1.5rem", fontWeight: 500 },
      h4: { fontSize: "1.25rem", fontWeight: 500 },
      h5: { fontSize: "1.125rem", fontWeight: 500 },
      h6: { fontSize: "1rem", fontWeight: 600 },
      body1: { fontSize: "0.875rem", lineHeight: 1.5 },
      body2: { fontSize: "0.8rem", lineHeight: 1.4 }
    },
    spacing: 8,
    borderRadius: 3
  },

  "healthcare-teal": {
    name: "Healthcare Teal",
    description: "Calming teal theme designed for healthcare and wellness applications",
    colors: {
      primary: "#0d9488",
      secondary: "#7c3aed",
      error: "#dc2626",
      warning: "#d97706",
      info: "#0284c7",
      success: "#16a34a",
      background: {
        default: "#f0fdfa",
        paper: "#ffffff"
      },
      text: {
        primary: "#134e4a",
        secondary: "#0f766e"
      }
    },
    typography: {
      fontFamily: '"Open Sans", "Segoe UI", "Arial", sans-serif',
      fontSize: 15,
      h1: { fontSize: "2.5rem", fontWeight: 400 },
      h2: { fontSize: "2rem", fontWeight: 400 },
      h3: { fontSize: "1.75rem", fontWeight: 500 },
      h4: { fontSize: "1.5rem", fontWeight: 500 },
      h5: { fontSize: "1.25rem", fontWeight: 500 },
      h6: { fontSize: "1rem", fontWeight: 600 },
      body1: { fontSize: "1rem", lineHeight: 1.6 },
      body2: { fontSize: "0.875rem", lineHeight: 1.5 }
    },
    spacing: 10,
    borderRadius: 8
  }
};

export function downloadTheme(themeKey: string) {
  const theme = exampleThemes[themeKey];
  if (!theme) return;

  const blob = new Blob([JSON.stringify(theme, null, 2)], { 
    type: 'application/json' 
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${themeKey}-theme.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadAllThemes() {
  Object.keys(exampleThemes).forEach(key => {
    setTimeout(() => downloadTheme(key), 100 * Object.keys(exampleThemes).indexOf(key));
  });
}