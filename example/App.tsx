import { createFourUIComponent, HFlex, Paragraph, useThemeStore, VFlex } from "four-ui-kit";
import { LiteralUnion, SimpleComponentProps, VFlexTypes } from "four-ui-kit/src/helpers/typings";
import React, { useEffect } from 'react';
import { TouchableOpacity, TouchableOpacityProps, useColorScheme } from 'react-native';

VFlexTypes["safearea-container"] = {
  ...VFlexTypes["safearea-container"],
  background: "background"
}


interface ButtonProps extends TouchableOpacityProps, SimpleComponentProps {
  type?: LiteralUnion<"default" | "error" | "success">
}
let types: { [name: string]: ButtonProps } = {
  default: {
    flexDirection: "column"
  },
  round: {
    border: {
      borderRadius: "circle"
    },
    background: "accent",
    style: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      alignItems: 'center',
    }
  }
}
const Button: React.FC<ButtonProps> = createFourUIComponent(TouchableOpacity, types);

const App = () => {
  const setTheme = useThemeStore(state => state.setTheme);
  const isNightMode = useColorScheme() === "dark"

  useEffect(() => {
    setTheme(isNightMode ? "dark" : "default");
  }, [isNightMode])

  return <VFlex type="safearea-container">
    <VFlex type="centered">
      <HFlex>
        <Button type="round">
          <Paragraph color="black">
            Click Me!
          </Paragraph>
        </Button>
      </HFlex>
    </VFlex>
  </VFlex>
};

export default App;
