import { BorderStyleType } from "../helpers/typings";

export function getBorderStyle(
  border: BorderStyleType | {[name:string]:any},
  radius: { [name: string]: number | undefined },
  width: { [name: string]: number | undefined }
) {
  let style: { [name: string]: any } = {};
  for (let key in border) {
    style[key] = radius[border[key]] || width[border[key]]
  }
  return style;
}
