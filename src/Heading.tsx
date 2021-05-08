import React from "react";
import { Text } from "react-native";
import { getBorderStyle } from "./helpers/utils";
import shallow from "zustand/shallow";
import { HeadingTypes, HeadingProps } from "./helpers/typings";
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  sizes: state.sizes,
  radius: state.radius,
  borders: state.borders,
});

export const Heading: React.FC<HeadingProps> = ({type="default",color="",size=28, ...props}) => {
  const { colors, sizes, radius, borders } = useThemeStore(selector, shallow);

  const headingTypeProps = HeadingTypes[type]
  const textColor = colors[color || headingTypeProps.color || "" ]
  const fontSize = sizes[size || headingTypeProps.size || 15];
  const borderStyle = getBorderStyle(props.border ||headingTypeProps.border || {}, radius, borders)
  

  return (
    <Text
      {...headingTypeProps}
      {...props}
      style={[
        headingTypeProps.style,
        props.style,
        {
          color: textColor,
          fontSize: fontSize,
          textAlign: props.align || headingTypeProps.align,
          ...borderStyle,
        },
      ]}
    >
      {props.children}
    </Text>
  );
};
