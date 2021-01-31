
import * as Types from 'src/redux/types/auth';

const initialState = {
    access_token: null,
    user_data: null,
    error: null,
    authError: null,
    loading: false,
    isTokenSuccess: false,
    spotifyAuthSuccess: false,
    badgeArray: [],
    achivementArray: [],
    savedOffersList: [],
    isUpdated: false,
    isProfileUpdated: false,
    isEmailSent: false,
    isUserValid: true
};
export default (
    state = initialState,
    action: IReduxAction,
): typeof initialState => {
    switch (action.type) {

        case Types.UPDATE_ADDRESS_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                isUpdated: false
            }
        }
        case Types.UPDATE_ADDRESS_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: null,
                isUpdated: true
            }
        }
        case Types.UPDATE_ADDRESS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isUpdated: false
            }
        }

        case Types.SET_USER_INFO: {
            return {
                ...state,
                user_data: action.payload,
            };
        }
        case Types.LOGIN_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                authError: null,
            };
        }
        case Types.LOGIN_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                access_token: action.payload.token,
                user_data: action.payload.user,
                loading: false,
            };
        }
        case Types.LOGIN_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                authError: action.payload
            };
        }

        case Types.SIGNUP_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case Types.SIGNUP_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                access_token: action.payload.token,
                user_data: action.payload.user,
                loading: false,
            };
        }
        case Types.SIGNUP_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        }
        case Types.APPLE_SIGNUP_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case Types.APPLE_SIGNUP_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                access_token: action.payload.token,
                user_data: action.payload.user,
                loading: false,
            };
        }
        case Types.APPLE_SIGNUP_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        }
        case Types.SPOTIFY_AUTH_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                spotifyAuthSuccess: false
            };
        }
        case Types.SPOTIFY_AUTH_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                spotifyAuthSuccess: true
            };
        }
        case Types.SPOTIFY_AUTH_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                spotifyAuthSuccess: false
            };
        }
        case Types.VERIFY_EMAIL_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case Types.VERIFY_EMAIL_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        }
        case Types.VERIFY_EMAIL_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        }
        case Types.FORGOT_PWD_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                isEmailSent: false
            };
        }
        case Types.FORGOT_PWD_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                isEmailSent: true
            };
        }
        case Types.FORGOT_PWD_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                isEmailSent: false
            };
        }
        case Types.RESET_PWD_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case Types.RESET_PWD_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        }
        case Types.RESET_PWD_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        }
        case Types.REFRESH_TOKEN_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                isTokenSuccess: false,
            };
        }
        case Types.REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                access_token: action.payload.token,
                isTokenSuccess: true
            };
        }
        case Types.REFRESH_TOKEN_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                isTokenSuccess: false
            };
        }

        case Types.SYNC_SPOTIFY_DATA_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case Types.SYNC_SPOTIFY_DATA_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: null,
            }
        }
        case Types.SYNC_SPOTIFY_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        case Types.USER_PROFILE_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case Types.USER_PROFILE_SUCCESS: {
            return {
                ...state,
                user_data: action.payload.user,
                loading: false,
                error: null,
            }
        }
        case Types.USER_PROFILE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        case Types.USER_BADGE_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                badgeArray: [],
                achivementArray: [],
            };
        }
        case Types.USER_BADGE_SUCCESS: {
            return {
                ...state,
                badgeArray: action.badgeArray,
                achivementArray: action.achivementArray,
                loading: false,
            };
        }
        case Types.USER_BADGE_FAILURE: {
            return {
                ...state,
                // ...action.payload,
                loading: false,
                badgeArray: [],
                achivementArray: [],
            };
        }
        case Types.USER_SAVED_OFFERS_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                savedOffersList: [],
            };
        }
        case Types.USER_SAVED_OFFERS_SUCCESS: {
            return {
                ...state,
                savedOffersList: action.payload,
                loading: false,
            };
        }
        case Types.USER_SAVED_OFFERS_FAILURE: {
            return {
                ...state,
                // ...action.payload,
                loading: false,
                savedOffersList: []
            };
        }
        case Types.UPLOAD_USER_PROFILE_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                isProfileUpdated: false
            };
        }
        case Types.UPLOAD_USER_PROFILE_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                isProfileUpdated: true
            };
        }
        case Types.UPLOAD_USER_PROFILE_ERROR: {
            return {
                ...state,
                // ...action.payload,
                loading: false,
                isProfileUpdated: false
            };
        }
        case Types.RESEND_VERIFY_EMAIL_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
                authError: null,
            };
        }
        case Types.RESEND_VERIFY_EMAIL_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        }
        case Types.RESEND_VERIFY_EMAIL_ERROR: {
            return {
                ...state,
                // ...action.payload,
                loading: false,
            };
        }
        case Types.USER_ACCEPTED_TERMS_SERVICES_REQUEST: {
            return {
                ...state,
                loading: false,
                error: null,
                // isUserValid: false,
            };
        }
        case Types.USER_ACCEPTED_TERMS_SERVICES_SUCCESS: {
            return {
                ...state,
                isUserValid: action.payload.isUserValid,
                loading: false,
            };
        }
        case Types.USER_ACCEPTED_TERMS_SERVICES_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                // savedOffersList: []
            };
        }
        case Types.USER_DELETE_REQUEST: {
            return {
                ...state,
                loading: false,
                error: null,
                // isUserValid: false,
            };
        }
        case Types.USER_DELETE_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        }
        case Types.USER_DELETE_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false,
                // savedOffersList: []
            };
        }
        default:
            return state;
    }
};
