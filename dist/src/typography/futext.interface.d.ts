import { TextProps } from "react-native";
import { IGeneral, LiteralUnion } from "../common";
import { ColorsType, SizesType } from "../theme/types";
export interface FUText extends TextProps, IGeneral {
    color?: LiteralUnion<keyof ColorsType>;
    align?: "left" | "right" | "center";
    size?: LiteralUnion<keyof SizesType>;
    font?: LiteralUnion<"heading" | "paragraph">;
}
//# sourceMappingURL=futext.interface.d.ts.map