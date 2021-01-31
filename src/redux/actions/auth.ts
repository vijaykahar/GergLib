
import { Platform, AsyncStorage, Alert, } from 'react-native';
import { Dispatch, AnyAction } from 'redux';
import { IReduxState } from '../reducers';
import { useSelector, useDispatch, } from 'react-redux'
import * as Types from 'src/redux/types/auth';


export const doLogin = (email: string, password: string) => async (
    dispatch: Dispatch,
    store: IReduxState,
) => {

};


