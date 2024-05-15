import React, { useEffect, useState } from 'react'
import { getBrc20List, getListBlock,homeStatisticsData,getbrc20syncinfo } from '@/api/homeApi';
import Brc20ListTable from './brc20ListTable';
import BlockCard from './blockCard';
import HomeCard from './homeCard';
import TradSmoothedLine from './tradSmoothedLine'
import Brc20TradLine from './brc20TradLine';
import SupplyTrendLine from './supplyTrendLine';
import SupplyCard from './supplyCard';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const titleColumnsData = [
        { title: 'Name', titleWidth: '', colWidth: 'w-5-0 lg:w-9-0', flag: 'name' },
        { title: 'Deployment Time', titleWidth: '', colWidth: 'w-8-0 lg:w-26-0', flag: 'deploytime' },
        { title: 'Casting Quantity', titleWidth: '', colWidth: 'w-7-8 lg:w-36-8', flag: 'mintprogress' },
        { title: 'Number Of Address Held', titleWidth: '', colWidth: 'w-8-9 lg:w-15-8', flag: 'addresscount' },
        { title: 'Trading Volume', titleWidth: '', colWidth: 'w- lg:w-14-2', flag: 'txcount' }
    ]
    const supplyCards = [
        { title: 'Market Cap', content: '$10.8b', unit: 'b' },
        { title: 'Volume(24h)', content: '$301.7', unit: 'm' },
        { title: 'Supply', content: '87,679,108,751', unit: false },
        { title: 'Staked', content: '45,711,791,430', unit: false },
    ]
    let [dataColumns, upDataColumns] = useState([])
    let [blockList, fetchBlockList] = useState([])
    let [tradeLineData, getTradeLineData] = useState(null)
    let [btcInfor, changeBtcInfor] = useState({})

    useEffect(() => {
        getStatisticsData()
        fetchBRC20List()
        fetchListBlock()
        fetchBrc20syncinfo()
    }, [])
    //brc20列表
    const fetchBRC20List = async () => {
        try {
            const BRC20Data = await getBrc20List({ "jsonrpc": "2.0", "method": "listbrc20info", "params": { "fork": "202", "pagesize": 5, }, "id": 83 })
            console.log('brc20列表',BRC20Data)
            upDataColumns(dataColumns = BRC20Data.data.result.datalist)
        } catch (err) {
            console.log(err)
        }
    }
    //区块列表
    const fetchListBlock = async () => {
        try {
            const blockListData = await getListBlock({ "jsonrpc": "2.0", "method": "listblock", "params": { "fork": "202", "pagesize": 6 }, "pagesize": 100, "id": 83 })
            console.log('区块列表',blockListData)
            fetchBlockList(blockList = blockListData.data.result.datalist)
        } catch (err) {
            console.log(err)
        }
    }
    //交易数统计图表
    const getStatisticsData = async () => {
        try {
            let statisticsData = await homeStatisticsData({"jsonrpc":"2.0","method":"listbtcdatestat","params":{"fork":"202",getdatecount:7},"id":83})
            console.log('统计图表', statisticsData)
            let xData = []
            let yData = []
            let yData2 = []
            let lineData = {}
            statisticsData.data.result.map(item => {
                xData.push(item.btcblockdate)
                yData2.push(item.brc20recordcount)
                yData.push(item.btctxcount)
            })
            // let tradMax = Math.max(...yData)
            // let tradMin = Math.min(...yData);
            // console.log(tradMax, tradMin)
            lineData['xData'] = xData
            lineData['yData'] = yData2
            lineData['yData2'] = yData2.reverse()
            lineData['tradInterval'] = 2500
            lineData['brc20Interval'] = 2500
            getTradeLineData(tradeLineData = lineData)
            // console.log(lineData,tradeLineData)

        } catch (err) {
            console.log(err)
        }
    }
    //查询btc上链信息
    const fetchBrc20syncinfo = async () => {
        try {
            let info = await getbrc20syncinfo({ "jsonrpc": "2.0", "method": "getbrc20syncinfo", "params": { "fork": "202" }, "id": 83 })
            console.log('btc上链信息', info)
            changeBtcInfor(changeBtcInfor = info.data.result)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div className='w-full bg-menu-black flex flex-col items-center pb-2-6 lg:pb-0-1 lg:pt-1-4'>
                <div className='w-full px-1-0 lg:px-4-3'>
                    <div className='w-full flex-wrap lg:flex  lg:justify-between lg:items-center lg:mb-1-7 mb-1-0'>
                        <div className='overflow-hidden lg:mb-auto mb-1-0 px-1-8 py-1-2 rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-58-6 xl:w-54-3 lg:px-2-4 lg:py-2-0 xl:h-34-0'>
                            {tradeLineData && <TradSmoothedLine tradeLineData={tradeLineData} />}
                        </div>
                        <div className='overflow-hidden  px-1-8 py-1-2 rounded-2xl border border-black-line w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-58-6 xl:w-54-3 lg:px-2-4 lg:py-2-0 xl:h-34-0'>
                            {tradeLineData && <Brc20TradLine tradeLineData={tradeLineData} />}
                        </div>
                        {/* <div className='flex flex-col justify-start items-center lg:h-34-0 lg:w-54-3'>
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
                        </div> */}
                    </div>
                    <div className='flex-wrap  lg:w-full lg:flex lg:justify-between lg:items-center'>
                        <div className='overflow-hidden rounded-2xl mb-1-0  border border-line-gray  bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-58-6 xl:w-54-3 lg:mb-1-7'>
                            <HomeCard cardInfo={{ point: '24.73',title: 'Number Of Address', time: '24h', amount: btcInfor.brc20addresscount, tide: 'up', trading: btcInfor.h24brc20addresscount }} />
                        </div>
                        <div className='overflow-hidden rounded-2xl border border-line-gray  bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-58-6 xl:w-54-3 lg:mb-1-7'>
                            <HomeCard cardInfo={{point: '36.22', title: 'Number Of Transactions', time: '24h', amount: btcInfor.btctxcount, tide: 'up', trading: btcInfor.h24brc20recordcount }} />
                        </div>
                        {/* <div className='overflow-hidden rounded-2xl border border-line-gray w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-54-3'>
                            <HomeCard cardInfo={{ title: 'Total Value', time: '24h', amount: '$24,437,340,581', tide: '', trading: '194,587' }} />
                        </div>
                        <div className='overflow-hidden rounded-2xl border border-line-gray w-full bg-card-black cursor-pointer transform ease-in-out duration-500 hover:border-slate-500 hover:shadow-zinc-950 hover:shadow-xl lg:w-54-3'>
                            <HomeCard cardInfo={{ title: 'Transaction Value', time: '24h', amount: '$11,535,729,084,338', tide: 'up', trading: '194,587' }} />
                        </div> */}
                    </div>

                </div>
            </div>
            <div className='w-full bg-primary-green flex flex-col items-center pt-2-7'>
                <div
                    onClick={() => { navigate('/brc20') }}
                    className='px-1-3 lg:2-7-0 xl:px-5-9 w-full text-title-blue text-4-0 lg:text-black font-medium lg:font-bold module-title lg:mb-4-6 eading-point-128 lg:text-10-0 xl:text-12-5 cursor-pointer transform ease-in-out duration-500 hover:text-white'>
                    Brc-20
                </div>
                <div className='w-full mt-2-0  px-1-3 lg:mt-auto lg:mb-5-2 lg:px-2-6 xl:px-6-9 relative overflow-x-hidden'>
                    <div className='absolute -right-1-5 top-1-6 more-arrow h-3-0 w-3-0 rounded-full flex justify-start items-center text-white z-10 lg:hidden'>
                        <div className='icon iconfont icon-right ml-0-5' style={{ fontSize: '20px' }}></div>
                    </div>
                    <Brc20ListTable titleColumnsData={titleColumnsData} dataColumns={dataColumns} />
                </div>
            </div>
            <div className='w-full bg-module-title flex flex-col justify-start items-center py-2-2 lg:py-4-5 xl:py-8-1'>
                <div className='px-1-3 lg:px-5-2 xl:px-5-9 w-full flex flex-col justify-start items-start'>
                    <div className='flex flex-col justify-start items-start text-line-gray  cursor-pointer transform ease-in-out duration-500 hover:text-white' onClick={() => { navigate('/latest-block') }}>
                        <div className='lg:font-bold font-medium leading-point-86 module-title cursor-pointer text-4-0 lg:text-10-0 xl:text-12-5 '>Latest <br className="block lg:hidden"></br> Block</div>
                    </div>
                </div>
                <div className='px-1-3 lg:px-5-2 xl:px-6-9 w-full flex justify-between items-center flex-wrap lg:mt-5-9'>
                    {blockList.map((item, index) => {
                        return <div
                            key={index}
                            className="rounded-xl mb-0-9 border border-home-line overflow-hidden shadow-2xl shadow-zinc-900  text-module-title cursor-pointer transform ease-in-out duration-300 hover:scale-111 hover:text-white lg:w-54-0 xl:w-50-4 lg:mb-2-5"
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