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
import { Text } from "react-native";
import shallow from "zustand/shallow";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";
import { ParagraphTypes } from "./types";
var selector = function (state) { return ({
    colors: state.colors,
    sizes: state.sizes,
    radius: state.radius,
    borders: state.borders,
    fonts: state.fonts
}); };
var defaults = {
    color: "paragraph",
    size: "sm",
    font: "paragraph"
};
export var Paragraph = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "default" : _b, props = __rest(_a, ["type"]);
    var state = useThemeStore(selector, shallow);
    var sizes = state.sizes, fonts = state.fonts;
    var currentType = ParagraphTypes[type] || {};
    var fontSize = sizes[props.size || currentType.size || defaults.size];
    var parsedStyles = parseStyles(props, state, currentType, defaults);
    return (<Text {...currentType} {...props} style={[
            currentType.style,
            //@ts-ignore
            {
                flex: props.flex || currentType.flex,
                fontSize: fontSize,
                textAlign: props.align || currentType.align,
                fontFamily: 
                //@ts-ignore
                fonts[props.font || currentType.font || defaults.paragraph]
            },
            parsedStyles,
            props.style,
        ]}>
      {props.children}
    </Text>);
};
