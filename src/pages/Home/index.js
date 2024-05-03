import React, { useEffect, useState } from 'react'
import { getBrc20List, getListBlock } from '@/api/homeApi';
import Brc20ListTable from './brc20ListTable';
import BlockCard from './blockCard';
import HomeCard from './homeCard';
import TradSmoothedLine from './tradSmoothedLine'
import SupplyTrendLine from './supplyTrendLine';
import SupplyCard from './supplyCard';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const titleColumnsData = [
        { title: 'Name', titleWidth: '', colWidth: 'w-9-0', flag: 'name' },
        { title: 'Deployment Time', titleWidth: '', colWidth: 'w-26-0', flag: 'deploytime' },
        { title: 'Casting Quantity', titleWidth: '', colWidth: 'w-36-8 ', flag: 'mintprogress' },
        { title: 'Number Of Address Held', titleWidth: '', colWidth: 'w-15-8 ', flag: 'addresscount' },
        { title: 'Trading Volume', titleWidth: '', colWidth: 'w-14-2 ', flag: 'txcount' }
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
            const BRC20Data = await getBrc20List({ "jsonrpc": "2.0", "method": "listbrc20info", "params": { "fork": "202", "pagesize": 5, }, "id": 83 })
            console.log(BRC20Data)
            upDataColumns(dataColumns = BRC20Data.data.result)
        } catch (err) {
            console.log(err)
        }
    }
    const fetchListBlock = async () => {
        try {
            const blockListData = await getListBlock({ "jsonrpc": "2.0", "method": "listblock", "params": { "fork": "202", "pagesize": 6 }, "pagesize": 100, "id": 83 })
            console.log(blockListData)
            fetchBlockList(blockList = blockListData.data.result)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div className='w-full bg-menu-black flex flex-col items-center lg:pt-1-4'>
                <div className='w-full lg:px-4-3'>
                    <div className='w-full flex-wrap lg:flex lg:justify-between lg:items-center lg:mb-1-7'>
                        <div className='overflow-hidden rounded-2xl border border-line-gray w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-54-3 lg:mb-1-7'>
                            <HomeCard cardInfo={{ title: 'Number Of Address', time: '24h', amount: '222,925,642', tide: 'up', trading: '194,587' }} />
                        </div>
                        <div className='overflow-hidden rounded-2xl border border-line-gray w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-54-3 lg:mb-1-7'>
                            <HomeCard cardInfo={{ title: 'Number Of Transactions', time: '24h', amount: '7,416,381,440', tide: 'up', trading: '194,587' }} />
                        </div>
                        <div className='overflow-hidden rounded-2xl border border-line-gray w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-54-3'>
                            <HomeCard cardInfo={{ title: 'Total Value', time: '24h', amount: '$24,437,340,581', tide: '', trading: '194,587' }} />
                        </div>
                        <div className='overflow-hidden rounded-2xl border border-line-gray w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-54-3'>
                            <HomeCard cardInfo={{ title: 'Transaction Value', time: '24h', amount: '$11,535,729,084,338', tide: 'up', trading: '194,587' }} />
                        </div>
                    </div>
                    <div className='w-full flex-wrap lg:flex lg:justify-between lg:items-center lg:mb-1-7'>
                        <div className='overflow-hidden rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-54-3 lg:px-2-4 lg:py-2-0 lg:h-34-0'>
                            <TradSmoothedLine />
                        </div>
                        <div className='flex flex-col justify-start items-center lg:h-34-0 lg:w-54-3'>
                            <div className='overflow-hidden rounded-2xl border border-line-gray w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-54-3 lg:h-22-2 lg:px-2-4 lg:py-2-0'>
                                <SupplyTrendLine />
                            </div>
                            <div className='flex flex-wrap justify-between items-center lg:w-54-3'>
                                {supplyCards.map((item, index) => {
                                    return <div
                                        key={index}
                                        className='overflow-hidden rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-26-4 lg:mt-1-9'>
                                        <SupplyCard cardInfo={item} />
                                    </div>
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-primary-green flex flex-col items-center pt-2-7'>
                <div className='px-5-9 w-full text-black font-bold module-title mb-4-6 eading-point-128 text-12-5 '>
                    Brc-20
                </div>
                <div className=' w-full mb-5-2 px-6-9'>
                    <Brc20ListTable titleColumnsData={titleColumnsData} dataColumns={dataColumns} />
                </div>
            </div>
            <div className='w-full bg-module-title flex flex-col justify-start items-center py-8-1'>
                <div className='px-5-9 w-full flex flex-col justify-start items-start'>
                    <div className='flex flex-col justify-start items-start text-line-gray  cursor-pointer transform ease-in-out duration-500 hover:text-white' onClick={() => { navigate('/latest-block') }}>
                        <div className='font-bold leading-point-86 module-title cursor-pointer text-12-5 '>Latest Block</div>
                        {/* <div className='border border-500-red h-2 w-0 bg-transparent transform ease-in-out duration-300 hover:w-full hover:h-2 hover:bg-white'></div> */}
                    </div>
                </div>
                <div className='px-6-9 w-full flex justify-between items-center flex-wrap mt-5-9'>
                    {blockList.map((item, index) => {
                        return <div
                            key={index}
                            className="rounded-xl overflow-hidden shadow-2xl shadow-zinc-900  text-module-title cursor-pointer transform ease-in-out duration-300 hover:scale-111 hover:text-white w-50-4 mb-2-5"
                            onClick={() => { navigate('/block-details/' + item.hash) }}>
                            <BlockCard blockInfo={item} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home