import React from 'react';
import { View } from "react-native";
import { getBorderStyle } from './utils';
import shallow from 'zustand/shallow';
import { SimpleComponentProps } from './typings';
import { ThemeStore, useThemeStore } from "../store/theme";

export function createFourUIComponent(Component: React.ComponentType | React.FC, types: any): React.FC {

    const selector = (state: ThemeStore) => ({ colors: state.colors, radius: state.radius, borders: state.borders })

    const ReturnComponent: React.FC<SimpleComponentProps> = ({ type = "default", background = "", border = {}, ...props }) => {
        const { colors, radius, borders } = useThemeStore(selector, shallow);
        const viewTypeProps = types[type] || {};
        const bg = colors[viewTypeProps.background || background]
        const borderStyle = getBorderStyle(viewTypeProps.border || border, radius, borders)
        const flexDirection = props.flexDirection || viewTypeProps.flexDirection;

        return <Component
            {...viewTypeProps}
            {...props}
            style={[viewTypeProps.style,
            props.style,
            { backgroundColor: bg, ...borderStyle, }, { flexDirection: flexDirection }]}
        >
            {props.children}
        </Component>
    }

    return ReturnComponent

}