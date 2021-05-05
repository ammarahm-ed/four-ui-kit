import React from "react";
import { Text } from "react-native";
import shallow from "zustand/shallow";
import { ParagraphTypes, ParagraphProps } from "./helpers/typings";
import { getBorderStyle } from "./helpers/utils";
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  sizes: state.sizes,
  radius: state.radius,
  borders: state.borders,
});
export const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { colors, sizes, radius, borders } = useThemeStore(selector, shallow);
  const paragraphTypeProps = ParagraphTypes[props.type]|| ParagraphTypes["default"];
    const color = colors[props.color] || colors[paragraphTypeProps.color] || undefined
    const size = sizes[props.size] || sizes[paragraphTypeProps.size] || undefined;
  const borderStyle = props.border
    ? getBorderStyle(props.border, radius, borders)
    : paragraphTypeProps.border
    ? getBorderStyle(paragraphTypeProps.border, radius, borders)
    : undefined;

  return (
    <Text
      {...paragraphTypeProps}
      {...props}
      style={[
        paragraphTypeProps.style,
        props.style,
        {
          color: color,
          fontSize: size,
          textAlign: props.align || paragraphTypeProps.align,
          ...borderStyle,
        },
      ]}
    >
      {props.children}
    </Text>
  );
};
