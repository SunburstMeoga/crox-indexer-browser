import React, { useEffect } from 'react'
import { getListBlock } from '@/api/homeApi';
// import axios from 'axios';
const Home = () => {
    useEffect(() => {
        fetchBRC20Data()
    }, [])

    const fetchBRC20Data = async () => {
        try {
            const BRC20Data = await getListBlock({ "jsonrpc": "2.0", "method": "listbrc20info", "params": { "fork": "202" }, "id": 83 })
            console.log(BRC20Data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            this is home page
        </div>
    )
}

export default Home