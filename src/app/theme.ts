// theme/theme.ts
import { MantineColorsTuple, createTheme } from '@mantine/core';

// Define your custom colors
const cream: MantineColorsTuple = [
  '#fdf9f8',
  '#fdf3f1', // Your base cream color
  '#fbeee9',
  '#f8e8e1',
  '#f5e2d9',
  '#f2ddd1',
  '#efd7c9',
  '#ecd1c1',
  '#e9ccb9',
  '#e6c6b1'
];

const peach: MantineColorsTuple = [
  '#fff5ef',
  '#ffebda',
  '#ffe0c5',
  '#fed5b0',
  '#feca9b',
  '#febc94', // Your base peach color
  '#e5a685',
  '#cc9076',
  '#b27a67',
  '#996458'
];

const darkBlue: MantineColorsTuple = [
  '#f6f7fa',
  '#e8ebf0',
  '#d9dfe6',
  '#cad3dc',
  '#bbc7d2',
  '#acbbc8',
  '#7a8ba3',
  '#525f7a',
  '#353a52',
  '#252b42' // Your base dark blue color
];

const red: MantineColorsTuple = [
  '#fdf2f2',
  '#f8d7d5',
  '#f3bcb8',
  '#ee9f9a',
  '#e9847d',
  '#e46960',
  '#c44c42',
  '#a01a10', // Your base red color
  '#7d150d',
  '#5a0f09'
];

const green: MantineColorsTuple = [
  '#f5f9f3',
  '#e8f2e2',
  '#dbebd1',
  '#cee4c0',
  '#c1ddaf',
  '#b4d69e',
  '#a4c98d',
  '#96ba7b', // Your base green color
  '#7ea069',
  '#668657'
];

const gray: MantineColorsTuple = [
  '#f8f8f8',
  '#e9e9e9',
  '#dadada',
  '#cbcbcb',
  '#bcbcbc',
  '#adadad',
  '#9e9e9e',
  '#8f8f8f',
  '#808080',
  '#737373' // Your base gray color
];

export const theme = createTheme({
  colors: {
    cream,
    peach,
    darkBlue,
    red,
    green,
    gray,
  },
  primaryColor: 'darkBlue',
  primaryShade: 9,
  
  // Optional: Set default colors for various components
  defaultGradient: {
    from: 'peach.5',
    to: 'red.7',
    deg: 45,
  },

  // Optional: Customize specific component styles
  components: {
    Button: {
      defaultProps: {
        variant: 'filled',
      },
    },
    Paper: {
      defaultProps: {
        bg: 'cream.1',
      },
    },
    AppShell: {
      defaultProps: {
        bg: 'cream.0',
      },
    },
  },

  // Optional: Custom font settings
  fontFamily: 'Inter, system-ui, sans-serif',
  headings: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});

// Export individual colors for direct use
export const colors = {
  cream: '#FDF3F1',
  peach: '#FEBC94',
  darkBlue: '#252B42',
  red: '#A01A10',
  green: '#96BA7B',
  gray: '#737373',
};