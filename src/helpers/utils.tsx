import { BorderStyleType } from "../helpers/typings";

export function getBorderStyle(
  border: BorderStyleType | {},
  radius: { [name: string]: number | undefined },
  width: { [name: string]: number | undefined }
) {
  let style: { [name: string]: any } = {};
  Object.keys(border).forEach(
    (key: string) => (style[key] = radius[key] || width[key])
  );
  return style;
}
