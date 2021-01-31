import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: "black",
    },
    text: {
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    imageContainer: {
        width: 26,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 26,
        height: 26,
        resizeMode: 'contain'
    },
    // container: { flexDirection: "row", marginHorizontal: 15, height: 50, alignItems: "center" },
    button: {
        backgroundColor: colors.ProgressOrange,
        marginHorizontal: 15,
        height: 44,
        flex: 1,
        borderRadius: 44,
        justifyContent: "center",
        alignItems: "center"
    },
    title: { fontFamily: 'Arial', textTransform: 'uppercase', fontSize: 15, color: colors.white, fontWeight: 'bold' }
});
export default styles; 