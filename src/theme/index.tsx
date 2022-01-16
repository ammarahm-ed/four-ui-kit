import create from "zustand";
import { LiteralUnion } from "../common";
import { ThemeStore } from "./theme.interface";
import { FontsType, ThemeType } from "./types";

export const Themes: ThemeType = {
  default: {
    primary: "#55a630",
    secondary: "#ffffff",
    tertiary: "#ffffff",
    accent: "#55a630",
    shade: "#55a63014",
    background: "#ffffff",
    muted: "#f7f7f7",
    text: "#000000",
    heading: "#000000",
    paragraph: "#303030",
    info: "#808080",
    gray: "#BEBEBE",
    black: "#000000",
    white: "#ffffff",
    error: "#ff9494",
    success: "#22bb33",
    warning: "#f0ad4e",
    border: "#e8e8e8",
    transparent:"transparent",
    transgray:"#80808030"

  },
  dark: {
    secondary: "#202020",
    tertiary: "#202020",
    background: "#202020",
    muted: "#303030",
    text: "#ffffff",
    heading: "#ffffff",
    paragraph: "#E0E0E0",
    info: "#808080",
    border: "#383838",
    dark: true,
    transparent:"transparent",
    transgray:"#80808030"
  },
};

export const Fonts: FontsType = {};

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
  none: 0,
};

export const Borders: { [name: string]: number } = {
  thin: 0.5,
  normal: 1,
  thick: 2,
  verythick: 4,
  none: 0,
};

export const useThemeStore = create<ThemeStore>((set) => ({
  colors: { ...Themes["default"] },
  sizes: Sizes,
  radius: Radius,
  borders: Borders,
  fonts: Fonts,
  setFonts: (fonts) =>
    set((state) => ({ fonts: { ...state.fonts, ...fonts } })),
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
