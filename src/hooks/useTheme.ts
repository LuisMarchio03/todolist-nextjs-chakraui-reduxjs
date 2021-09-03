import { useState } from 'react';

import dark from "../styles/theme/dark";
import light from "../styles/theme/light";

export const useTheme = () =>  {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  }

  return { theme, toggleTheme };
}