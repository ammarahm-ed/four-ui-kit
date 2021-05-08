import React from 'react';
import { View } from "react-native";
import { getBorderStyle } from './helpers/utils';
import shallow from 'zustand/shallow';
import { VFlexProps, VFlexTypes } from './helpers/typings';
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({ colors: state.colors, radius: state.radius, borders: state.borders })
export const VFlex: React.FC<VFlexProps> = ({type="default",background="",border={},...props}) => {
	const { colors, radius, borders } = useThemeStore(selector, shallow);
	const vFlexTypeProps = VFlexTypes[type];
	const bg = colors[ background || vFlexTypeProps.background || ""]

	const borderStyle = getBorderStyle(border || vFlexTypeProps.border || {}, radius, borders)
	const flexDirection = props.flexDirection || vFlexTypeProps.flexDirection || "column";
	const Component = props.component ? props.component : vFlexTypeProps.component ? vFlexTypeProps.component : View;

	return <Component
		{...vFlexTypeProps}
		{...props}
		style={[vFlexTypeProps.style,
		props.style,
		{ backgroundColor: bg, ...borderStyle, }, { flexDirection: flexDirection }]}
	>
		{props.children}
	</Component>
}



