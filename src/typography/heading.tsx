import React from "react";
import { Text } from "react-native";
import { ThemeStore } from "../theme/theme.interface";
import shallow from "zustand/shallow";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";
import { IHeading } from "./heading.interface";
import { HeadingTypes } from "./types";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  sizes: state.sizes,
  radius: state.radius,
  borders: state.borders,
  fonts: state.fonts,
});

const defaults = {
  color: "heading",
  size: "lg",
  font:"heading"
};

export const Heading: React.FC<IHeading> = ({ type = "default", ...props }) => {
  const state = useThemeStore(selector, shallow);
  const { sizes, fonts } = state;
  const currentType = HeadingTypes[type] || {};
  const fontSize = sizes[props.size || currentType.size || defaults.size];
  const parsedStyles = parseStyles(props, state, currentType);

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
          //@ts-ignore
          fontFamily: fonts[props.font || currentType.font || defaults.font],
        },
        parsedStyles,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};
