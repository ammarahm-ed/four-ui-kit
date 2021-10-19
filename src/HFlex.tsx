import React from "react";
import { View } from "react-native";
import shallow from "zustand/shallow";
import { HFlexProps, HFlexTypes } from "./helpers/typings";
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  radius: state.radius,
  borders: state.borders,
});
export const HFlex: React.FC<HFlexProps> = ({
  type = "default",
  background = "",
  ...props
}) => {
  const { colors, radius, borders } = useThemeStore(selector, shallow);
  const hFlexTypeProps = HFlexTypes[type] || {};
  const bg = colors[background || hFlexTypeProps.background || ""];

  const _radius =
    radius[props.radius] ||
    radius[hFlexTypeProps.radius] ||
    radius.sharpcorners;
  const border = borders[props.border] || borders[hFlexTypeProps.border] || 0;

  const flexDirection =
    props.flexDirection || hFlexTypeProps.flexDirection || "column";
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
        {
          backgroundColor: bg,
          borderRadius: _radius,
          borderWidth: border,
          flexDirection: flexDirection,
        },
        props.style,
      ]}
    >
      {props.children}
    </Component>
  );
};
