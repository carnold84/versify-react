import colors from './_colors';
import fonts from './_fonts';
import button from './button';
import checkbox from './checkbox';
import editor from './editor';
import global from './global';
import header from './header';
import iconButton from './iconButton';
import listItem from './listItem';
import listItemText from './listItemText';
import modal from './modal';
import progress from './progress';
import typography from './typography';

import createTheme from '../createTheme';

export default createTheme({
  colors,
  fonts,
  id: 'dark-theme',
  name: 'Dark',
  theme: {
    button,
    checkbox,
    editor,
    global,
    header,
    iconButton,
    listItem,
    listItemText,
    modal,
    progress,
    typography,
  },
});
