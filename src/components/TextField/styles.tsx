import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'src/constants/colors'
import * as FONTS from 'src/assets/fonts'

const SCREEN_WIDTH = Dimensions.get('screen').width
const styles = StyleSheet.create({
    container: { flexDirection: "row", marginHorizontal: 15, height: 50, alignItems: "center" },
    textfield: {
        fontFamily: FONTS.FIRASANS_REGULAR,
        fontSize: 12,
        // backgroundColor: 'green',
        height: 50,
    },
    placeholder: {
        width: SCREEN_WIDTH * 0.3,
        textAlign: "left",
        paddingHorizontal: 0,
        fontSize: 15
    },
    inputField: {
        padding: 18,
        height: 54,
        flex: 1,
        fontSize: 15,
        borderColor: colors.LightGrayLine,
        borderRadius: 8,
        paddingHorizontal: 10,
        borderWidth: 1
    }
});
export default styles; 