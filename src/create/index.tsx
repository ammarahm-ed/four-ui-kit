import React from "react";
import { ThemeStore } from "../theme/theme.interface";
import shallow from "zustand/shallow";
import { SimpleComponentProps } from "../common";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  radius: state.radius,
  borders: state.borders,
  sizes: state.sizes,
});

export function createFourUIComponent(
  Component: React.ElementType,
  types: any
): React.FC {
  const ReturnComponent: React.FC<SimpleComponentProps> = ({
    type = "default",
    ...props
  }) => {
    const state = useThemeStore(selector, shallow);
    const { colors, sizes } = state;
    const currentType = types[type] || {};
    const flexDirection = props.flexDirection || currentType.flexDirection;
    const parsedStyles = parseStyles(props, state, currentType);

    return (
      <Component
        {...currentType}
        {...props}
        style={[
          currentType.style,
          {
            flexDirection: flexDirection,
          },
          parsedStyles,
          props.style,
        ]}
        //@ts-ignore
        size={sizes[props.size || currentType.size || "sm"]}
        //@ts-ignore
        color={colors[props.color || currentType.color || "paragraph"]}
      >
        {props.children}
      </Component>
    );
  };

  return ReturnComponent;
}
