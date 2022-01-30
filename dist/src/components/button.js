var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Pressable, } from "react-native";
import shallow from "zustand/shallow";
import { Paragraph } from "../typography/paragraph";
import { hex_to_rgba, rgba_linear_shade } from "../common/colors";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";
import { Icon } from "./icon";
export var ButtonTypes = {
    "default": {
        selected: "accent",
        background: "accent",
        opacity: 1,
        color: "white",
        size: "md",
        width: "100%",
        height: 50,
        alpha: 0.1
    },
    icon: {
        color: "primary",
        size: "xxxl",
        background: "background",
        selected: "muted",
        radius: "circle",
        style: {
            width: 55,
            height: 55
        }
    }
};
var selector = function (state) { return ({
    colors: state.colors,
    sizes: state.sizes,
    radius: state.radius,
    borders: state.borders
}); };
export var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "default" : _b, selected = _a.selected, background = _a.background, opacity = _a.opacity, alpha = _a.alpha, style = _a.style, onPress = _a.onPress, title = _a.title, color = _a.color, size = _a.size, icon = _a.icon, _c = _a.iconPosition, iconPosition = _c === void 0 ? "left" : _c, restProps = __rest(_a, ["type", "selected", "background", "opacity", "alpha", "style", "onPress", "title", "color", "size", "icon", "iconPosition"]);
    var state = useThemeStore(selector, shallow);
    var currentType = ButtonTypes[type] || {};
    var selectedColor = state.colors[selected || ButtonTypes[type].selected || "accent"];
    var backgroundColor = state.colors[background || ButtonTypes[type].background || "accent"];
    var buttonOpacity = opacity || ButtonTypes[type].opacity || 1;
    var isDark = state.colors.dark;
    var buttonAlpha = alpha || ButtonTypes[type].alpha || 0.04;
    buttonAlpha = isDark ? buttonAlpha * -1 : buttonAlpha;
    var parsedStyles = parseStyles(restProps, state, currentType);
    var getStyle = function (state) {
        return [
            //@ts-ignore
            {
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 0,
                flexDirection: "row"
            },
            parsedStyles,
            style,
            {
                backgroundColor: state.pressed
                    ? rgba_linear_shade(buttonAlpha, selectedColor, buttonOpacity || 1)
                    : hex_to_rgba(backgroundColor, buttonOpacity || 1 - 0.02)
            },
        ];
    };
    return (<Pressable {...currentType} {...restProps} onPress={onPress} style={getStyle}>
      {restProps.children ? (restProps.children) : (<>
          {icon && iconPosition === "left" && (<Icon color={color || ButtonTypes[type].color} size={size || ButtonTypes[type].size} style={{ marginRight: title ? 5 : 0 }} name={icon}/>)}

          {title && (<Paragraph color={color || ButtonTypes[type].color} size={size || ButtonTypes[type].size}>
              {title}
            </Paragraph>)}

          {icon && iconPosition === "right" && (<Icon color={color || ButtonTypes[type].color} size={size || ButtonTypes[type].size} style={{ marginLeft: title ? 5 : 0 }} name={icon}/>)}
        </>)}
    </Pressable>);
};
