import React from "react";
import { TextProps, ViewProps } from "react-native";
import { BorderType, ColorsType, RadiusType, SizesType } from "../store/theme";

export type LiteralUnion<T extends U, U = string> = T | (U & {});

export type BorderStyleType = {
  borderWidth?: LiteralUnion<keyof BorderType>;
  borderTopWidth?: LiteralUnion<keyof BorderType>;
  borderRightWidth?: LiteralUnion<keyof BorderType>;
  borderLeftWidth?: LiteralUnion<keyof BorderType>;
  borderBottomWidth?: LiteralUnion<keyof BorderType>;
  borderStartWidth?: LiteralUnion<keyof BorderType>;
  borderEndWidth?: LiteralUnion<keyof BorderType>;
  borderRadius?: LiteralUnion<keyof RadiusType>;
  borderTopLeftRadius?: LiteralUnion<keyof RadiusType>;
  borderTopRightRadius?: LiteralUnion<keyof RadiusType>;
  borderBottomLeftRadius?: LiteralUnion<keyof RadiusType>;
  borderBottomRightRadius?: LiteralUnion<keyof RadiusType>;
};

export interface CustomTextProps {
  color?: LiteralUnion<keyof ColorsType>;
  align?: "left" | "right" | "center";
  size?: LiteralUnion<keyof SizesType>;
  border?: BorderStyleType;
}

export interface CustomFlexProps {
  background?: LiteralUnion<keyof ColorsType>;
  width?: number;
  height?: number;
  flex?: number;
  border?: BorderStyleType;
  component?: React.ComponentType;
}

export interface VFlexProps extends CustomFlexProps, ViewProps {
  flexDirection?: "column" | "column-reverse";
  type?: LiteralUnion<"default">;
}

export interface HFlexProps extends CustomFlexProps, ViewProps {
  flexDirection?: "row" | "row-reverse";
  type?: LiteralUnion<"default">;
}

export const VFlexTypes: { [name: string]: VFlexProps } = {
  default: {
    flexDirection: "column",
  },
};
export const HFlexTypes: { [name: string]: HFlexProps } = {
  default: {
    flexDirection: "row",
  },
};

export interface ParagraphProps extends TextProps, CustomTextProps {
  type?: LiteralUnion<"default">;
}

export const ParagraphTypes: { [name: string]: ParagraphProps } = {
  default: {
    size: "sm",
    color: "paragraph",
  },
};

export interface HeadingProps extends TextProps, CustomTextProps {
  type?: LiteralUnion<"default">;
}

export const HeadingTypes: { [name: string]: HeadingProps } = {
  default: {
    style: {
      fontSize: 15,
    },
  },
};
