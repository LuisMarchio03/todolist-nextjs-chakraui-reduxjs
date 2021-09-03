import { useState } from 'react';

import dark from "../styles/theme/dark";
import light from "../styles/theme/light";

export const useTheme = () =>  {
  const [myTheme, setMyTheme] = useState(dark);

  const toggleTheme = () => {
    setMyTheme(myTheme === dark ? light : dark);
  }

  return { myTheme, toggleTheme };
}