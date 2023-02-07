import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();
export const tokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        authenticated: false,
        accessToken: null,
        expireTime: null,
        img_url: null,
        majorTag: null,
        c: null,
        s: null,
        v: null
    },
    reducers: {
        SET_TOKEN: (state, action) => {
            state.authenticated = true;
            state.accessToken = action.payload.accessToken;
            state.expireTime = new Date().getTime() + action.payload.accessTokenExpiresIn;
            cookie.set('TOKEN', action.payload.accessToken,
            /*{expires: state.expireTime = new Date().getTime() + action.payload.accessTokenExpiresIn}*/ );
        },
        DELETE_TOKEN: (state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null
        },
        LOGIN_CHECK_SUCCESS: (state) => {
            state.authenticated = true;
            state.accessToken = cookie.get('TOKEN');
            state.expireTime =  null
        },
        DOWNLOAD_IMAGE: (state, action) => {
            state.img_url = action.payload;
        },
        SELECT_MAJORTAG: (state, action) => {
            state.majorTag = action.payload;
        },
        FETCH_COLOR_C: (state, action) => {
            state.c = action.payload;
        },
        FETCH_COLOR_S: (state, action) => {
            state.s = action.payload;
        },
        FETCH_COLOR_V: (state, action) => {
            state.v = action.payload;
        }
     }
})

export const { SET_TOKEN, DELETE_TOKEN, LOGIN_CHECK_SUCCESS, DOWNLOAD_IMAGE, SELECT_MAJORTAG, FETCH_COLOR_C, FETCH_COLOR_S, FETCH_COLOR_V } = tokenSlice.actions;
export default tokenSlice.reducer;