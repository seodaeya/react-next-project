import {combineReducers, configureStore, PayloadAction} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import logger from 'redux-logger';
import counterReducer from "@/settings/reducers/counterSlice";
import authReducer from "@/settings/reducers/authSlice";

/*export const store = configureStore({
    reducer: {
        counter: CounterSlice,
    },
});*/

const reducer = (state: any, action: PayloadAction<any>) => {
    // hydration이 발생했을 때 처리하는 부분을 별도로 작성
    switch(action.type) {
        case HYDRATE:
            return {
                ...state,
                // ...action.payload,
            };
        default:
            return combineReducers({
                counter: counterReducer,
                auth: authReducer,
            })(state, action);
    }
};

const makeStore = () =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    });

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
// wrapper 생성
export const wrapper = createWrapper<AppStore>(makeStore, {
    debug: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;