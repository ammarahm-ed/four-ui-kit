import { HFlex, Paragraph, useThemeStore, VFlex } from "four-ui-kit";
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import Button from "./src/button";

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
