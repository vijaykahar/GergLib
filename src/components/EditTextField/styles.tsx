import { utils } from '@react-native-firebase/app';
import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'src/constants/colors'
import * as util from 'src/constants/utils'

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "90%",
        marginTop: util.scalerHeight(15),
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        justifyContent: "flex-end"
    },
    textfield: {
        fontFamily: 'Arial',
        fontSize: 12,
        // backgroundColor: 'green',
        height: 50,
    },
    placeholder: {
        color: colors.Gray,
        textAlign: "left",
        paddingHorizontal: 0,
        fontSize: 11
    },
    valueStyle: {
        marginTop: 2,
        fontSize: 15,
        width: '100%',
        color: colors.textcolorblack,
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