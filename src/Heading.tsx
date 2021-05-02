import React from "react";
import { Text } from "react-native";
import { getBorderStyle } from "./src/helpers/utils";
import shallow from "zustand/shallow";
import { HeadingTypes, HeadingProps } from "./helpers/typings";
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  sizes: state.sizes,
  radius: state.radius,
  borders: state.borders,
});

export const Heading: React.FC<HeadingProps> = (props) => {
  const { colors, sizes, radius, borders } = useThemeStore(selector, shallow);
  const headingTypeProps = props.type
    ? HeadingTypes[props.type]
    : HeadingTypes["default"];
  const color = props.color
    ? colors[props.color]
    : headingTypeProps.color
    ? colors[headingTypeProps.color]
    : undefined;
  const size = props.size
    ? sizes[props.size]
    : headingTypeProps.size
    ? sizes[headingTypeProps.size]
    : undefined;
  const borderStyle = props.border
    ? getBorderStyle(props.border, radius, borders)
    : headingTypeProps.border
    ? getBorderStyle(headingTypeProps.border, radius, borders)
    : undefined;

  return (
    <Text
      {...headingTypeProps}
      {...props}
      style={[
        headingTypeProps.style,
        props.style,
        {
          color: color,
          fontSize: size,
          textAlign: props.align || headingTypeProps.align,
          ...borderStyle,
        },
      ]}
    >
      {props.children}
    </Text>
  );
};
