import './styles.css';

import { HalfMoonSVG, SunSVG } from '../../assets/icons';

import { ThemeSwitchProps } from './types';

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, toggleTheme }) => {
  return (
    <div className='dark-mode-switch'>
      <input
        type='checkbox'
        id='dark-mode-toggle'
        checked={theme == 'dark' ? true : false}
        onChange={toggleTheme}
      />
      <label className='switch-label' htmlFor='dark-mode-toggle'></label>
    </div>
  );
};

export default ThemeSwitch;
