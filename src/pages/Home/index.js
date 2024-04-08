import React, { useEffect, useState } from 'react'
import { getBrc20List } from '@/api/homeApi';
import Brc20list from './brc20list';
import BlockCard from './blockCard';
// import axios from 'axios';
const Home = () => {
    const titleColumnsData = [
        { title: 'Name', titleWidth: '', colWidth: '', flag: 'name' },
        { title: 'Deployment Time', titleWidth: '', colWidth: '', flag: 'deploytime' },
        { title: 'Casting Quantity', titleWidth: '', colWidth: '', flag: 'mintprogress' },
        { title: 'Number Of Address Held', titleWidth: 'w-32', colWidth: '', flag: 'addresscount' },
        { title: 'Trading Volume', titleWidth: '', colWidth: '', flag: 'txcount' }
    ]
    // const dataColumns = ['', '', '']
    let [dataColumns, upDataColumns] = useState([])
    const blockList = ['', '', '', '', '', '']
    useEffect(() => {
        fetchBRC20List()
    }, [])

    const fetchBRC20List = async () => {
        try {
            const BRC20Data = await getBrc20List({ "jsonrpc": "2.0", "method": "listbrc20info", "params": { "fork": "202" }, "id": 83 })
            console.log(BRC20Data)
            upDataColumns(dataColumns = BRC20Data.data.result)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className='w-full bg-primary-green flex flex-col items-center py-4'>
                <div className='w-11/12 text-title-blue font-bold pop-bold module-title'>
                    Brc-20
                </div>
                <div className='w-11/12'>
                    <Brc20list titleColumnsData={titleColumnsData} dataColumns={dataColumns} />
                </div>
            </div>
            <div className='w-full bg-module-title flex flex-col justify-start items-center py-4'>
                <div className='w-11/12 flex flex-col justify-start items-start my-2'>
                    <div className='flex flex-col justify-start items-start text-line-gray  cursor-pointer transform ease-in-out duration-500 hover:text-white'>
                        <div className='font-bold pop-bold module-title'>Latest Block</div>
                        {/* <div className='border border-500-red h-2 w-0 bg-transparent transform ease-in-out duration-300 hover:w-full hover:h-2 hover:bg-white'></div> */}
                    </div>
                </div>
                <div className='w-10/12 grid grid-cols-2 gap-8'>
                    {blockList.map((item, index) => {
                        return <div class="rounded-xl overflow-hidden border border-card-line shadow-2xl shadow-zinc-900  text-module-title cursor-pointer transform ease-in-out duration-300 hover:scale-111 hover:text-white">
                            <BlockCard />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home