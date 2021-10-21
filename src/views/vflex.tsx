import React from "react";
import { View } from "react-native";
import shallow from "zustand/shallow";
import { getComponentMargins } from "../common/utils";
import { ThemeStore, useThemeStore } from "../theme";
import { VFlexTypes } from "./types";
import { IVFlex } from "./vflex.interface";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  radius: state.radius,
  borders: state.borders,
});
export const VFlex: React.FC<IVFlex> = ({
  type = "default",
  background = "",
  ...props
}) => {
  const { colors, radius, borders } = useThemeStore(selector, shallow);
  const vFlexTypeProps = VFlexTypes[type] || {};
  const bg = colors[background || vFlexTypeProps.background || ""];

  const _radius =
    radius[props.radius || vFlexTypeProps.radius || "sharpcorners"];
  const border = borders[props.border || vFlexTypeProps.border || 0];

  const flexDirection =
    props.flexDirection || vFlexTypeProps.flexDirection || "column";

  const Component = props.component
    ? props.component
    : vFlexTypeProps.component
      ? vFlexTypeProps.component
      : View;
  const componentMargins = getComponentMargins(props);

  return (
    <Component
      {...vFlexTypeProps}
      {...props}
      style={[
        vFlexTypeProps.style,
        {
          flex: props.flex || vFlexTypeProps.flex || null,
          backgroundColor: bg,
          borderRadius: _radius,
          borderWidth: border,
        },
        componentMargins,
        props.style,
        {
          flexDirection: flexDirection,
        }
      ]}
    >
      {props.children}
    </Component>
  );
};
