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
import shallow from "zustand/shallow";
import { parseStyles } from "../common/utils";
import { useThemeStore } from "../theme";
var selector = function (state) { return ({
    colors: state.colors,
    radius: state.radius,
    borders: state.borders,
    sizes: state.sizes
}); };
export function createFourUIComponent(Component, types) {
    var ReturnComponent = function (_a) {
        var _b = _a.type, type = _b === void 0 ? "default" : _b, props = __rest(_a, ["type"]);
        var state = useThemeStore(selector, shallow);
        var colors = state.colors, sizes = state.sizes;
        var currentType = types[type] || {};
        var flexDirection = props.flexDirection || currentType.flexDirection;
        var parsedStyles = parseStyles(props, state, currentType);
        return (<Component {...currentType} {...props} style={[
                currentType.style,
                {
                    flexDirection: flexDirection
                },
                parsedStyles,
                props.style,
            ]} 
        //@ts-ignore
        size={sizes[props.size || currentType.size || "sm"]} 
        //@ts-ignore
        color={colors[props.color || currentType.color || "paragraph"]}>
        {props.children}
      </Component>);
    };
    return ReturnComponent;
}
