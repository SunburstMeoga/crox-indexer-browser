import React, { useEffect, useState } from 'react'
import DataCard from './dataCard'
import HolderDataTable from './holderDataTable';
import { getBrc20Details, getBrc20List, getListBlock } from '@/api/homeApi'
import { useParams } from 'react-router-dom';

const BRC20Details = () => {
    const cardList = [
        { title: 'Total Amount', quantities: '21' },
        { title: 'Casting Quantity', quantities: '30,000' },
        { title: 'Single Casting Limit', quantities: '1,000' },
        { title: 'Decimal Precision', quantities: '18' },
        { title: 'Number Of Holders', quantities: '9132' },
        { title: 'Total Transaction Volume', quantities: '12588' },
    ]
    const detailsList = [
        { title: 'Deployed by:', content: 'bc1qh4jesszps4g5gjfw5aayv0sf4pekc4pu8s762e' },
        { title: 'Inscription Starting Nunber:', content: '#15676132' },
        { title: 'End Number Of Inscription:', content: '#15676132' }
    ]
    const dataTypes = [
        { title: 'Holder', vlaue: 0 },
        { title: 'Transfer', vlaue: 1 }
    ]
    const dataFilter = [
        { title: 'All', vlaue: 0 },
        { title: 'Engraved casting', vlaue: 1 },
        { title: 'Engraved transfer', vlaue: 2 },
        { title: 'Transfer', vlaue: 3 },
    ]
    let [cuerrentType, changeType] = useState(0)
    let [currentFilter, changeFilter] = useState(0)
    const handleDataType = (item, index) => {
        changeType(cuerrentType = index)
    }
    const handleDataFilter = (item, index) => {
        changeFilter(currentFilter = index)
    }
    const fetchBRC20Details = async (data) => {
        const details = await getBrc20Details(data)
        console.log(details)
        getBrc20Details()
    }
    const titleColumnsData = [
        { title: 'Number', titleWidth: '', colWidth: '', flag: 'name' },
        { title: 'Holder Address', titleWidth: '', colWidth: '', flag: 'deploytime' },
        { title: 'Holdding Ratio', titleWidth: '', colWidth: '', flag: 'mintprogress' },
        { title: 'Quantity Held', titleWidth: 'w-32', colWidth: '', flag: 'addresscount' },
    ]
    const supplyCards = [
        { title: 'Market Cap', content: '$10.8b', unit: 'b' },
        { title: 'Volume(24h)', content: '$301.7', unit: 'm' },
        { title: 'Supply', content: '87,679,108,751', unit: false },
        { title: 'Staked', content: '45,711,791,430', unit: false },

    ]
    let [dataColumns, upDataColumns] = useState([])
    let [blockList, fetchBlockList] = useState([])
    const { name } = useParams()
    useEffect(() => {
        let data = { "jsonrpc": "2.0", "method": "listbrc20txdetails", "params": { "type": "brc-20", "fork": "202", "name": name, "gettype": dataFilter[currentFilter].title }, "id": 83 }
        fetchBRC20Details(data)
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
            <div className='bg-primary-green w-full flex flex-col items-center justify-start min-h-svh'>
                <div className='w-11/12 flex justify-start items-baseline text-module-title'>
                    <div className='font-bold pop-bold module-title '>
                        HAH
                    </div>
                    <div className='ml-4'>2023-4-30 23:45:02</div>
                </div>
                <div className='w-11/12 grid grid-cols-3 gap-6 mb-6'>
                    {cardList.map((item, index) => {
                        return <div key={index} className="rounded-xl overflow-hidden ease-in-out bg-card-green duration-300 hover:text-primary-green hover:bg-black hover:shadow-2xl">
                            <DataCard title={item.title} showUnit={index === 0} quantities={item.quantities} />
                        </div>
                    })}
                </div>
                <div className='w-11/12 rounded-xl overflow-hidden bg-module-title flex flex-col justify-start items-center py-2 mb-6'>
                    {detailsList.map((item, index) => {
                        return <div
                            key={index}
                            className={['pl-6 py-4 text-select-color flex justify-start items-center', index !== detailsList.length - 1 ? 'border-b border-select-color' : ''].join(" ")} style={{ width: '97%' }} >
                            <div className='bg-select-color w-2 h-2'></div>
                            <div className='pl-6'>{item.title} {item.content}</div>
                        </div>
                    })}

                </div>
                <div className='w-11/12 rounded-xl overflow-hidden bg-module-title flex flex-col justify-start items-center py-2 pt-12 mb-6'>
                    <div className='flex justify-start items-center w-full pl-12 pt-4 mb-8'>
                        {dataTypes.map((item, index) => {
                            return <div
                                onClick={() => handleDataType(item, index)}
                                key={index}
                                className={['text-select-color', index === 0 ? 'mr-20' : ''].join(" ")}>
                                <div className={['font-bold text-6xl mb-1 cursor-pointer ease-in-out duration-300 hover:text-title-green', cuerrentType === index ? "text-title-green" : ""].join(" ")}>{item.title}</div>
                                <div className={['h-0.5  ease-in-out duration-300', cuerrentType === index ? "bg-title-green w-full" : "bg-transparent w-0"].join(" ")}></div>
                            </div>
                        })}
                    </div>
                    <div className='flex justify-start items-start ml-16 w-full mb-8'>
                        {dataFilter.map((item, index) => {
                            return <div
                                onClick={() => handleDataFilter(item, index)}
                                key={index}
                                className={[
                                    'px-5 py-1  rounded-xl font-bold cursor-pointer text-2xl',
                                    index !== 0 ? "ml-4" : "",
                                    currentFilter === index ? "bg-title-green text-black" : "bg-black text-line-gray"
                                ].join(" ")}>{item.title}</div>
                        })}
                    </div>
                    <div className='w-full px-12'>
                        <HolderDataTable titleColumnsData={titleColumnsData} dataColumns={dataColumns}></HolderDataTable>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BRC20Details
