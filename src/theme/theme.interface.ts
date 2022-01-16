import { LiteralUnion } from "../common/index";
import { State } from "zustand";
import {
  BorderWidth,
  ColorsType,
  FontsType,
  BorderRadius,
  SizesType,
} from "./types";

export interface ThemeStore extends State {
  colors: {
    [name: string]: string | boolean | undefined;
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
    dark?: boolean;
    shade?:string;
    transgray?:string;
    transparent?:string
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
  setBorders: (colors: BorderWidth) => void;
  setSizes: (colors: SizesType) => void;
  setRadius: (colors: BorderRadius) => void;
  setTheme: (theme: LiteralUnion<"default" | "dark">) => void;
  setFonts: (fonts: FontsType) => void;
}
