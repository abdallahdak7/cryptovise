import './styles.css';

import { HalfMoonSVG, SunSVG } from '../../assets/icons';

import { ThemeSwitchProps } from './types';

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, toggleTheme }) => {
  return (
    <label className='switch'>
      <input
        type='checkbox'
        checked={theme == 'dark' ? true : false}
        onChange={toggleTheme}
      />
      <span className='slider round'></span>
    </label>
  );
};

export default ThemeSwitch;
