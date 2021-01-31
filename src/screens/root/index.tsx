import React, { PureComponent } from 'react';
import { AsyncStorage, LogBox } from 'react-native'
import { connect } from 'react-redux';
import { IReduxState } from 'src/redux/reducers';
import { Auth } from '../index';

interface IProps {
    // access_token: any;
}
const Root = (props: IProps) => {
    LogBox.ignoreAllLogs(true);
    React.useEffect(() => {

    })
    return (
        <>
            <Auth />
        </>
    );

}
export default Root;
// const mapStateToProps = (state: IReduxState) => (
//     console.log("Root ===>", state),

//     {
//         user_data: state.auth.user_data,
//         access_token: state.auth.access_token,
//         // access_token: "",
//     });


// export default connect(
//     mapStateToProps,
//     // mapDispatchToProps,
// )(Root);
