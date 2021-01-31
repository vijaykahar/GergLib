import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'src/constants/colors'

const SCREEN_WIDTH = Dimensions.get('screen').width
const styles = StyleSheet.create({
    container: { flexDirection: "row", marginHorizontal: 10, height: 50, alignItems: "center" },
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
        width: SCREEN_WIDTH * 0.65,
        height: 40,
        borderColor: "black",
        paddingHorizontal: 10,
        borderWidth: 1
    },
    searchButton: {
        height: 35,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        width: 60,
        backgroundColor: "#f1c232",
        position: "absolute",
        right: 1,
        justifyContent: "center",
        alignItems: "center"
    }

});
export default styles; 