import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'src/constants/colors'

const SCREEN_WIDTH = Dimensions.get('screen').width
const styles = StyleSheet.create({
    container: {marginTop:20,justifyContent: 'center',paddingLeft:16, flexDirection: "column", marginHorizontal: 15, height: 55, alignItems: "flex-start", borderColor: colors.LightGrayLine,flex:1,borderWidth: 1,
    borderRadius:8},
    textfield: {
        fontFamily: 'Arial',
        fontSize: 12,
        // backgroundColor: 'green',
        height: 50,
    },
    placeholder: {
        color:colors.Gray,
        textAlign: "left",
        paddingHorizontal: 0,
        fontSize: 11
    },
    valueStyle: {
        marginTop:2,
        fontSize: 15,
        width:'100%',
        color:colors.textcolorblack,
    },
    editContainer: {
        height: 35,
        width: 35,
        position: "absolute",
        right: 10
    },
    editButton: {
        height: "100%",
        width: "100%",
        backgroundColor: "#ff9900",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    icon: {
        height: 20,
        width: 20,
    }
});
export default styles; 