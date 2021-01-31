import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'src/constants/colors'

const SCREEN_WIDTH = Dimensions.get('screen').width
const styles = StyleSheet.create({
    container: { flexDirection: "row", marginHorizontal: 15, height: 50, marginTop: 5, },
    textfield: {
        fontFamily: 'Arial',
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
        width: SCREEN_WIDTH * 0.6,
        height: 100,
        borderColor: "black",
        paddingHorizontal: 10,
        borderWidth: 1
    }
});
export default styles; 