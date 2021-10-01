import { Theme } from 'styled-components';
import { neutral, primary, text } from './_colors';
import button from './button';
import global from './global';
import header from './header';

const darkTheme: Theme = {
  button,
  colors: {
    primary,
    neutral,
    text,
  },
  global,
  header,
  id: 'default-theme',
  label: 'Default',
};

export default darkTheme;
