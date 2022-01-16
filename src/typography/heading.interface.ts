import { LiteralUnion } from "../common";
import { FUText } from "./futext.interface";

export interface IHeading extends FUText {
  type?: LiteralUnion<"default">;
}
