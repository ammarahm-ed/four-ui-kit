import React from "react";
import { View } from "react-native";
import { ThemeStore } from "../theme/theme.interface";
import shallow from "zustand/shallow";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";
import { IHFlex } from "./hflex.interface";
import { HFlexTypes } from "./types";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  radius: state.radius,
  borders: state.borders,
});
export const HFlex: React.FC<IHFlex> = ({ type = "default", ...props }) => {
  const state = useThemeStore(selector, shallow);
  const currentType = HFlexTypes[type] || {};
  const flexDirection =
    props.flexDirection || currentType.flexDirection || "row";
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
          flexDirection: flexDirection,
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
