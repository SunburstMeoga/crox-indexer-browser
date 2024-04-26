import React, { useEffect, useState } from 'react'
import DataCard from './dataCard'
import HolderDataTable from './holderDataTable';
import { getBrc20Details, getBrc20TransList, getBrc20HolderList } from '@/api/homeApi'
import { useParams } from 'react-router-dom';

const BRC20Details = () => {
    let [cardList, setCardList] = useState([])
    let [detailsList, setDetailsList] = useState([])
    const dataTypes = [
        { title: 'Holder', vlaue: 0 },
        { title: 'Transfer', vlaue: 1 }
    ]
    const dataFilter = [
        { title: 'All', value: 0 },
        { title: 'Engraved casting', value: 1 },
        { title: 'Engraved transfer', value: 2 },
        { title: 'Transfer', value: 3 },
    ]
    let [cuerrentType, changeType] = useState(0)
    let [currentFilter, changeFilter] = useState(0)

    const handleDataType = (item, index) => {
        changeType(cuerrentType = index)
    }
    const handleDataFilter = (item, index) => {
        changeFilter(currentFilter = index)
    }

    const titleColumnsData = [
        { title: 'Number', titleWidth: '', colWidth: '', flag: 'id' },
        { title: 'Holder Address', titleWidth: '', colWidth: '', flag: 'address', filterAddress: true },
        { title: 'Holdding Ratio', titleWidth: '', colWidth: '', flag: 'percentage', },
        { title: 'Quantity Held', titleWidth: 'w-32', colWidth: '', flag: 'balance' },
    ]
    const supplyCards = [
        { title: 'Market Cap', content: '$10.8b', unit: 'b' },
        { title: 'Volume(24h)', content: '$301.7', unit: 'm' },
        { title: 'Supply', content: '87,679,108,751', unit: false },
        { title: 'Staked', content: '45,711,791,430', unit: false },

    ]
    let [dataColumns, upDataColumns] = useState([])
    const { name } = useParams()
    useEffect(() => {
        let data = { "jsonrpc": "2.0", "method": "getbrc20details", "params": { "type": "brc-20", "fork": "202", "name": name, "gettype": dataFilter[currentFilter].value }, "pagesize": 100, "id": 83 }
        fetchBRC20Details(data)
        featchBrc20HolderList()
        fetchBrc20TransferList()

    }, [])
    //brc20信息
    const fetchBRC20Details = async (data) => {
        const details = await getBrc20Details(data)
        setCardList(cardList = [
            { title: 'Total Amount', quantities: details.data.result.supply },
            { title: 'Casting Quantity', quantities: details.data.result.minted },
            { title: 'Single Casting Limit', quantities: details.data.result.limitpermint },
            { title: 'Decimal Precision', quantities: details.data.result.decimal },
            { title: 'Number Of Holders', quantities: details.data.result.addresscount },
            { title: 'Total Transaction Volume', quantities: details.data.result.txcount },
        ])
        setDetailsList(detailsList = [
            { title: 'Deployed by:', content: details.data.result.deployaddress },
            { title: 'Inscription Starting Nunber:', content: details.data.result.numberstart },
            { title: 'End Number Of Inscription:', content: details.data.result.numberend }
        ])

        console.log('brc20详情', details)
    }
    //brc20交易列表
    const fetchBrc20TransferList = async () => {
        let brc20TransList = await getBrc20TransList({ "jsonrpc": "2.0", "method": "listbrc20txdetails", "params": { "name": name, "gettype": dataFilter[currentFilter].value, "fork": "202" }, "id": 83 })
        console.log('brc20交易列表', brc20TransList.data.result)

        // upDataColumns(dataColumns = brc20TransList.data.result)
    }
    //brc20持有量列表
    const featchBrc20HolderList = async () => {
        let brc20HolderList = await getBrc20TransList({ "jsonrpc": "2.0", "method": "listbrc20address", "params": { "name": name, "pagenumber": 0, "pagesize": 100, "fork": "202" }, "id": 83 })
        console.log('brc20持有量列表', brc20HolderList)
        upDataColumns(dataColumns = brc20HolderList.data.result)
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
                                <div className={['font-black text-4xl mb-1 cursor-pointer ease-in-out duration-300 hover:text-title-green', cuerrentType === index ? "text-title-green" : ""].join(" ")}>{item.title}</div>
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
