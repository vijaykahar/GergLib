import { Dimensions, Platform } from 'react-native';
import evn from 'src/environment/env';

export const IS_IPHONE = Platform.OS === 'ios' ? true : false
export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
export const MSG = ""
export const OFFER_IMG_URL = `${evn.API_URL}/media/`;

// Async storage keys
export const SKIP_INTRO_SCREEN = "skipIntro";
export const IS_LOGGED_IN = "isLoggedIn";

//Gooogle Sign In key
export const ANDROID_CLIENT_ID = '1051525999332-g3oquk9h38233v1d80debt5ome3vsnis.apps.googleusercontent.com'
export const IOS_CLIENT_ID = '1051525999332-u5t2o1mhc3dd75juvafesbspgtsuvgkd.apps.googleusercontent.com'
