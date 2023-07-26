import axios from "axios";
import {useState} from "react";

import { FileUploader } from 'react-drag-drop-files';

/**
 * axios를 배운다.
 *
 * @constructor
 */
export default function Axios() {

    // get
    const [getResult, setGetResult] = useState('');
    // post
    const [postResult, setPostResult] = useState('');
    // excel uploads
    const [file, setFile] = useState(null);
    const handleChange = (pFile: any) => {
        setFile(pFile);
    };

    /**
     * axios get
     */
    const get = () => {
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
    const post = () => {
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

    const uploadFile = () => {

        const headers = {
            'Content-type': 'multipart/form-data',
        }
        axios.post('/api/readExcelFile', {'file': file}, {headers})
        .then((res) => {
            console.log(res.data);
        })
        .catch((e) => {
            console.error(e);
        });
    };

    return <div>
        <h1>Hello, Axios!</h1>
        <div>
            <h2>To Drag & Drop Excel Files</h2>
            <FileUploader
                name="file"
                types={['xlsx']}
                handleChange={handleChange}
            />
            <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
            <button onClick={uploadFile}>엑셀 업로드</button>
        </div>
        <div>
            <h2>Get</h2>
            <button onClick={get}>get</button>
            <p>{getResult}</p>
        </div>
        <div>
            <h2>Post</h2>
            <button onClick={post}>post</button>
            <p>{postResult}</p>
        </div>
    </div>
}