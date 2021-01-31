import React from 'react';
import { View, ActivityIndicator, Modal, } from 'react-native';
import styles from './style';
import { colors } from '../../constants/colors';

interface ILoaderProps {
    isLoading: boolean;
}

const Loader = (props: ILoaderProps) => {

    const { isLoading } = props;

    // When loader is not active, no need to return whole view. So return with null
    if (!isLoading) return null;

    return (

        // <Modal
        //     animationType='fade'
        //     transparent={true}
        //     visible={isLoading}
        //     onRequestClose={() => {
        //         // onClose()
        //     }}>
        <View
            pointerEvents={'auto'}
            style={styles.loader}
        >
            <ActivityIndicator
                size='large'
                color={colors.orange}
            />
            {/* {
                    // alert(`Loading\n${isLoading}`)
                    console.log("Loading==>", isLoading)

                } */}
        </View>
        // </Modal>

    );

}
export default Loader;