import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import styles from './style';
import { log } from 'react-native-reanimated';
import { colors } from 'src/constants/colors';
import * as IMAGES from 'src/assets/images/index';
import * as FONTS from 'src/assets/fonts'
interface IHeaderProps {
    leftImg?: any;
    rightImg?: any;
    leftClick?: any;
    rightClick?: any;
    title?: string;
    bgColor?: any;
    logoImg?: any;
    pointsText?: string;
    rightbtn?: any;
    darkStatusBar?: boolean;
}
// This will help you to render custom navigation bar. 
// Its defualt component for my structure. We can modify as per requirement
const Header = (props: IHeaderProps) => {

    const { leftImg, rightImg, leftClick, rightClick, title, bgColor, logoImg, pointsText, rightbtn, darkStatusBar } = props;
    return (
        <>
            <StatusBar barStyle={"dark-content"} />

            <View style={[styles.container, { backgroundColor: bgColor ? bgColor : colors.white }]}>

                <TouchableOpacity style={styles.leftImgContainer} onPress={leftClick}>
                    <Image source={leftImg} style={styles.img}></Image>
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                <TouchableOpacity style={styles.RightButtonContainer} onPress={rightClick}>
                    <Image source={rightImg} style={styles.RightImg}></Image>
                </TouchableOpacity>


            </View>
        </>

    );

}
export default Header;