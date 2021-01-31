import React from 'react';
import { Text, View, Dimensions, Image } from 'react-native';
import styles from './styles';
import { colors } from 'src/constants/colors'
import * as IMAGES from 'src/assets/images/index';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

interface IProps {
    placeholder: any;
    value: any;
    style: any;
    isPassword: boolean;
    onChangeText: Function;
}
const TextField = (props: IProps) => {
    const { placeholder, value, onChangeText,isPassword,style} = props;
    return (
        <View style={[styles.container,style]}>
            {value.length > 0  ? (<Text style={styles.placeholder}>{placeholder}</Text>) : null}
            <TextInput placeholder = {placeholder} 
                placeholderTextColor = {colors.Gray}
                secureTextEntry={isPassword ? true : false} onChangeText={onChangeText} style={styles.valueStyle} value={value}></TextInput>
        </View>
    )
}

export default TextField;