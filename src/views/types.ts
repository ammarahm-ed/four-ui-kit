import { SafeAreaView } from "react-native";
import { IHFlex } from "./hflex.interface";
import { IVFlex } from "./vflex.interface";

export const VFlexTypes: { [name: string]: IVFlex; default: IVFlex } = {
  default: {
    flexDirection: "column",
  },
  "safearea-container": {
    component: SafeAreaView,
  },
  centered: {
    style: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

export const HFlexTypes: { [name: string]: IHFlex; default: IHFlex } = {
  default: {
    flexDirection: "row",
  },
  centered: {
    style: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
};
