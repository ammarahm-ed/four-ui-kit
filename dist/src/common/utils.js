var marginMap = {
    p: "padding",
    m: "margin",
    ph: "paddingHorizontal",
    pv: "paddingVertical",
    pt: "paddingTop",
    pb: "paddingBottom",
    pr: "paddingRight",
    pl: "paddingLeft",
    mh: "marginHorizontal",
    mv: "marginVertical",
    mt: "marginTop",
    mb: "marginBottom",
    mr: "marginRight",
    ml: "marginLeft"
};
var positionMap = {
    justifyContent: "justifyContent",
    alignItems: "alignItems",
    width: "width",
    height: "height",
    alignSelf: "aligSelf"
};
var colorsMap = {
    background: "backgroundColor",
    borderColor: "borderColor",
    color: "color"
};
var bordersMap = {
    border: "borderWidth",
    radius: "borderRadius"
};
var Keys = {
    marginMap: Object.keys(marginMap),
    colorsMap: Object.keys(colorsMap),
    bordersMap: Object.keys(bordersMap),
    positionMap: Object.keys(positionMap)
};
export function parseStyles(props, theme, type, defaults) {
    var style = {};
    var colors = theme.colors, radius = theme.radius, borders = theme.borders;
    if (!defaults)
        defaults = {};
    for (var _i = 0, _a = Keys.bordersMap; _i < _a.length; _i++) {
        var key = _a[_i];
        var value = props[key] || type[key];
        if (key === "border") {
            //@ts-ignore prevent warning index of type can't be used.
            style[bordersMap[key]] = borders[value] || props[key];
        }
        else if (key === "radius") {
            //@ts-ignore prevent warning index of type can't be used.
            style[bordersMap[key]] = radius[value] || props[key];
        }
    }
    for (var _b = 0, _c = Keys.colorsMap; _b < _c.length; _b++) {
        var key = _c[_b];
        //@ts-ignore
        var value = props[key] || type[key] || defaults[key];
        //@ts-ignore prevent warning index of type can't be used.
        style[colorsMap[key]] = colors[value] || props[key];
    }
    for (var _d = 0, _e = Keys.marginMap; _d < _e.length; _d++) {
        var key = _e[_d];
        var value = props[key] || type[key];
        //@ts-ignore prevent warning index of type can't be used.
        style[marginMap[key]] = value;
    }
    for (var _f = 0, _g = Keys.positionMap; _f < _g.length; _f++) {
        var key = _g[_f];
        var value = props[key] || type[key];
        if (value) {
            //@ts-ignore prevent warning index of type can't be used.
            style[positionMap[key]] = value;
        }
    }
    return style;
}
