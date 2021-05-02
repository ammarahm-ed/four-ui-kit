import React from "react";
import { View } from "react-native";
import { getBorderStyle } from "./src/helpers/utils";
import shallow from "zustand/shallow";
import { HFlexProps, VFlexTypes } from "./helpers/typings";
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  radius: state.radius,
  borders: state.borders,
});
export const HFlex: React.FC<HFlexProps> = (props) => {
  const { colors, radius, borders } = useThemeStore(selector, shallow);
  const hFlexTypeProps = props.type
    ? VFlexTypes[props.type]
    : VFlexTypes["default"];
  const background = props.background
    ? colors[props.background]
    : hFlexTypeProps.background
    ? colors[hFlexTypeProps.background]
    : undefined;
  const borderStyle = props.border
    ? getBorderStyle(props.border, radius, borders)
    : hFlexTypeProps.border
    ? getBorderStyle(hFlexTypeProps.border, radius, borders)
    : undefined;
  const flexDirection = props.flexDirection
    ? props.flexDirection
    : hFlexTypeProps.flexDirection
    ? hFlexTypeProps.flexDirection
    : "row";
  const Component = props.component
    ? props.component
    : hFlexTypeProps.component
    ? hFlexTypeProps.component
    : View;

  return (
    <Component
      {...hFlexTypeProps}
      {...props}
      style={[
        hFlexTypeProps.style,
        props.style,
        { backgroundColor: background, ...borderStyle },
        { flexDirection: flexDirection },
      ]}
    >
      {props.children}
    </Component>
  );
};
