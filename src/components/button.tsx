import React from "react";
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from "react-native";
import shallow from "zustand/shallow";
import { Paragraph } from "../typography/paragraph";
import { hex_to_rgba, rgba_linear_shade } from "../common/colors";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";
import { IButton } from "./button.interface";
import { Icon } from "./icon";
import { ThemeStore } from "../theme/theme.interface";

export const ButtonTypes: { [name: string]: IButton } = {
  default: {
    selected: "accent",
    background: "accent",
    opacity: 1,
    color: "white",
    size: "md",
    width: "100%",
    height: 50,
    alpha: 0.1,
  },
  icon: {
    color: "primary",
    size: "xxxl",
    background: "background",
    selected: "muted",
    radius: "circle",
    style: {
      width: 55,
      height: 55,
    },
  },
};

const selector = (state: ThemeStore) => ({
  colors: state.colors,
  sizes: state.sizes,
  radius: state.radius,
  borders: state.borders,
});

export const Button = ({
  type = "default",
  selected,
  background,
  opacity,
  alpha,
  style,
  onPress,
  title,
  color,
  size,
  icon,
  iconPosition = "left",
  ...restProps
}: IButton) => {
  const state = useThemeStore(selector, shallow);
  const currentType = ButtonTypes[type] || {};
  const selectedColor =
    state.colors[selected || ButtonTypes[type].selected || "accent"];
  const backgroundColor =
    state.colors[background || ButtonTypes[type].background || "accent"];
  const buttonOpacity = opacity || ButtonTypes[type].opacity || 1;
  const isDark = state.colors.dark;
  let buttonAlpha = alpha || ButtonTypes[type].alpha || 0.04;
  buttonAlpha = isDark ? buttonAlpha * -1 : buttonAlpha;
  const parsedStyles = parseStyles(restProps, state, currentType);

  const getStyle = (
    state: PressableStateCallbackType
  ): StyleProp<ViewStyle> => {
    return [
      //@ts-ignore
      {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 0,
        flexDirection: "row",
      },
      parsedStyles,
      style,
      {
        backgroundColor: state.pressed
          ? rgba_linear_shade(buttonAlpha, selectedColor, buttonOpacity || 1)
          : hex_to_rgba(backgroundColor, buttonOpacity || 1 - 0.02),
      },
    ];
  };

  return (
    <Pressable
      {...currentType}
      {...restProps}
      onPress={onPress}
      style={getStyle}
    >
      {restProps.children ? (
        restProps.children
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <Icon
              color={color || ButtonTypes[type].color}
              size={size || ButtonTypes[type].size}
              style={{ marginRight: title ? 5 : 0 }}
              name={icon}
            />
          )}

          {title && (
            <Paragraph
              color={color || ButtonTypes[type].color}
              size={size || ButtonTypes[type].size}
            >
              {title}
            </Paragraph>
          )}

          {icon && iconPosition === "right" && (
            <Icon
              color={color || ButtonTypes[type].color}
              size={size || ButtonTypes[type].size}
              style={{ marginLeft: title ? 5 : 0 }}
              name={icon}
            />
          )}
        </>
      )}
    </Pressable>
  );
};
