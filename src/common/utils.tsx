import { ViewStyle } from "react-native";
import { IGeneral } from ".";

const styleKeyMap:{[name:string]:string} = {
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
}

export function getComponentMargins(props: IGeneral): ViewStyle {
  let style: ViewStyle = {};
  for (let key of Object.keys(styleKeyMap)) {
    if (props[key]) {
      //@ts-ignore prevent warning index of type can't be used.
      style[styleKeyMap[key]] = props[key];
    };
  }
  return style
}
