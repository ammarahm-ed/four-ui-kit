import { ViewProps } from "react-native";
import { IGeneral } from "../common";

export interface FUView extends ViewProps, IGeneral {
  component?: React.ElementType;
}
