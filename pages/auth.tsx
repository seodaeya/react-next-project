import { useAppDispatch, useAppSelector } from '@/settings/hooks';
import {selectAuthState, setAuthState} from "@/settings/reducers/authSlice";
import Link from "next/link";

export default function Auth() {
    const isAuth = useAppSelector(selectAuthState); // hooks을 이용해서 가져오기
    const dispatch = useAppDispatch();

    return (
        <div>
            <Link href="/">홈</Link>
            <span>{isAuth ? '로그인됨' : '로그인되지 않음'}</span>
            <h2>Redux+Auth</h2>
            <button onClick={() => { dispatch(setAuthState(!isAuth)) }}>
                {isAuth ? '로그아웃' : '로그인'}
            </button>
        </div>
    );
};