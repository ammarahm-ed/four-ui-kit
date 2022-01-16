var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import create from "zustand";
export var Themes = {
    "default": {
        primary: "#55a630",
        secondary: "#ffffff",
        tertiary: "#ffffff",
        accent: "#55a630",
        shade: "#55a63014",
        background: "#ffffff",
        muted: "#f7f7f7",
        text: "#000000",
        heading: "#000000",
        paragraph: "#303030",
        info: "#808080",
        gray: "#BEBEBE",
        black: "#000000",
        white: "#ffffff",
        error: "#ff9494",
        success: "#22bb33",
        warning: "#f0ad4e",
        border: "#e8e8e8",
        transparent: "transparent",
        transgray: "#80808030"
    },
    dark: {
        secondary: "#202020",
        tertiary: "#202020",
        background: "#202020",
        muted: "#303030",
        text: "#ffffff",
        heading: "#ffffff",
        paragraph: "#E0E0E0",
        info: "#808080",
        border: "#383838",
        dark: true,
        transparent: "transparent",
        transgray: "#80808030"
    }
};
export var Fonts = {};
export var Sizes = {
    xxxxs: 8,
    xxxs: 9,
    xxs: 11,
    xs: 13,
    sm: 15,
    md: 18,
    lg: 23,
    xl: 28,
    xxl: 32,
    xxxl: 36,
    xxxxl: 38
};
export var Radius = {
    sharpcorners: 1,
    softcorners: 5,
    roundcorners: 10,
    squircle: 25,
    circle: 100,
    none: 0
};
export var Borders = {
    thin: 0.5,
    normal: 1,
    thick: 2,
    verythick: 4,
    none: 0
};
export var useThemeStore = create(function (set) { return ({
    colors: __assign({}, Themes["default"]),
    sizes: Sizes,
    radius: Radius,
    borders: Borders,
    fonts: Fonts,
    setFonts: function (fonts) {
        return set(function (state) { return ({ fonts: __assign(__assign({}, state.fonts), fonts) }); });
    },
    setColors: function (colors) {
        return set(function (state) { return ({ colors: __assign(__assign({}, state.colors), colors) }); });
    },
    setBorders: function (borders) {
        return set(function (state) { return ({ borders: __assign(__assign({}, state.borders), borders) }); });
    },
    setSizes: function (sizes) {
        return set(function (state) { return ({ sizes: __assign(__assign({}, state.sizes), sizes) }); });
    },
    setRadius: function (radius) {
        return set(function (state) { return ({ radius: __assign(__assign({}, state.radius), radius) }); });
    },
    setTheme: function (theme) {
        return set(function () { return ({ colors: __assign(__assign({}, Themes["default"]), Themes[theme]) }); });
    }
}); });
