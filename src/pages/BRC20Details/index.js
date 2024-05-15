import React, { useEffect, useState } from 'react'
import DataCard from './dataCard'
import HolderDataTable from './holderDataTable';
import TransDataTable from './transferDataTable';
import Pagination from '@/components/Pagination'
import { getBrc20Details, getBrc20TransList, getBrc20HolderList } from '@/api/homeApi'
import { useParams } from 'react-router-dom';

const BRC20Details = () => {
    let [cardList, setCardList] = useState([
        { title: 'Total Amount', quantities: '' },
        { title: 'Casting Quantity', quantities: '' },
        { title: 'Single Casting Limit', quantities: '' },
        { title: 'Decimal Precision', quantities: '' },
        { title: 'Number Of Holders', quantities: '' },
        { title: 'Total Transaction Volume', quantities: '' },
    ])
    let [detailsList, setDetailsList] = useState([
        { title: 'Deployed by:', content: '' },
        { title: 'Inscription Starting Nunber:', content: '' },
        { title: 'End Number Of Inscription:', content: '' }
    ])
    let [transListPagination, changeTransListPagination] = useState({})
    let [holdListPagination, changeHoldListPagination] = useState({})

    const dataTypes = [
        { title: 'Holder', vlaue: 0 },
        { title: 'Transfer', vlaue: 1 }
    ]
    const dataFilter = [
        { title: 'All', value: 0 },
        { title: 'Inscribe-mint', value: 2 },
        { title: 'Inscribe-transfer', value: 3 },
        { title: 'Transfer', value: 4 },
    ]
    let [cuerrentType, changeType] = useState(0)
    let [currentFilter, changeFilter] = useState(0)

    const handleDataType = (item, index) => {
        changeType(cuerrentType = index)
    }
    const handleDataFilter = (item, index) => {
        changeFilter(currentFilter = item.value)
        console.log(currentFilter)

        if (cuerrentType === 1) {
            fetchBrc20TransferList()
        } else {
            featchBrc20HolderList()
        }
    }

    const holderTitleColumnsData = [
        { title: 'Number', titleWidth: '', colWidth: 'w-10-0 lg:flex-1', flag: 'id' },
        { title: 'Holder Address', titleWidth: '', colWidth: 'w-13-0  lg:w-20-0', flag: 'address', filterAddress: true },
        { title: 'Holdding Ratio', titleWidth: '', colWidth: 'w-10-0  lg:w-32-0', flag: 'percentage', },
        { title: 'Quantity Held', titleWidth: 'w-32', colWidth: 'w-10-0  lg:w-28-0', flag: 'balance' },
    ]
    const transferTitleaColumusData = [
        { title: 'Number', titleWidth: '', colWidth: 'w-10-0 lg:flex-1', flag: 'id' },
        { title: 'Method', titleWidth: '', colWidth: 'w-10-0 lg:w-18-0', flag: 'method', },
        { title: 'Quantity', titleWidth: '', colWidth: 'w-10-0 lg:w-14-0', flag: 'amount', },
        { title: 'Balance', titleWidth: 'w-32', colWidth: 'w-10-0  lg:w-10-5', flag: 'balance' },
        { title: 'From', titleWidth: '', colWidth: 'w-13-0  lg:flex-1', flag: 'from', filterAddress: true },
        { title: 'Arrive', titleWidth: '', colWidth: 'w-13-0  lg:flex-1', flag: 'to', filterAddress: true },
        { title: 'Time', titleWidth: 'w-32', colWidth: 'w-20-0 lg:flex-1', flag: 'txtime' },
    ]
    const supplyCards = [
        { title: 'Market Cap', content: '$10.8b', unit: 'b' },
        { title: 'Volume(24h)', content: '$301.7', unit: 'm' },
        { title: 'Supply', content: '87,679,108,751', unit: false },
        { title: 'Staked', content: '45,711,791,430', unit: false },

    ]
    let [holderDataColumns, upHolderDataColumns] = useState([])
    let [transferDataColumns, upTransferDataColumns] = useState([])

    const { name } = useParams()
    useEffect(() => {
        let data = { "jsonrpc": "2.0", "method": "getbrc20details", "params": { "type": "brc-20", "fork": "202", "name": name, "gettype": currentFilter }, "pagesize": 100, "id": 83 }
        fetchBRC20Details(data)
        featchBrc20HolderList(0)
        fetchBrc20TransferList(0)

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
    const fetchBrc20TransferList = async (targetPageNumber) => {
        console.log(currentFilter)
        let brc20TransList = await getBrc20TransList({ "jsonrpc": "2.0", "method": "listbrc20txdetails", "params": { "name": name, "gettype": currentFilter, pagenumber: targetPageNumber || 0, "fork": "202", "pagesize": 10, }, "id": 83 })
        console.log('brc20交易列表', brc20TransList.data.result.datalist)
        const { pagenumber, pagesize, totalpagecount, totalrecordcount } = brc20TransList.data.result
        upTransferDataColumns(transferDataColumns = brc20TransList.data.result.datalist)
        let obj = {
            pagenumber,
            pagesize, totalpagecount, totalrecordcount, pageNumbers: [pagenumber + 1, pagenumber + 2, pagenumber + 3]
        }
        changeTransListPagination(transListPagination = obj)
    }
    //brc20持有量列表
    const featchBrc20HolderList = async (targetPageNumber) => {
        let brc20HolderList = await getBrc20TransList({ "jsonrpc": "2.0", "method": "listbrc20address", "params": { "name": name,  "pagesize": 10, pagenumber: targetPageNumber || 0, "fork": "202" }, "id": 83 })
        console.log('brc20持有量列表', brc20HolderList)
        const { pagenumber, pagesize, totalpagecount, totalrecordcount } = brc20HolderList.data.result

        upHolderDataColumns(holderDataColumns = brc20HolderList.data.result.datalist)
        let obj = {
            pagenumber,
            pagesize, totalpagecount, totalrecordcount, pageNumbers: [pagenumber + 1, pagenumber + 2, pagenumber + 3]
        }
        changeHoldListPagination(holdListPagination = obj)
    }
    //点击分页器某个页数
    const handlePageNumber = (pageNumber) => {
        console.log('click page numnber', pageNumber)
        if (cuerrentType == 1) {
            fetchBrc20TransferList(pageNumber - 1)
        } else {
            featchBrc20HolderList(pageNumber - 1)
        }
       
    }
    //点击上一页
    const handlePrevPage = () => {
        if (cuerrentType == 1) {
            if (transListPagination.pagenumber <= 0) return
            fetchBrc20TransferList(transListPagination.pagenumber - 1)
        } else {
            if (holdListPagination.pagenumber <= 0) return
            featchBrc20HolderList(holdListPagination.pagenumber - 1)
        }

    }
    //点击下一页
    const handleNextPage = () => {
        console.log(cuerrentType)
        if (cuerrentType == 1) {
            if (transListPagination.pagenumber >= Math.floor(transListPagination.totalrecordcount / transListPagination.totalpagecount)) return
            fetchBrc20TransferList(transListPagination.pagenumber + 1)
        } else {
            if (holdListPagination.pagenumber >= Math.floor(holdListPagination.totalrecordcount / holdListPagination.totalpagecount)) return
            featchBrc20HolderList(holdListPagination.pagenumber + 1)
        }
    }
    return (
        <div>
            <div className='bg-primary-green w-full flex flex-col items-center justify-start min-h-svh'>
                <div className='w-full lg:flex justify-start items-baseline text-module-title mb-2-2 lg:mb-1-3 xl:mb-3-4'>
                    <div className='lg:font-bold font-medium pl-1-5 lg:pl-2-2 xl:pl-6-3 text-4-0 lg:text-12-5 xl:h-8-4 mt-3-0 lg:mt-2-8 xl:mt-6-9'>
                        HAH
                    </div>
                    <div className='ml-1-8 text-1-0 lg:text-2-0'>2023-4-30 23:45:02</div>
                </div>
                <div className='w-full px-1-3 lg:px-2-2 xl:px-6-9 flex justify-between items-center flex-wrap'>
                    {cardList.map((item, index) => {
                        return <div key={index} className="w-34-4 lg:w-29-2 xl:w-34-4 pl-1-3 py-1-3 lg:py-2-6 lg:pl-2-9 mb-1-3 font-medium rounded-2xl overflow-hidden ease-in-out cursor-pointer bg-card-green duration-300 hover:text-primary-green hover:bg-black hover:shadow-2xl">
                            <DataCard title={item.title} unit={item.unit} quantities={item.quantities} />
                        </div>
                    })}
                </div>
                <div className='lg:px-2-2 xl:px-6-9 w-full mb-1-3'>
                    <div className='lg:rounded-2xl overflow-hidden bg-module-title px-1-0 lg:px-1-2 xl:px-2-3'>
                        {detailsList.map((item, index) => {
                            return <div
                                key={index}
                                className={['px-0-5 py-2-8 lg:py-0-1 xl:px-0-1 lg:pl-2-3 lg:h-6-4 text-select-color flex justify-start items-center', index !== detailsList.length - 1 ? 'border-b border-select-color' : ''].join(" ")} >
                                <div className='bg-select-color w-0-7 h-0-7 ml-2-4 lg:ml-1-0 xl:ml-2-4 hidden lg:block'></div>
                                <div className='lg:pl-2-3 w-21-1 lg:w-auto text-1-0 break-words text-wrap lg:text-1-5 font-semibold lg:font-light lg:flex lg:items-center lg:justify-start '><div className='mb-3-0 lg:mb-auto'>{item.title}</div> <div className='text-word-gray lg:text-select-color '>{item.content}</div> </div>
                            </div>
                        })}

                    </div>
                </div>
                <div className='lg:px-2-2 xl:px-6-9 w-full lg:mb-3-7'>
                    <div className='lg:px-2-3 pb-2-0 lg:rounded-2xl overflow-hidden bg-module-title flex flex-col justify-start items-center pt-12 mb-6'>
                        <div className='flex justify-start items-center w-full pl-1-8 lg:pl-1-3 xl:pl-2-4 pt-2-4 lg:pt-4-7 mb-1-9'>
                            {dataTypes.map((item, index) => {
                                return <div
                                    onClick={() => handleDataType(item, index)}
                                    key={index}
                                    className={['text-select-color', index === 0 ? 'mr-4-0 lg:mr-8-8' : ''].join(" ")}>
                                    <div className={['lg:font-black font-light text-2-0 lg:text-2-3  mb-0-3 cursor-pointer ease-in-out duration-300 hover:text-title-green', cuerrentType === index ? "text-title-green" : ""].join(" ")}>{item.title}</div>
                                    <div className={['h-0-2  ease-in-out duration-300', cuerrentType === index ? "bg-title-green w-full" : "bg-transparent w-0-1"].join(" ")}></div>
                                </div>
                            })}
                        </div>
                        {cuerrentType === 1 && <div className='flex flex-wrap justify-between lg:justify-start items-start lg:ml-1-4 w-22-4 lg:w-full mb-3-0 gap-2'>
                            {dataFilter.map((item, index) => {
                                return <div
                                    onClick={() => handleDataFilter(item, index)}
                                    key={index}
                                    className={[
                                        'px-1-5 lg:px-1-3 py-0-7 rounded-xl lg:rounded-2xl font-semibold cursor-pointer text-1-2 lg:text-1-5 mb-1-0 lg:mb-auto',
                                        index !== 0 ? "lg:ml-1-3" : "",
                                        currentFilter === item.value ? "bg-title-green text-black" : "bg-black text-line-gray"
                                    ].join(" ")}>{item.title}</div>
                            })}
                        </div>}
                        <div className='w-full'>
                            {cuerrentType === 0 && <div className='text relative'>
                                <div className='absolute -right-1-5 top-0-6 more-arrow h-3-0 w-3-0 rounded-full flex justify-start items-center text-white z-10 lg:hidden'>
                                    <div className='icon iconfont icon-right ml-0-5' style={{ fontSize: '20px' }}></div>
                                </div>
                                <HolderDataTable titleColumnsData={holderTitleColumnsData} dataColumns={holderDataColumns}></HolderDataTable>
                            </div>}

                            {cuerrentType === 1 && <div className='text relative'>
                                <div className='absolute -right-1-5 top-0-6 more-arrow h-3-0 w-3-0 rounded-full flex justify-start items-center text-white z-10 lg:hidden'>
                                    <div className='icon iconfont icon-right ml-0-5' style={{ fontSize: '20px' }}></div>
                                </div>
                                <TransDataTable titleColumnsData={transferTitleaColumusData} dataColumns={transferDataColumns}></TransDataTable>
                            </div>}

                            {transferDataColumns.length !== 0 && cuerrentType == 1 && <div className='w-full lg:flex justify-end mt-1-3 hidden'>
                                <Pagination showJump getPageNumber={handlePageNumber} paginatioInfo={transListPagination} toPrevPage={handlePrevPage} toNextPage={handleNextPage} />
                            </div>}



                            {holderDataColumns.length !== 0 && cuerrentType == 0 && <div className='w-full lg:flex justify-end mt-1-3 hidden'>
                            <Pagination showJump getPageNumber={handlePageNumber} paginatioInfo={holdListPagination} toPrevPage={handlePrevPage} toNextPage={handleNextPage} />
                            </div>}

                           
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default BRC20Details
