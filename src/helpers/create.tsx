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
    sizes:state.sizes
  });

  const ReturnComponent: React.FC<SimpleComponentProps> = ({
    type = "default",
    background = "",
    ...props
  }) => {
    const { colors, radius, borders,sizes } = useThemeStore(selector, shallow);
    const viewTypeProps = types[type] || {};
    const bg = colors[viewTypeProps.background || background];
    
    const _radius =
    //@ts-ignore
      radius[props.radius || viewTypeProps.radius || "none"]
      //@ts-ignore
    const border = borders[props.border || viewTypeProps.border || "none"];
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
        //@ts-ignore
        size={sizes[props.size || viewTypeProps.size || 12]}
        //@ts-ignore
        color={colors[props.color || viewTypeProps.color || null]}
      >
        {props.children}
      </Component>
    );
  };

  return ReturnComponent;
}
