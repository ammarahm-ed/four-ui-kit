import { getComponentMargins } from "./helpers/utils";
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
  const textColor = colors[color || paragraphTypeProps.color || "paragraph"];
  const fontSize = sizes[size || paragraphTypeProps.size || "sm"];

  const _radius =
  radius[props.radius || paragraphTypeProps.radius || "sharpcorners"];
  radius.sharpcorners;
  const border = borders[props.border || paragraphTypeProps.border || "none"];
  const componentMargins = getComponentMargins(props);

  return (
    <Text
      {...paragraphTypeProps}
      {...props}
      style={[
        paragraphTypeProps.style,
        {
          flex: props.flex || paragraphTypeProps.flex || null,
          color: textColor,
          fontSize: fontSize,
          textAlign: props.align || paragraphTypeProps.align,
          borderRadius: _radius,
          borderWidth: border,
          //@ts-ignore
          fontFamily: fonts[props.font || paragraphTypeProps.font || "paragraph"]
        },
        componentMargins,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};
