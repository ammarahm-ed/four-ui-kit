import React from "react";
import EntypoIcons from "react-native-vector-icons/Entypo";
import EvilIconsIcons from "react-native-vector-icons/EvilIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import FoundationIcons from "react-native-vector-icons/Foundation";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcons from "react-native-vector-icons/MaterialIcons";
import OcticonsIcons from "react-native-vector-icons/Octicons";
import SimpleLineIconsIcons from "react-native-vector-icons/SimpleLineIcons";
import ZocialIcons from "react-native-vector-icons/Zocial";
import { IParagraph } from "../typography/paragraph.interface";
import { LiteralUnion } from "../common/index";
import { createFourUIComponent } from "../create";
import {
  FeatherNames,
  IoniconsNames,
  MaterialCommunityIconsNames,
  MaterialIconsNames
} from "./icons.names";

const Icons = {
  Entypo: EntypoIcons,
  EvilIcons: EvilIconsIcons,
  Feather: FeatherIcons,
  Fontisto: Fontisto,
  FontAwesome: FontAwesomeIcons,
  Foundation: FoundationIcons,
  Ionicons: IoniconsIcons,
  MaterialIcons: MaterialIconsIcons,
  MaterialCommunityIcons: MaterialCommunityIcons,
  Octicons: OcticonsIcons,
  Zocial: ZocialIcons,
  SimpleLineIcons: SimpleLineIconsIcons,
};

export interface IIcon extends IParagraph {
  type?: LiteralUnion<"default" | "error" | "success">;
  name?: string;
  family?: keyof typeof Icons;
}

export const IconTypes: { [name: string]: IIcon } = {
  default: {
    size: "sm",
    color: "accent",
  },
};

export const BaseIcon = ({ family, ...props }: IIcon) => {
  let Icon = Icons[family || "MaterialCommunityIcons"];
  //@ts-ignore We are overriding some icon props here which use internal themeing
  return <Icon {...props} />;
};

export interface IIonicon extends IIcon {
  name: LiteralUnion<IoniconsNames>;
}

/**
 * Ionicons icon wrapper
 */
export const Ionicon: React.FC<IIonicon> = createFourUIComponent((props) => {
  return <BaseIcon {...props} family="Ionicons" />;
}, IconTypes);

export interface IFeather extends IIcon {
  name: LiteralUnion<FeatherNames>;
}

/**
 * Feather icon wrapper
 */
export const Feather: React.FC<IFeather> = createFourUIComponent((props) => {
  return <BaseIcon {...props} family="Feather" />;
}, IconTypes);

export interface IMaterialIcon extends IIcon {
  name: LiteralUnion<MaterialIconsNames>;
}

/**
 * MaterialIcons icon wrapper
 */
export const MaterialIcon: React.FC<IMaterialIcon> = createFourUIComponent(
  (props) => {
    return <BaseIcon {...props} family="MaterialIcons" />;
  },
  IconTypes
);

export interface IMaterialCommunityIcon extends IIcon {
  name: LiteralUnion<MaterialCommunityIconsNames>;
}

/**
 * MaterialCommunityIcons icon wrapper
 */
export const MaterialCommunityIcon: React.FC<IMaterialCommunityIcon> =
  createFourUIComponent((props) => {
    return <BaseIcon {...props} family="MaterialCommunityIcons" />;
  }, IconTypes);

export const Icon: React.FC<IIcon> = createFourUIComponent(BaseIcon, IconTypes);
