export type ThemeType = {
  [name: string]: ColorsType;
  default: ColorsType;
  dark: ColorsType;
};

export type FontsType = {
  [name: string]: string | undefined;
  heading?: string;
  paragraph?: string;
};

export type ColorsType = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  accent?: string;
  /**
   * A lighter shade of accent color. 12-14% opacity
   */
  shade?: string;
  background?: string;
  muted?: string;
  text?: string;
  heading?: string;
  paragraph?: string;
  info?: string;
  gray?: string;
  black?: string;
  white?: string;
  error?: string;
  success?: string;
  warning?: string;
  border?: string;
  /** A boolean value to identify a dark theme.
   * Do not use this as a color property */
  dark?: boolean;
  transgray?:string;
  transparent?:string
};

export type SizesType = {
  xxxxs?: number;
  xxxs?: number;
  xxs?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  xxxl?: number;
  xxxxl?: number;
};

export type BorderWidth = {
  thin?: number;
  normal?: number;
  thick?: number;
  verythick?: number;
};
export type BorderRadius = {
  sharpcorners?: number;
  softcorners?: number;
  roundcorners?: number;
  squircle?: number;
  circle?: number;
};
