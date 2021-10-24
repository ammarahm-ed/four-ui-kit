import { ViewProps } from "react-native";
import { IGeneral, LiteralUnion } from "../common";
import { ColorsType } from "../theme";

export interface FUView extends ViewProps,IGeneral {
    background?: LiteralUnion<keyof ColorsType>;
    width?: number;
    height?: number;
    component?: React.ElementType;
  }