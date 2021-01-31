import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';
import { IS_IPHONE } from 'src/constants/constant';
import * as FONTS from 'src/assets/fonts'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10
    },
    leftImgContainer: {
        width: 40,
        height: 40,
        position: 'absolute',
        left: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    RightButtonContainer: {
        width: 40,
        height: 40,
        // backgroundColor: 'green',
        position: 'absolute',
        justifyContent: 'center',
        right: 20,
        alignItems: 'center'
    },
    rightImgContainer: {
        width: 70,
        height: 38,
        backgroundColor: colors.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    pointText: {
        fontFamily: 'Arial',
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        color: colors.lightGrey
    },
    headerText: {
        fontSize: 26,
        fontFamily: FONTS.FIRASANS_BOLD,
        color: colors.textcolorblack,
        alignSelf: 'center'
    },
    img: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    RightImg: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        // tintColor: colors.offWhite
    },
    starImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    logoImg: {
        width: '40%',
        height: 40,
        resizeMode: 'contain'
    }
});
export default styles;