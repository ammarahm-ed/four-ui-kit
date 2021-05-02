import React from 'react';
import { View } from "react-native";
import { getBorderStyle } from './src/helpers/utils';
import shallow from 'zustand/shallow';
import { VFlexProps, VFlexTypes } from './helpers/typings';
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({ colors: state.colors, radius: state.radius, borders: state.borders })
export const VFlex: React.FC<VFlexProps> = (props) => {
	const { colors,radius, borders } = useThemeStore(selector, shallow);
	const vFlexTypeProps = props.type ? VFlexTypes[props.type] : VFlexTypes["default"];
	const background = props.background ? colors[props.background] : vFlexTypeProps.background ? colors[vFlexTypeProps.background] : undefined;
	const borderStyle = props.border ? getBorderStyle(props.border, radius, borders) : vFlexTypeProps.border ? getBorderStyle(vFlexTypeProps.border, radius, borders) : undefined;
    const flexDirection = props.flexDirection ? props.flexDirection : vFlexTypeProps.flexDirection ? vFlexTypeProps.flexDirection : "column";
	const Component = props.component ? props.component : vFlexTypeProps.component ? vFlexTypeProps.component : View;

	return <Component
		{...vFlexTypeProps}
		{...props}
		style={[vFlexTypeProps.style,
		props.style,
		{ backgroundColor: background, ...borderStyle,},{flexDirection:flexDirection}]}
	>
		{props.children}
	</Component>
}



