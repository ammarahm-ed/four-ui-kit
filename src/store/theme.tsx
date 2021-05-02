import { LiteralUnion } from "ui-kit/src/helpers/typings";
import create, { State } from "zustand";
export type ThemeType = {
  [name: string]: ColorsType;
};

export const Themes: ThemeType = {
  default: {
    primary: "",
    secondary: "",
    tertiary: "",
    accent: "",
    background: "",
    muted: "#f0f0f0",
    text: "",
    heading: "",
    paragraph: "",
    info: "",
    gray: "",
    black: "#000",
    white: "#fff",
    error: "",
    success: "",
  },
  dark: {
    primary: "",
    secondary: "",
    tertiary: "",
    background: "",
    muted: "#f0f0f0",
    text: "",
    heading: "",
    paragraph: "",
    info: "",
  },
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
};

export const Borders: { [name: string]: number } = {
  thin: 0.5,
  normal: 1,
  thick: 2,
  verythick: 4,
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
};
export type RadiusType = {
  sharpcorners?: number;
  softcorners?: number;
  roundcorners?: number;
  squircle?: number;
  circle?: number;
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
  };

  borders: {
    [name: string]: number | undefined;
    thin?: number;
    normal?: number;
    thick?: number;
    verythick?: number;
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
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  colors: Themes["default"],
  sizes: Sizes,
  radius: Radius,
  borders: Borders,
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
