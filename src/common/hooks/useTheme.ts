import { useLayoutEffect, useState } from 'react';

type ThemeProps = 'light' | 'dark';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeProps>(Theme.Light);

  const toggleTheme = () => {
    setTheme(() => (theme == Theme.Dark ? Theme.Light : Theme.Dark));
  };

  useLayoutEffect(() => {
    document.body.classList.add(theme == Theme.Dark ? Theme.Dark : Theme.Light);
    document.body.classList.remove(
      theme == Theme.Dark ? Theme.Light : Theme.Dark
    );
  }, [theme]);

  return { toggleTheme, theme };
};
