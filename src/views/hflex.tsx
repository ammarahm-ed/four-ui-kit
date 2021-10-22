import React from "react";
import { View } from "react-native";
import shallow from "zustand/shallow";
import { getComponentMargins } from "../common/utils";
import { ThemeStore, useThemeStore } from "../theme";
import { IHFlex } from "./hflex.interface";
import { HFlexTypes } from "./types";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  radius: state.radius,
  borders: state.borders,
});
export const HFlex: React.FC<IHFlex> = ({
  type = "default",
  background = "",
  ...props
}) => {
  const { colors, radius, borders } = useThemeStore(selector, shallow);
  const hFlexTypeProps = HFlexTypes[type] || {};
  const bg = colors[background || hFlexTypeProps.background || ""];

  const _radius =
    radius[props.radius || hFlexTypeProps.radius || "sharpcorners"];
  const border = borders[props.border || hFlexTypeProps.border || 0];

  const flexDirection =
    props.flexDirection || hFlexTypeProps.flexDirection || "column";
  const Component = props.component
    ? props.component
    : hFlexTypeProps.component
      ? hFlexTypeProps.component
      : View;
  const componentMargins = getComponentMargins(props);

  return (
    <Component
      {...hFlexTypeProps}
      {...props}
      style={[
        hFlexTypeProps.style,
        {
          flex: props.flex || hFlexTypeProps.flex,
          backgroundColor: bg,
          borderRadius: _radius,
          borderWidth: border,
          flexDirection: flexDirection,
        },
        componentMargins,
        props.style,
      ]}
    >
      {props.children}
    </Component>
  );
};
