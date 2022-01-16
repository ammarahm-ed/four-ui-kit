import { ViewStyle } from "react-native";
import { ThemeStore } from "src/theme/theme.interface";
import { IGeneral } from ".";

const marginMap: { [name: string]: string } = {
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
  ml: "marginLeft",
};

const colorsMap: { [name: string]: string } = {
  background: "backgroundColor",
  borderColor: "borderColor",
  color: "textColor",
};

const bordersMap = {
  border: "borderWidth",
  radius: "borderRadius",
};

const Keys = {
  marginMap: Object.keys(marginMap),
  colorsMap: Object.keys(colorsMap),
  bordersMap: Object.keys(bordersMap),
};

export function parseStyles(
  props: IGeneral,
  theme: Partial<ThemeStore>,
  type: { [name: string]: any },
  defaults?:{ [name: string]: any }
): ViewStyle {
  let style: ViewStyle = {};

  let { colors, radius, borders } = theme;

  for (let key of Keys.bordersMap) {
    let value = props[key] || type[key];
    if (key === "border") {
      //@ts-ignore prevent warning index of type can't be used.
      style[bordersMap[key]] = borders[value] || props[key];
    } else if (key === "radius") {
      //@ts-ignore prevent warning index of type can't be used.
      style[bordersMap[key]] = radius[value] || props[key];
    }
  }

  for (let key of Keys.colorsMap) {
    let value = props[key] || type[key];
    //@ts-ignore prevent warning index of type can't be used.
    style[colorsMap[key]] = colors[value] || props[key] || defaults[key]
  }

  for (let key of Keys.marginMap) {
    let value = props[key] || type[key];
    //@ts-ignore prevent warning index of type can't be used.
    style[marginMap[key]] = value;
  }
  return style;
}
