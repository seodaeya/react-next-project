import axios from "axios";
import {useState} from "react";

/**
 * axios를 배운다.
 *
 * @constructor
 */
export default function Main() {

    const [getResult, setGetResult] = useState('');
    const [postResult, setPostResult] = useState('');

    /**
     * axios get
     */
    function getAxios() {
        const params = new URLSearchParams({
            'param1':'value1',
            'param2':'value2'
        });
        axios.get('/api/get' + (params ? `?${params.toString()}` : ''))
        .then(res => {
            console.log(res);
            const {data} = res.data;
            setGetResult(data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    /**
     * axios post
     */
    function post() {
        let params = {
            param1: 'value1',
            param2: 'value2'
        }
        axios.post('/api/post', params)
        .then(res => {
            console.log(res);
            const {data} = res.data;
            setPostResult(data);
        })
        .catch(e => {
            console.log(e);
        })
    }

    return <div>
        <h1>Hello, Axios!</h1>
        <div>
            <button onClick={getAxios}>get</button>
            <p>{getResult}</p>
        </div>
        <div>
            <button onClick={post}>post</button>
            <p>{postResult}</p>
        </div>
    </div>
}