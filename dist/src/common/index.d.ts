import { BorderWidth, ColorsType, BorderRadius } from "../theme/types";
import { FUView } from "../views/fuview.interface";
export declare type LiteralUnion<T extends U, U = string> = T | (U & {});
export interface IGeneral {
    [name: string]: unknown;
    /**
     * Margin
     */
    m?: number;
    /**
     * Padding
     */
    p?: number;
    /**
     * Margin Vertical
     */
    mv?: number;
    /**
     * Padding Vertical
     */
    pv?: number;
    /**
     * Margin Horizontal
     */
    mh?: number;
    /**
     * Padding Horizontal
     */
    ph?: number;
    /**
     * Padding Top
     */
    pt?: number;
    /**
     * Padding Bottom
     */
    pb?: number;
    /**
     * Padding Right
     */
    pr?: number;
    /**
     * Padding Left
     */
    pl?: number;
    /**
     * Margin Top
     */
    mt?: number;
    /**
     * Margin Bottom
     */
    mb?: number;
    /**
     * Margin Right
     */
    mr?: number;
    /**
     * Margin Left
     */
    ml?: number;
    /**
     * Border Width
     */
    border?: LiteralUnion<keyof BorderWidth>;
    /**
     * Border Radius
     */
    radius?: LiteralUnion<keyof BorderRadius>;
    /**
     * Border Color
     */
    borderColor?: LiteralUnion<keyof ColorsType>;
    flex?: number;
    justifyContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    width?: number | string;
    height?: number | string;
    background?: LiteralUnion<keyof ColorsType>;
}
export interface SimpleComponentProps extends FUView {
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    type?: LiteralUnion<"default">;
}
//# sourceMappingURL=index.d.ts.map