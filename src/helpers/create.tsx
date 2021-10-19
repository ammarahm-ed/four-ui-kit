import React from "react";
import shallow from "zustand/shallow";
import { ThemeStore, useThemeStore } from "../store/theme";
import { SimpleComponentProps } from "./typings";

export function createFourUIComponent(
  Component: React.ComponentType<{ name: string }> | React.FC<{ name: string }>,
  types: any
): React.FC {
  const selector = (state: ThemeStore) => ({
    colors: state.colors,
    radius: state.radius,
    borders: state.borders,
  });

  const ReturnComponent: React.FC<SimpleComponentProps> = ({
    type = "default",
    background = "",
    ...props
  }) => {
    const { colors, radius, borders } = useThemeStore(selector, shallow);
    const viewTypeProps = types[type] || {};
    const bg = colors[viewTypeProps.background || background];
    const _radius =
      radius[props.radius] ||
      radius[viewTypeProps.radius] ||
      radius.sharpcorners;
    const border = borders[props.border] || borders[viewTypeProps.border] || 0;
    const flexDirection = props.flexDirection || viewTypeProps.flexDirection;

    return (
      <Component
        {...viewTypeProps}
        {...props}
        style={[
          viewTypeProps.style,
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

  return ReturnComponent;
}
