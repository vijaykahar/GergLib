import { StyleSheet } from 'react-native';
import { colors } from 'src/constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text: {
        fontFamily: 'Arial',
        fontSize: 15,
        color: colors.grey2

    }
});
export default styles;