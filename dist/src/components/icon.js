var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
import { createFourUIComponent } from "../create";
var Icons = {
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
    SimpleLineIcons: SimpleLineIconsIcons
};
export var IconTypes = {
    "default": {
        size: "sm",
        color: "accent"
    }
};
export var BaseIcon = function (_a) {
    var family = _a.family, props = __rest(_a, ["family"]);
    var Icon = Icons[family || "MaterialCommunityIcons"];
    //@ts-ignore We are overriding some icon props here which use internal themeing
    return <Icon {...props}/>;
};
/**
 * Ionicons icon wrapper
 */
export var Ionicon = createFourUIComponent(function (props) {
    return <BaseIcon {...props} family="Ionicons"/>;
}, IconTypes);
/**
 * Feather icon wrapper
 */
export var Feather = createFourUIComponent(function (props) {
    return <BaseIcon {...props} family="Feather"/>;
}, IconTypes);
/**
 * MaterialIcons icon wrapper
 */
export var MaterialIcon = createFourUIComponent(function (props) {
    return <BaseIcon {...props} family="MaterialIcons"/>;
}, IconTypes);
/**
 * MaterialCommunityIcons icon wrapper
 */
export var MaterialCommunityIcon = createFourUIComponent(function (props) {
    return <BaseIcon {...props} family="MaterialCommunityIcons"/>;
}, IconTypes);
export var Icon = createFourUIComponent(BaseIcon, IconTypes);
