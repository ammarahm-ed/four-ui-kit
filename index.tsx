export { Paragraph } from "./src/Paragraph";
export type ParagraphProps = import("./src/helpers/typings").ParagraphProps;

export { Heading } from "./src/Heading";
export type HeadingProps = import("./src/helpers/typings").HeadingProps;

export {
  ParagraphTypes,
  HeadingTypes,
  HFlexTypes,
  VFlexTypes,
} from "./src/helpers/typings";

export type HFlexProps = import("./src/helpers/typings").HFlexProps;
export type VFlexProps = import("./src/helpers/typings").VFlexProps;

export { useThemeStore, Themes } from "./src/store/theme";
export type ThemeType = import("./src/store/theme").ThemeType;

export type ColorsType = import("./src/store/theme").ColorsType;
export type BorderType = import("./src/store/theme").BorderType;
export type RadiusType = import("./src/store/theme").RadiusType;
export type SizesType = import("./src/store/theme").SizesType;

export { HFlex } from "./src/HFlex";
export { VFlex } from "./src/VFlex";
