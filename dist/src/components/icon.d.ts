import React from "react";
import EntypoIcons from "react-native-vector-icons/Entypo";
import { IParagraph } from "../typography/paragraph.interface";
import { LiteralUnion } from "../common/index";
import { FeatherNames, IoniconsNames, MaterialCommunityIconsNames, MaterialIconsNames } from "./icons.names";
declare const Icons: {
    Entypo: typeof EntypoIcons;
    EvilIcons: typeof EntypoIcons;
    Feather: typeof EntypoIcons;
    Fontisto: typeof EntypoIcons;
    FontAwesome: typeof EntypoIcons;
    Foundation: typeof EntypoIcons;
    Ionicons: typeof EntypoIcons;
    MaterialIcons: typeof EntypoIcons;
    MaterialCommunityIcons: typeof EntypoIcons;
    Octicons: typeof EntypoIcons;
    Zocial: typeof EntypoIcons;
    SimpleLineIcons: typeof EntypoIcons;
};
export interface IIcon extends IParagraph {
    type?: LiteralUnion<"default" | "error" | "success">;
    name?: string;
    family?: keyof typeof Icons;
}
export declare const IconTypes: {
    [name: string]: IIcon;
};
export declare const BaseIcon: ({ family, ...props }: IIcon) => JSX.Element;
export interface IIonicon extends IIcon {
    name: LiteralUnion<IoniconsNames>;
}
/**
 * Ionicons icon wrapper
 */
export declare const Ionicon: React.FC<IIonicon>;
export interface IFeather extends IIcon {
    name: LiteralUnion<FeatherNames>;
}
/**
 * Feather icon wrapper
 */
export declare const Feather: React.FC<IFeather>;
export interface IMaterialIcon extends IIcon {
    name: LiteralUnion<MaterialIconsNames>;
}
/**
 * MaterialIcons icon wrapper
 */
export declare const MaterialIcon: React.FC<IMaterialIcon>;
export interface IMaterialCommunityIcon extends IIcon {
    name: LiteralUnion<MaterialCommunityIconsNames>;
}
/**
 * MaterialCommunityIcons icon wrapper
 */
export declare const MaterialCommunityIcon: React.FC<IMaterialCommunityIcon>;
export declare const Icon: React.FC<IIcon>;
export {};
//# sourceMappingURL=icon.d.ts.map