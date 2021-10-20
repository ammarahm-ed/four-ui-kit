import { ViewStyle } from "react-native";
import { BorderStyleType, GeneralProps } from "../helpers/typings";

export function getBorderStyle(
  border: BorderStyleType | { [name: string]: any },
  radius: { [name: string]: number | undefined },
  width: { [name: string]: number | undefined }
) {
  let style: { [name: string]: any } = {};
  for (let key in border) {
    style[key] = radius[border[key]] || width[border[key]]
  }
  return style;
}

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

export function getComponentMargins(props: GeneralProps): ViewStyle {
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
