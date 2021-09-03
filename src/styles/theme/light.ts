import { theme } from '@chakra-ui/theme'

const customTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  colors: {
    ...theme.colors,
    white: '#a0a0ab',
    blue: {
      300: 'hsl(192, 100%, 67%)',
      400: 'hsl(220, 98%, 61%)',
    },
    purple: {
      ...theme.colors.purple,
      500: '#8257e5',
    },
    pink: {
      500: 'hsl(280, 87%, 65%)',
    },
    gray: {
      ...theme.colors.gray,
      400: '#a0a0ab',
      600: '#e7e7ea',
      700: '#ffffff',
      800: '#fafafa'
    },
  },
}

export default customTheme;