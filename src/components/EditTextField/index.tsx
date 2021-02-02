import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import { colors } from 'src/constants/colors'
import * as IMAGES from 'src/assets/images/index';


interface IProps {
    placeholder: any;
    value: any;
    isPassword: boolean;
    onChangeText: Function;
}
const TextField = (props: IProps) => {
    const { placeholder, value, onChangeText, isPassword } = props;
    return (
        <View style={styles.container}>
            {value.length > 0 ? (<Text style={styles.placeholder}>{placeholder}</Text>) : null}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.Gray}
                secureTextEntry={isPassword ? true : false}
                onChangeText={(text: string) => onChangeText(text)}
                style={styles.valueStyle}
                value={value}
            />
        </View>
    )
}

export default TextField;