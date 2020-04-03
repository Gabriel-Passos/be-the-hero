import React from 'react';
import {FiSun, FiMoon} from 'react-icons/fi';

import './style.css';

const ThemeSwitcher = ( {toggleTheme} ) => (
  <a onClick={toggleTheme}><FiMoon size={16} color="#343746"/></a>
);

export default ThemeSwitcher;

