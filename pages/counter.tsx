import {useAppDispatch, useAppSelector} from '@/settings/hooks';
import {decrement, increment, selectCount} from "@/settings/reducers/counterSlice";
import {selectAuthState} from "@/settings/reducers/authSlice";
import Link from "next/link";

export default function Counter() {
    const isAuth = useAppSelector(selectAuthState); // hooks을 이용해서 가져오기
    const count = useAppSelector(selectCount); // hooks을 이용해서 가져오기
    const dispatch = useAppDispatch()

    return <div>
        <Link href="/">홈</Link>
        <span>{isAuth ? '로그인됨' : '로그인되지 않음'}</span>
        <h2>Redux+Count</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
}