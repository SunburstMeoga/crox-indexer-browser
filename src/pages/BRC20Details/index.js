import React, { useEffect, useState } from 'react'
import DataCard from './dataCard'
import HolderDataTable from './holderDataTable';
import TransDataTable from './transferDataTable';
import Pagination from '@/components/Pagination'
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

    const holderTitleColumnsData = [
        { title: 'Number', titleWidth: '', colWidth: '', flag: 'id' },
        { title: 'Holder Address', titleWidth: '', colWidth: '', flag: 'address', filterAddress: true },
        { title: 'Holdding Ratio', titleWidth: '', colWidth: 'w-32-0', flag: 'percentage', },
        { title: 'Quantity Held', titleWidth: 'w-32', colWidth: '', flag: 'balance' },
    ]
    const transferTitleaColumusData = [
        { title: 'Number', titleWidth: '', colWidth: 'w-12-5', flag: 'id' },
        { title: 'Method', titleWidth: '', colWidth: 'w-17-0', flag: 'address', filterAddress: true },
        { title: 'Quantity', titleWidth: '', colWidth: 'w-11-0', flag: 'percentage', },
        { title: 'Balance', titleWidth: 'w-32', colWidth: 'w-12-5', flag: 'balance' },
        { title: 'From', titleWidth: '', colWidth: 'w-15-0', flag: 'address', filterAddress: true },
        { title: 'Arrive', titleWidth: '', colWidth: 'w-15-3', flag: 'percentage', },
        { title: 'Time', titleWidth: 'w-32', colWidth: '', flag: 'balance' },
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
                <div className='w-full flex justify-start items-baseline text-module-title mb-3-4'>
                    <div className='font-bold  pl-6-3 text-12-5 h-8-4 mt-6-9'>
                        HAH
                    </div>
                    <div className='ml-1-8 text-2-0'>2023-4-30 23:45:02</div>
                </div>
                <div className='w-full px-6-9 flex justify-between items-center flex-wrap'>
                    {cardList.map((item, index) => {
                        return <div key={index} className="w-34-4 py-2-6 pl-2-9 mb-1-3 font-medium rounded-2xl overflow-hidden ease-in-out cursor-pointer bg-card-green duration-300 hover:text-primary-green hover:bg-black hover:shadow-2xl">
                            <DataCard title={item.title} showUnit={index === 0} quantities={item.quantities} />
                        </div>
                    })}
                </div>
                <div className='px-6-9  w-full mb-1-3'>
                    <div className='rounded-2xl overflow-hidden bg-module-title px-2-3'>
                        {detailsList.map((item, index) => {
                            return <div
                                key={index}
                                className={['pl-2-3 h-6-4 text-select-color flex justify-start items-center', index !== detailsList.length - 1 ? 'border-b border-select-color' : ''].join(" ")} >
                                <div className='bg-select-color w-0-7 h-0-7 ml-2-4'></div>
                                <div className='pl-2-3 text-1-5 font-semibold'>{item.title} {item.content}</div>
                            </div>
                        })}

                    </div>
                </div>
                <div className='px-6-9 w-full mb-3-7'>
                    <div className='px-2-3 pb-2-0 rounded-2xl overflow-hidden bg-module-title flex flex-col justify-start items-center py-2 pt-12 mb-6'>
                        <div className='flex justify-start items-center w-full pl-2-4 pt-4-7 mb-1-9'>
                            {dataTypes.map((item, index) => {
                                return <div
                                    onClick={() => handleDataType(item, index)}
                                    key={index}
                                    className={['text-select-color', index === 0 ? 'mr-8-8' : ''].join(" ")}>
                                    <div className={['font-black text-4xl mb-1-0 cursor-pointer ease-in-out duration-300 hover:text-title-green', cuerrentType === index ? "text-title-green" : ""].join(" ")}>{item.title}</div>
                                    <div className={['h-0-2  ease-in-out duration-300', cuerrentType === index ? "bg-title-green w-full" : "bg-transparent w-0-1"].join(" ")}></div>
                                </div>
                            })}
                        </div>
                        {cuerrentType === 1 && <div className='flex justify-start items-start ml-1-4 w-full mb-3-0 '>
                            {dataFilter.map((item, index) => {
                                return <div
                                    onClick={() => handleDataFilter(item, index)}
                                    key={index}
                                    className={[
                                        'px-1-3 py-0-7 rounded-2xl font-semibold cursor-pointer text-1-5',
                                        index !== 0 ? "ml-1-3" : "",
                                        currentFilter === index ? "bg-title-green text-black" : "bg-black text-line-gray"
                                    ].join(" ")}>{item.title}</div>
                            })}
                        </div>}
                        <div className='w-full'>
                            {cuerrentType === 0 && <div>
                                <HolderDataTable titleColumnsData={holderTitleColumnsData} dataColumns={dataColumns}></HolderDataTable>
                            </div>}

                            {cuerrentType === 1 && <div>
                                <TransDataTable titleColumnsData={transferTitleaColumusData} dataColumns={dataColumns}></TransDataTable>
                            </div>}

                            <div className='w-full flex justify-end mt-1-3'>
                                <Pagination showJump={false} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default BRC20Details
