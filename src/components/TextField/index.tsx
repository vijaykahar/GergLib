import React from 'react';
import { Text, View, Dimensions, TextInput } from 'react-native';
import styles from './styles';
import { colors } from 'src/constants/colors'
import * as IMAGES from 'src/assets/images/index';

interface IProps {
    onChangeText: Function;
    placeholder: string;
    isPassword: boolean;
    keyboardType: any;
    value: any;
}

const TextField = (props: IProps) => {
    const { placeholder, onChangeText, isPassword, keyboardType, value } = props;
    return (
        <View style={styles.container}>
            
            <TextInput
                value={value}
                placeholder = {placeholder} 
                placeholderTextColor = {colors.Gray}
                secureTextEntry={isPassword ? true : false}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                style={styles.inputField}
            />
        </View>
    )
}

export default TextField;