import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style';

interface IButtonProps {
    title?: string;
    onPress: any;
    style?: any
}

const Button = (props: IButtonProps) => {
    const { title, onPress, style } = props;
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );

}
export default Button;