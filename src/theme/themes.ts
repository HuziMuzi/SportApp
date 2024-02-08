import {Theme} from 'src/theme/context.tsx';

export type ReadonlyPalette = typeof lightPalette;
// export type Palette = Mutable<ReadonlyPalette>;

const ORAGNE_HUE = 19;
const BLUE_HUE = 214;
const color = {
  orange_600: `hsl(${ORAGNE_HUE}, 83%, 60%)`,

  gray_300: `hsl(${BLUE_HUE}, 10%, 73%)`,
  gray_800: `hsl(${BLUE_HUE}, 10%, 19%)`,
  gray_850: `hsl(${BLUE_HUE}, 10%, 16%)`,
  gray_875: `hsl(${BLUE_HUE}, 10%, 12%)`,
  gray_925: `hsl(${BLUE_HUE}, 10%, 7%)`,
};

export const lightPalette = {
  contrast_300: color.gray_300,
  contrast_800: color.gray_800,
  contrast_850: color.gray_850,
  contrast_875: color.gray_875,
  contrast_925: color.gray_925,

  primary_600: color.orange_600,
};

export const darkPalette: Palette = {
  contrast_300: color.gray_300,
  contrast_800: color.gray_800,
  contrast_850: color.gray_850,
  contrast_875: color.gray_875,
  contrast_925: color.gray_925,

  primary_600: color.orange_600,
} as const;

export const defaultTheme: Theme = {
  colorScheme: 'light',
  palette: {
    default: {
      // background: lightPalette.white,
      // backgroundLight: lightPalette.contrast_50,
      // text: lightPalette.black,
      // textLight: lightPalette.contrast_700,
      // textInverted: lightPalette.white,
      // link: lightPalette.primary_500,
      // border: lightPalette.contrast_100,
      // borderDark: lightPalette.contrast_200,
      icon: lightPalette.contrast_300,
      // non-standard
      // textVeryLight: lightPalette.contrast_400,
      // replyLine: lightPalette.contrast_100,
      // replyLineDot: lightPalette.contrast_200,
      // unreadNotifBg: lightPalette.primary_25,
      // unreadNotifBorder: lightPalette.primary_100,
      // postCtrl: lightPalette.contrast_500,
      // brandText: lightPalette.primary_500,
      // emptyStateIcon: lightPalette.contrast_300,
      // borderLinkHover: lightPalette.contrast_300,
    },
    primary: {
      // background: colors.blue3,
      // backgroundLight: colors.blue2,
      // text: colors.white,
      // textLight: colors.blue0,
      // textInverted: colors.blue3,
      // link: colors.blue0,
      // border: colors.blue4,
      // borderDark: colors.blue5,
      // icon: colors.blue4,
    },
    secondary: {
      // background: colors.green3,
      // backgroundLight: colors.green2,
      // text: colors.white,
      // textLight: colors.green1,
      // textInverted: colors.green4,
      // link: colors.green1,
      // border: colors.green4,
      // borderDark: colors.green5,
      // icon: colors.green4,
    },
    inverted: {
      // background: darkPalette.black,
      // backgroundLight: darkPalette.contrast_50,
      // text: darkPalette.white,
      // textLight: darkPalette.contrast_700,
      // textInverted: darkPalette.black,
      // link: darkPalette.primary_500,
      // border: darkPalette.contrast_100,
      // borderDark: darkPalette.contrast_200,
      // icon: darkPalette.contrast_500,
    },
    error: {
      // background: colors.red3,
      // backgroundLight: colors.red2,
      // text: colors.white,
      // textLight: colors.red1,
      // textInverted: colors.red3,
      // link: colors.red1,
      // border: colors.red4,
      // borderDark: colors.red5,
      // icon: colors.red4,
    },
  },
};

export const darkTheme: Theme = {
  colorScheme: 'dark',
  palette: {
    default: {
      icon: lightPalette.contrast_300,
    },
    primary: {},
    secondary: {},
    inverted: {},
    error: {},
  },
};
