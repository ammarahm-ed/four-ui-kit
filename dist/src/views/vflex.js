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
import { View } from "react-native";
import shallow from "zustand/shallow";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";
import { VFlexTypes } from "./types";
var selector = function (state) { return ({
    colors: state.colors,
    radius: state.radius,
    borders: state.borders
}); };
export var VFlex = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "default" : _b, props = __rest(_a, ["type"]);
    var state = useThemeStore(selector, shallow);
    var currentType = VFlexTypes[type] || {};
    var flexDirection = props.flexDirection || currentType.flexDirection || "column";
    var parsedStyles = parseStyles(props, state, currentType);
    var Component = props.component
        ? props.component
        : currentType.component
            ? currentType.component
            : View;
    return (<Component {...currentType} {...props} style={[
            currentType.style,
            {
                flex: props.flex || currentType.flex
            },
            parsedStyles,
            props.style,
            {
                flexDirection: flexDirection
            },
        ]}>
      {props.children}
    </Component>);
};
