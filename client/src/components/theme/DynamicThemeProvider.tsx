import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
import { ThemeConfig } from './ThemeUploader';

interface DynamicThemeContextType {
  currentTheme: ThemeConfig | null;
  setTheme: (theme: ThemeConfig | null) => void;
  muiTheme: Theme;
}

const DynamicThemeContext = createContext<DynamicThemeContextType | undefined>(undefined);

export const useDynamicTheme = () => {
  const context = useContext(DynamicThemeContext);
  if (!context) {
    throw new Error('useDynamicTheme must be used within a DynamicThemeProvider');
  }
  return context;
};

interface DynamicThemeProviderProps {
  children: React.ReactNode;
}

export function DynamicThemeProvider({ children }: DynamicThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig | null>(null);

  // Convert ThemeConfig to Material-UI theme
  const createMuiTheme = (themeConfig: ThemeConfig | null) => {
    if (!themeConfig) {
      // Return default Material-UI theme
      return createTheme();
    }

    const theme = createTheme({
      palette: {
        primary: {
          main: themeConfig.colors.primary,
        },
        secondary: {
          main: themeConfig.colors.secondary,
        },
        error: {
          main: themeConfig.colors.error,
        },
        warning: {
          main: themeConfig.colors.warning,
        },
        info: {
          main: themeConfig.colors.info,
        },
        success: {
          main: themeConfig.colors.success,
        },
        ...(themeConfig.colors.background && {
          background: {
            default: themeConfig.colors.background.default,
            paper: themeConfig.colors.background.paper,
          },
        }),
        ...(themeConfig.colors.text && {
          text: {
            primary: themeConfig.colors.text.primary,
            secondary: themeConfig.colors.text.secondary,
          },
        }),
      },
      typography: {
        fontFamily: themeConfig.typography.fontFamily,
        fontSize: themeConfig.typography.fontSize,
        ...(themeConfig.typography.h1 && {
          h1: {
            fontSize: themeConfig.typography.h1.fontSize,
            fontWeight: themeConfig.typography.h1.fontWeight,
          },
        }),
        ...(themeConfig.typography.h2 && {
          h2: {
            fontSize: themeConfig.typography.h2.fontSize,
            fontWeight: themeConfig.typography.h2.fontWeight,
          },
        }),
        ...(themeConfig.typography.h3 && {
          h3: {
            fontSize: themeConfig.typography.h3.fontSize,
            fontWeight: themeConfig.typography.h3.fontWeight,
          },
        }),
        ...(themeConfig.typography.h4 && {
          h4: {
            fontSize: themeConfig.typography.h4.fontSize,
            fontWeight: themeConfig.typography.h4.fontWeight,
          },
        }),
        ...(themeConfig.typography.h5 && {
          h5: {
            fontSize: themeConfig.typography.h5.fontSize,
            fontWeight: themeConfig.typography.h5.fontWeight,
          },
        }),
        ...(themeConfig.typography.h6 && {
          h6: {
            fontSize: themeConfig.typography.h6.fontSize,
            fontWeight: themeConfig.typography.h6.fontWeight,
          },
        }),
        ...(themeConfig.typography.body1 && {
          body1: {
            fontSize: themeConfig.typography.body1.fontSize,
            lineHeight: themeConfig.typography.body1.lineHeight,
          },
        }),
        ...(themeConfig.typography.body2 && {
          body2: {
            fontSize: themeConfig.typography.body2.fontSize,
            lineHeight: themeConfig.typography.body2.lineHeight,
          },
        }),
      },
      ...(themeConfig.spacing && {
        spacing: themeConfig.spacing,
      }),
      shape: {
        ...(themeConfig.borderRadius && {
          borderRadius: themeConfig.borderRadius,
        }),
      },
      ...(themeConfig.shadows && {
        shadows: [
          'none',
          ...themeConfig.shadows.slice(0, 24), // Material-UI expects 25 shadow values
        ] as any,
      }),
    });

    return theme;
  };

  const [muiTheme, setMuiTheme] = useState(() => createMuiTheme(null));

  const setTheme = (theme: ThemeConfig | null) => {
    setCurrentTheme(theme);
    const newMuiTheme = createMuiTheme(theme);
    setMuiTheme(newMuiTheme);
    
    // Save to localStorage for persistence
    if (theme) {
      localStorage.setItem('customTheme', JSON.stringify(theme));
    } else {
      localStorage.removeItem('customTheme');
    }
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('customTheme');
    if (savedTheme) {
      try {
        const themeConfig = JSON.parse(savedTheme);
        setCurrentTheme(themeConfig);
        setMuiTheme(createMuiTheme(themeConfig));
      } catch (error) {
        console.error('Failed to load saved theme:', error);
        localStorage.removeItem('customTheme');
      }
    }
  }, []);

  const contextValue: DynamicThemeContextType = {
    currentTheme,
    setTheme,
    muiTheme,
  };

  return (
    <DynamicThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </DynamicThemeContext.Provider>
  );
}