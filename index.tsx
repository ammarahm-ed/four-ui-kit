export { Paragraph } from "./src/typography/paragraph";
export type IParagraph = import("./src/typography/paragraph.interface").IParagraph;

export { Heading } from "./src/typography/heading";
export type IHeading = import("./src/typography/heading.interface").IHeading;

export {createFourUIComponent} from "./src/create";
export type SimpleComponentProps = import("./src/common").SimpleComponentProps;

export {
  ParagraphTypes,
  HeadingTypes,
} from "./src/typography/types";

export {
  HFlexTypes,
  VFlexTypes,
} from "./src/views/types"

export type IHFlex = import("./src/views/hflex.interface").IHFlex;
export type IVFlex = import("./src/views/vflex.interface").IVFlex;

export { useThemeStore, Themes } from "./src/theme";
export type ThemeType = import("./src/theme").ThemeType;

export type ColorsType = import("./src/theme").ColorsType;
export type BorderType = import("./src/theme").BorderType;
export type RadiusType = import("./src/theme").RadiusType;
export type SizesType = import("./src/theme").SizesType;

export { HFlex } from "./src/views/hflex";
export { VFlex } from "./src/views/vflex";
