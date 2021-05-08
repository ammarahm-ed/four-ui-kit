import { createFourUIComponent, HFlex, Paragraph, VFlex } from "four-ui-kit";
import { LiteralUnion, SimpleComponentProps } from "four-ui-kit/src/helpers/typings";
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps,SimpleComponentProps {
  type?:LiteralUnion<"default" | "error" | "success">
}
let types: { [name: string]: ButtonProps } = {
  default:{
    flexDirection:"column"
  }
}
const Button:React.FC<ButtonProps> = createFourUIComponent(TouchableOpacity,types);

const App = () => {

  

  return <VFlex
    type="safearea-container"
  >

    <Button/>

    <VFlex
      type="centered"
    >
     <HFlex
     flex={1}
     
     >
       <Paragraph>
         Hello
       </Paragraph>
       <Paragraph>
         World
       </Paragraph>
     </HFlex>
    </VFlex>

  </VFlex>
};

export default App;
