import { ViewStyle } from "react-native";
import { IGeneral } from ".";

const styleKeyMap = {
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
    //@ts-ignore
    if (props[key]) {
       //@ts-ignore
      style[styleKeyMap[key]] = props[key];
    };
  }
  return style
}
