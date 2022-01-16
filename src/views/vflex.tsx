import React from "react";
import { View } from "react-native";
import shallow from "zustand/shallow";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";
import { ThemeStore } from "../theme/theme.interface";
import { VFlexTypes } from "./types";
import { IVFlex } from "./vflex.interface";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  radius: state.radius,
  borders: state.borders,
});
export const VFlex: React.FC<IVFlex> = ({ type = "default", ...props }) => {
  const state = useThemeStore(selector, shallow);
  const currentType = VFlexTypes[type] || {};

  const flexDirection =
    props.flexDirection || currentType.flexDirection || "column";
  const parsedStyles = parseStyles(props, state, currentType);

  const Component = props.component
    ? props.component
    : currentType.component
    ? currentType.component
    : View;

  return (
    <Component
      {...currentType}
      {...props}
      style={[
        currentType.style,
        {
          flex: props.flex || currentType.flex,
        },
        parsedStyles,
        props.style,
        {
          flexDirection: flexDirection,
        },
      ]}
    >
      {props.children}
    </Component>
  );
};
