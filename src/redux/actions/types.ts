export interface AuthData {
    username: string;
    password: string;
}

export interface AuthResponse {
    access_token?: string | null;
    expires_in?: number | null | string;
    refresh_token?: string | null;
    token_type?: string | null;
    scope?: string;
    user_data?: any | null;
}

export interface UserResponse {
    id?: string | null;
    name?: number | null | string;
    firstName?: string | null;
    lastName?: string | null;
    clientid?: string;
    clientName?: string | null;
    avatar?: string | null;
}

interface AuthErrorResponse {
    error?: string | null;
    error_description?: string | null;
}
interface AuthLoadingResponse {
    loading?: boolean;
}

export interface AuthState
    extends AuthResponse,
    AuthErrorResponse,
    AuthLoadingResponse {
    initialPasscode: string;
    pinVerified: boolean;
    isLandscape: boolean;
}

/**
 *  redux type
 */
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const LOG_OUT = 'LOG_OUT';
export const SET_INITIAL_PASSCODE = 'SET_INITIAL_PASSCODE';
export const PIN_VERIFIED = 'PIN_VERIFIED';
export const UNSET_AUTH_ERRORS = 'UNSET_AUTH_ERRORS';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_ORIENTATION = 'SET_ORIENTATION';

/**
 * constants
 */
export const AUTH_TOKEN_INFO = 'AUTH_TOKEN_INFO';

interface AuthSuccessAction {
    type: typeof AUTH_SUCCESS;
    payload: AuthResponse;
}

interface UserAction {
    type: typeof SET_USER_INFO;
    payload: UserResponse;
}

interface AuthFailureAction {
    type: typeof AUTH_FAILED;
    payload: AuthErrorResponse;
}

interface UnsetAuthError {
    type: typeof UNSET_AUTH_ERRORS;
    payload: AuthErrorResponse;
}

export interface LogOutAction {
    type: typeof LOG_OUT;
}

export interface SetInitialPasscodeAction {
    type: typeof SET_INITIAL_PASSCODE;
    payload: string;
}

export interface SetPinVerified {
    type: typeof PIN_VERIFIED;
    payload: boolean;
}

export type AuthActionType =
    | AuthSuccessAction
    | AuthFailureAction
    | LogOutAction
    | SetInitialPasscodeAction
    | SetPinVerified
    | UserAction
    | UnsetAuthError;
