import React, { useEffect, useState } from 'react'
import { getBrc20List, getListBlock } from '@/api/homeApi';
import Brc20list from './brc20list';
import BlockCard from './blockCard';
import HomeCard from './homeCard';
import TradSmoothedLine from './tradSmoothedLine'
import SupplyTrendLine from './supplyTrendLine';
import SupplyCard from './supplyCard';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const titleColumnsData = [
        { title: 'Name', titleWidth: '', colWidth: '', flag: 'name' },
        { title: 'Deployment Time', titleWidth: '', colWidth: '', flag: 'deploytime' },
        { title: 'Casting Quantity', titleWidth: '', colWidth: '', flag: 'mintprogress' },
        { title: 'Number Of Address Held', titleWidth: 'w-32', colWidth: '', flag: 'addresscount' },
        { title: 'Trading Volume', titleWidth: '', colWidth: '', flag: 'txcount' }
    ]
    const supplyCards = [
        { title: 'Market Cap', content: '$10.8b', unit: 'b' },
        { title: 'Volume(24h)', content: '$301.7', unit: 'm' },
        { title: 'Supply', content: '87,679,108,751', unit: false },
        { title: 'Staked', content: '45,711,791,430', unit: false },

    ]
    let [dataColumns, upDataColumns] = useState([])
    let [blockList, fetchBlockList] = useState([])
    useEffect(() => {
        fetchBRC20List()
        fetchListBlock()
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
    const fetchListBlock = async () => {
        try {
            const blockListData = await getListBlock({ "jsonrpc": "2.0", "method": "listblock", "params": { "fork": "202", "pagesize": 6 }, "id": 83 })
            console.log(blockListData)
            fetchBlockList(blockList = blockListData.data.result)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div className='w-full bg-menu-black flex flex-col items-center pb-20 pt-8'>
                <div className='w-11/12 grid grid-cols-2 gap-5'>
                    <div className=''>
                        <div className='mb-5 overflow-hidden rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl'>
                            <HomeCard cardInfo={{ title: 'Number Of Address', time: '24h', amount: '222,925,642', tide: 'up', trading: '194,587' }} />
                        </div>
                        <div className='mb-5 overflow-hidden rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl'>
                            <HomeCard cardInfo={{ title: 'Number Of Transactions', time: '24h', amount: '7,416,381,440', tide: 'up', trading: '194,587' }} />
                        </div>
                        <div className='overflow-hidden rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl'>
                            <TradSmoothedLine />
                        </div>
                    </div>
                    <div className=''>
                        <div className='mb-5 overflow-hidden rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl'>
                            <HomeCard cardInfo={{ title: 'Total Value', time: '24h', amount: '$24,437,340,581', tide: '', trading: '194,587' }} />
                        </div>
                        <div className='mb-5 overflow-hidden rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl'>
                            <HomeCard cardInfo={{ title: 'Transaction Value', time: '24h', amount: '$11,535,729,084,338', tide: 'up', trading: '194,587' }} />
                        </div>
                        <div className='mb-5 overflow-hidden rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl'>
                            <SupplyTrendLine />
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                            {supplyCards.map((item, index) => {
                                return <div className='overflow-hidden rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl'>
                                    <SupplyCard cardInfo={item} />
                                </div>
                            })}

                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full bg-primary-green flex flex-col items-center py-4'>
                <div className='w-11/12 text-black font-bold pop-bold module-title'>
                    Brc-20
                </div>
                <div className='w-11/12'>
                    <Brc20list titleColumnsData={titleColumnsData} dataColumns={dataColumns} />
                </div>
            </div>
            <div className='w-full bg-module-title flex flex-col justify-start items-center pt-4 pb-32'>
                <div className='w-11/12 flex flex-col justify-start items-start my-2'>
                    <div className='flex flex-col justify-start items-start text-line-gray  cursor-pointer transform ease-in-out duration-500 hover:text-white' onClick={() => { navigate('/latest-block') }}>
                        <div className='font-bold pop-bold module-title'>Latest Block</div>
                        {/* <div className='border border-500-red h-2 w-0 bg-transparent transform ease-in-out duration-300 hover:w-full hover:h-2 hover:bg-white'></div> */}
                    </div>
                </div>
                <div className='w-10/12 grid grid-cols-2 gap-8'>
                    {blockList.map((item, index) => {
                        return <div
                            key={index}
                            className="rounded-xl overflow-hidden border border-card-line shadow-2xl shadow-zinc-900  text-module-title cursor-pointer transform ease-in-out duration-300 hover:scale-111 hover:text-white">
                            <BlockCard blockInfo={item} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home