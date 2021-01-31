import React from 'react';

import { View, Image, Text } from 'react-native';
import * as IMAGES from 'src/assets/images/index';
import { colors } from 'src/constants/colors';
import styles from './styles';

interface INodataProps {

}
const NoDataFound = () => (
    <View style={styles.container}>
        <Image source={IMAGES.IMG_NO_DATA} style={{ width: '80%', height: 300, }}></Image>
        <Text style={styles.text}>{'Unfortunately, we couldn\'t find what you\'re looking for.'}</Text>
    </View>
);

export default NoDataFound;
