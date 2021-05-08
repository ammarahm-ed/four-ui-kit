import React from 'react';
import { View } from "react-native";
import shallow from 'zustand/shallow';
import { HFlexTypes,HFlexProps  } from './helpers/typings';
import { getBorderStyle } from './helpers/utils';
import { ThemeStore, useThemeStore } from "./store/theme";

const selector = (state: ThemeStore) => ({ colors: state.colors, radius: state.radius, borders: state.borders })
export const VFlex: React.FC<HFlexProps> = ({type="default",background="",border={},...props}) => {
	const { colors, radius, borders } = useThemeStore(selector, shallow);
	const hFlexTypeProps = HFlexTypes[type];
	const bg = colors[hFlexTypeProps.background || background]

	const borderStyle = getBorderStyle(hFlexTypeProps.border || border, radius, borders)
	const flexDirection = props.flexDirection || hFlexTypeProps.flexDirection || "column";
	const Component = props.component ? props.component : hFlexTypeProps.component ? hFlexTypeProps.component : View;

	return <Component
		{...hFlexTypeProps}
		{...props}
		style={[hFlexTypeProps.style,
		props.style,
		{ backgroundColor: bg, ...borderStyle, }, { flexDirection: flexDirection }]}
	>
		{props.children}
	</Component>
}



