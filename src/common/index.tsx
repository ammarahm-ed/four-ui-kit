import { BorderType, ColorsType, RadiusType } from "../theme";
import { FUView } from "../views/fuview.interface";

export type LiteralUnion<T extends U, U = string> = T | (U & {});

export interface IGeneral {
  [name:string]:unknown,
  m?: number,
  p?: number,
  mv?: number,
  pv?: number,
  mh?: number,
  ph?: number,
  pt?: number,
  pb?: number,
  pr?: number,
  pl?: number,
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  border?: LiteralUnion<keyof BorderType>;
  radius?: LiteralUnion<keyof RadiusType>;
  flex?: number
}

export interface SimpleComponentProps extends FUView {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  type?: LiteralUnion<"default">;
  background?: LiteralUnion<keyof ColorsType>;
  width?: number;
  height?: number;
  border?: LiteralUnion<keyof BorderType>;
  radius?: LiteralUnion<keyof RadiusType>;
}


