import { StyleSheet } from 'react-native';
import * as CONSTANTS from 'src/constants/constant';
import { colors } from 'src/constants/colors';
// import * as COLOR from '../../../constants/colors';

const styles = StyleSheet.create({
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: colors.blackoverlay
    }
});
export default styles 