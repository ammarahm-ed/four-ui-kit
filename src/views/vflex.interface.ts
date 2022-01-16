import { LiteralUnion } from "../common";
import { FUView } from "./fuview.interface";

export interface IVFlex extends FUView {
  flexDirection?: "column" | "column-reverse";
  type?: LiteralUnion<"default" | "safearea-container" | "centered">;
}
