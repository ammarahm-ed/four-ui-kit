import React from "react";
import { Text } from "react-native";
import shallow from "zustand/shallow";
import { ParagraphProps, ParagraphTypes } from "./helpers/typings";
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  sizes: state.sizes,
  radius: state.radius,
  borders: state.borders,
  fonts: state.fonts,
});
export const Paragraph: React.FC<ParagraphProps> = ({
  type = "default",
  color = "",
  size = 15,
  ...props
}) => {
  const { colors, sizes, radius, borders, fonts } = useThemeStore(
    selector,
    shallow
  );

  const paragraphTypeProps = ParagraphTypes[type] || {};
  const textColor = colors[color || paragraphTypeProps.color || ""];
  const fontSize = sizes[size || paragraphTypeProps.size || 15];
  const _radius =
    radius[props.radius] ||
    radius[paragraphTypeProps.radius] ||
    radius.sharpcorners;
  const border =
    borders[props.border] || borders[paragraphTypeProps.border] || 0;

  return (
    <Text
      {...paragraphTypeProps}
      {...props}
      style={[
        paragraphTypeProps.style,
        {
          color: textColor,
          fontSize: fontSize,
          textAlign: props.align || paragraphTypeProps.align,
          borderRadius: _radius,
          borderWidth: border,
          fontFamily: fonts.paragraph,
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};
