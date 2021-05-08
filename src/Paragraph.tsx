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
export const Paragraph: React.FC<ParagraphProps> = ({type="default",color="",size=15, ...props}) => {
  const { colors, sizes, radius, borders } = useThemeStore(selector, shallow);

  const paragraphTypeProps = ParagraphTypes[type]
  const textColor = colors[color || paragraphTypeProps.color || "" ]
  const fontSize = sizes[size || paragraphTypeProps.size || 15];
  const borderStyle = getBorderStyle(props.border ||paragraphTypeProps.border || {}, radius, borders)
  


  return (
    <Text
      {...paragraphTypeProps}
      {...props}
      style={[
        paragraphTypeProps.style,
        props.style,
        {
          color: textColor,
          fontSize: fontSize,
          textAlign: props.align || paragraphTypeProps.align,
          ...borderStyle,
        },
      ]}
    >
      {props.children}
    </Text>
  );
};
