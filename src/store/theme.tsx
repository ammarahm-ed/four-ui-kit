import { LiteralUnion } from "../helpers/typings";
import create, { State } from "zustand";
export type ThemeType = {
  [name: string]: ColorsType;
};

export const Themes: ThemeType = {
  default: {
    primary: "#55a630",
    secondary: "#ffffff",
    tertiary: "",
    accent: "#55a630",
    background: "#ffffff",
    muted: "#f0f0f0",
    text: "#000000",
    heading: "#000000",
    paragraph: "#202020",
    info: "#808080",
    gray: "#BEBEBE",
    black: "#000000",
    white: "#ffffff",
    error: "#ff9494",
    success: "#22bb33",
    warning: "#f0ad4e",
  },
  dark: {
    primary: "#55a630",
    secondary: "#202020",
    tertiary: "",
    background: "#202020",
    muted: "#303030",
    text: "#ffffff",
    heading: "#ffffff",
    paragraph: "#E0E0E0",
    info: "#808080",
  },
};

export const Fonts: {
  [name: string]: string;
  heading: string;
  paragraph: string;
} = {
  heading: null,
  paragraph: null,
};

export const Sizes: { [name: string]: number } = {
  xxxxs: 8,
  xxxs: 9,
  xxs: 11,
  xs: 13,
  sm: 15,
  md: 18,
  lg: 23,
  xl: 28,
  xxl: 32,
  xxxl: 36,
  xxxxl: 38,
};

export const Radius: { [name: string]: number } = {
  sharpcorners: 1,
  softcorners: 5,
  roundcorners: 10,
  squircle: 25,
  circle: 100,
  none:0
};

export const Borders: { [name: string]: number } = {
  thin: 0.5,
  normal: 1,
  thick: 2,
  verythick: 4,
  none:0
};

export type ColorsType = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  accent?: string;
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

export type BorderType = {
  thin?: number;
  normal?: number;
  thick?: number;
  verythick?: number;
  none?:number
};
export type RadiusType = {
  sharpcorners?: number;
  softcorners?: number;
  roundcorners?: number;
  squircle?: number;
  circle?: number;
  none?:number
};

export interface ThemeStore extends State {
  colors: {
    [name: string]: string | undefined;
    primary?: string;
    secondary?: string;
    tertiary?: string;
    accent?: string;
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
  };

  borders: {
    [name: string]: number | undefined;
    thin?: number;
    normal?: number;
    thick?: number;
    verythick?: number;
  };
  fonts: {
    heading?: string;
    paragraph?: string;
  };
  radius: {
    [name: string]: number | undefined;
    sharpcorners?: number;
    softcorners?: number;
    roundcorners?: number;
    squircle?: number;
    circle?: number;
  };
  sizes: {
    [name: string]: number | undefined;
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
  setColors: (colors: ColorsType) => void;
  setBorders: (colors: BorderType) => void;
  setSizes: (colors: SizesType) => void;
  setRadius: (colors: RadiusType) => void;
  setTheme: (theme: LiteralUnion<"default" | "dark">) => void;
  setFonts:(fonts:typeof Fonts) => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  colors: { ...Themes["default"] },
  sizes: Sizes,
  radius: Radius,
  borders: Borders,
  fonts: Fonts,
  setFonts:(fonts) => set((state) => ({fonts:{...state.fonts,...fonts}})),
  setColors: (colors) =>
    set((state) => ({ colors: { ...state.colors, ...colors } })),
  setBorders: (borders) =>
    set((state) => ({ borders: { ...state.borders, ...borders } })),
  setSizes: (sizes) =>
    set((state) => ({ sizes: { ...state.sizes, ...sizes } })),
  setRadius: (radius) =>
    set((state) => ({ radius: { ...state.radius, ...radius } })),
  setTheme: (theme: LiteralUnion<"default" | "dark">) =>
    set(() => ({ colors: { ...Themes["default"], ...Themes[theme] } })),
}));
