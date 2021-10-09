import { TypographyTypes } from '../base/typography';
import { ThemeModuleVariables } from '../themeTypes';

const typography = ({
  colors,
  fonts,
}: ThemeModuleVariables): TypographyTypes => {
  return {
    color: colors.text.color100,
    fontFamily: fonts.primary.family,
    fontWeight: fonts.primary.weight,
    _bold: {
      fontWeight: 500,
    },
  };
};

export default typography;
