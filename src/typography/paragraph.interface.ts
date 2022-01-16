import { LiteralUnion } from "../common";
import { FUText } from "./futext.interface";

export interface IParagraph extends FUText {
  type?: LiteralUnion<"default">;
}
