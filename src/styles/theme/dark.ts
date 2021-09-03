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
    white: '#fffef9',
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
      400: '#888aa1',
      700: '#25273c',
      800: '#181824'
    },
  },
  body: {},
}

export default customTheme;