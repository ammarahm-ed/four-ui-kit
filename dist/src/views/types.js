import { SafeAreaView } from "react-native";
export var VFlexTypes = {
    "default": {
        flexDirection: "column"
    },
    "safearea-container": {
        component: SafeAreaView
    },
    centered: {
        style: {
            justifyContent: "center",
            alignItems: "center"
        }
    }
};
export var HFlexTypes = {
    "default": {
        flexDirection: "row"
    },
    centered: {
        style: {
            justifyContent: "center",
            alignItems: "center"
        }
    }
};
