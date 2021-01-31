import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'src/constants/colors'
const SCREEN_WIDTH = Dimensions.get('screen').width
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        paddingLeft: 34,
        backgroundColor: colors.inputbg,
        borderRadius: 15,
        
        justifyContent: 'center',
        borderWidth: 1,
        flexDirection: "row"
        // marginHorizontal: 10

    },
    textfield: {
        fontFamily: 'Arial',
        fontSize: 12,
        // backgroundColor: 'green',
        height: 50,
    },
    popupView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    toucableButton: {
        height: 40,
        width: '50%',
        // backgroundColor: COLOR.THEME.GREEN,
        borderRadius: 4,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    modalOverlay: {
        height: '100%',
        width: '100%',
        backgroundColor: '#00000095',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 4,
    },
    // closeContainer: {
    //     height: 30,
    //     width: 30,
    //     position: 'absolute',
    //     top: 10,
    //     right: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    popupImage: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        paddingVertical: 50
    },
    desc: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        paddingHorizontal: 20,
    },
    cell: {
        height: 40,
        width: "100%",
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    closeContainer: {
        height: 40,
        width: "100%",
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center"
    },
    closetext: {
        color: "white"
    },

    mainContainer: {
        justifyContent: 'center',
        flexDirection: "row",
        marginHorizontal: 15,
        height: 55,
        marginTop:20,
        alignItems: 'center',
        borderColor: colors.LightGrayLine,
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
    },
    downIcon: {
        width: 11,
        height: 8,
        alignSelf: 'center',
        marginStart: 9,
    },
    placeholder: {
        width: SCREEN_WIDTH * 0.3,
        textAlign: "left",
        paddingHorizontal: 0,
        fontSize: 15,
    },
    countrySelect: {
        width: SCREEN_WIDTH * 0.15,
        borderRightWidth: 0,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    countryview:{width:1,backgroundColor:colors.Gray,height:40,marginLeft:8},
    inputFieldStyles: {
        flex: 1,
        fontSize:15,
        paddingHorizontal: 10,

    }
});
export default styles; 