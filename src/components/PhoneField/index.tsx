import React from 'react';
import { Text, View, Dimensions, TextInput, Modal, TouchableOpacity, FlatList,Image } from 'react-native';
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
const data = [{ title: "+1" }, { title: "+46" }]
const SCREEN_WIDTH = Dimensions.get('screen').width
const TextField = (props: IProps) => {
    const { placeholder, onChangeText, isPassword, value } = props;
    const [visible, setVisible] = React.useState(false);
    const [countryCode, setCountryCode] = React.useState("+1");
    const renderItem = (item: any) => {
        return (
            <TouchableOpacity style={styles.cell}
                onPress={() => {
                    setCountryCode(item.title)
                    setVisible(false)
                }}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    const renderModal = () => {
        return (
            <View style={styles.popupView}>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => setVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <View>
                                <FlatList
                                    scrollEnabled={true}
                                    data={data}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => renderItem(item)}
                                />
                                <TouchableOpacity style={styles.closeContainer}
                                    onPress={() => {
                                        setVisible(false)
                                    }}>
                                    <Text style={styles.closetext}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.countrySelect} onPress={() => setVisible(true)}>
                <Text >{countryCode}</Text>
                <Image style={styles.downIcon} source={IMAGES.IC_DOWN} />
                <View style={styles.countryview}></View>
            </TouchableOpacity>
            
            <TextInput
                value={value}
                placeholder = {placeholder} 
                placeholderTextColor = {colors.Gray}
                secureTextEntry={isPassword ? true : false}
                onChangeText={onChangeText}
                keyboardType={'number-pad'}
                style={styles.inputFieldStyles}
            />
            {renderModal()}
        </View>
    )
}

export default TextField;