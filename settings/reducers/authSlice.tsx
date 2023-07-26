import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Type for our state
// export interface AuthState {
//     authState: boolean;
// }
// Actual Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authState: false
    },
    reducers: {
        // Action to set the authentication status
        setAuthState(state, action) {
            state.authState = action.payload;
        }
    },

    /*extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth
            };
        }
    }*/
});

// exports
export const selectAuthState = (state: RootState) => state.auth.authState;
const { actions, reducer: authReducer } = authSlice;
export const { setAuthState } = actions;
export default authReducer;