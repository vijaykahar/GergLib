import React from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from 'src/constants/colors'
import * as IMAGES from 'src/assets/images/index';

interface IProps {
    onChangeText: Function;
    placeholder: string;
    isPassword: boolean;
    keyboardType: any;
    value: any;
    onPress: any;
}

const SearchBox = (props: IProps) => {
    const { placeholder, onChangeText, isPassword, keyboardType, value, onPress } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.placeholder}>{placeholder + " :"}</Text>
            <TextInput
                value={value}
                secureTextEntry={isPassword ? true : false}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                style={styles.inputField}
            />
            <TouchableOpacity
                onPress={onPress}
                style={styles.searchButton}>
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBox;