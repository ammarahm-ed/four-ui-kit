import React from "react";
import { Text } from "react-native";
import shallow from "zustand/shallow";
import { getComponentMargins } from "../common/utils";
import { ThemeStore, useThemeStore } from "../theme";
import { IHeading } from "./heading.interface";
import { HeadingTypes } from "./types";


const selector = (state: ThemeStore) => ({
  colors: state.colors,
  sizes: state.sizes,
  radius: state.radius,
  borders: state.borders,
  fonts: state.fonts,
});

export const Heading: React.FC<IHeading> = ({
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
  const textColor = colors[color || headingTypeProps.color || "heading"];
  const fontSize = sizes[size || headingTypeProps.size || 15];

  const _radius =
    radius[props.radius || headingTypeProps.radius || "sharpcorners"];
    radius.sharpcorners;
  const border = borders[props.border || headingTypeProps.border || "none"];

  const componentMargins = getComponentMargins(props);

  return (
    <Text
      {...headingTypeProps}
      {...props}
      style={[
        headingTypeProps.style,
        {
          flex: props.flex || headingTypeProps.flex || null,
          color: textColor,
          fontSize: fontSize,
          textAlign: props.align || headingTypeProps.align,
          borderRadius: _radius,
          borderWidth: border,
          //@ts-ignore
          fontFamily:fonts[props.font || headingTypeProps.font || "heading"],
        },
        componentMargins,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};
