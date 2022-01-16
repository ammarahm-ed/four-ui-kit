import { ReactNode } from "react";
import { PressableProps, StyleProp, ViewStyle } from "react-native";
import { IGeneral, LiteralUnion } from "../common";
import { ColorsType, SizesType } from "../theme/types";

export interface IButton extends IGeneral, PressableProps {
  type?: "default" | "icon";
  selected?: LiteralUnion<keyof ColorsType>;
  background?: LiteralUnion<keyof ColorsType>;
  opacity?: number;
  alpha?: number;
  color?: LiteralUnion<keyof ColorsType>;
  size?: LiteralUnion<keyof SizesType>;
  width?: number | string;
  height?: number | string;
  style?: StyleProp<ViewStyle>;
  title?: string;
  icon?: string;
  children?: ReactNode;
  iconPosition?: "left" | "right";
}
