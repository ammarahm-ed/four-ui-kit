import React from "react";
import { Text } from "react-native";
import { ThemeStore } from "../theme/theme.interface";
import shallow from "zustand/shallow";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";
import { IParagraph } from "./paragraph.interface";
import { ParagraphTypes } from "./types";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  sizes: state.sizes,
  radius: state.radius,
  borders: state.borders,
  fonts: state.fonts,
});

const defaults = {
  color: "paragraph",
  size: "sm",
  font: "paragraph",
};

export const Paragraph: React.FC<IParagraph> = ({
  type = "default",
  ...props
}) => {
  const state = useThemeStore(selector, shallow);
  const { sizes, fonts } = state;
  const currentType = ParagraphTypes[type] || {};
  const fontSize = sizes[props.size || currentType.size || defaults.size];
  const parsedStyles = parseStyles(props, state, currentType, defaults);

  return (
    <Text
      {...currentType}
      {...props}
      style={[
        currentType.style,
        //@ts-ignore
        {
          flex: props.flex || currentType.flex,
          fontSize: fontSize,
          textAlign: props.align || currentType.align,
          fontFamily:
            //@ts-ignore
            fonts[props.font || currentType.font || defaults.paragraph],
        },
        parsedStyles,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};
