import React from "react";
import { Text } from "react-native";
import shallow from "zustand/shallow";
import { HeadingProps, HeadingTypes } from "./helpers/typings";
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  sizes: state.sizes,
  radius: state.radius,
  borders: state.borders,
  fonts: state.fonts,
});

export const Heading: React.FC<HeadingProps> = ({
  type = "default",
  color = "",
  size = 28,
  ...props
}) => {
  const { colors, sizes, radius, borders, fonts } = useThemeStore(
    selector,
    shallow
  );

  const headingTypeProps = HeadingTypes[type] || {};
  const textColor = colors[color || headingTypeProps.color || ""];
  const fontSize = sizes[size || headingTypeProps.size || 15];

  const _radius =
    radius[props.radius] ||
    radius[headingTypeProps.radius] ||
    radius.sharpcorners;
  const border = borders[props.border] || borders[headingTypeProps.border] || 0;

  return (
    <Text
      {...headingTypeProps}
      {...props}
      style={[
        headingTypeProps.style,
        {
          color: textColor,
          fontSize: fontSize,
          textAlign: props.align || headingTypeProps.align,
          borderRadius: _radius,
          borderWidth: border,
          fontFamily: fonts.heading,
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};
