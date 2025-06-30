import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Material-UI Component Library',
  brandUrl: 'https://mui.com/',
  brandTarget: '_self',

  colorPrimary: '#1976d2',
  colorSecondary: '#dc004e',

  // UI
  appBg: '#fafafa',
  appContentBg: '#ffffff',
  appBorderColor: '#e0e0e0',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: '"Roboto Mono", monospace',

  // Text colors
  textColor: '#212121',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#757575',
  barSelectedColor: '#1976d2',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e0e0e0',
  inputTextColor: '#212121',
  inputBorderRadius: 4,
});
