import React, { useEffect, useState } from 'react'
import TransDataTable from '../BRC20Details/transferDataTable';
import Pagination from '../../components/Pagination';

import { getBrc20TransList,btcBlockBrc20Trans,btcInfo } from '@/api/homeApi'

function Search() {
    let [showSelect, toggleSelect] = useState(false)
    let [selectTarget, changeSelectTarget] = useState(0)
    let [transferDataColumns, upTransferDataColumns] = useState([])
    let [listPagination, changeListPagination] = useState({})
    let [searchValue, setSearchValue] = useState('')
    const transferTitleaColumusData = [
        { title: 'Number', titleWidth: '', colWidth: 'w-10-0 lg:flex-1', flag: 'id' },
        { title: 'Method', titleWidth: '', colWidth: 'w-10-0 lg:w-18-0', flag: 'method', },
        { title: 'Quantity', titleWidth: '', colWidth: 'w-10-0 lg:w-14-0', flag: 'amount', },
        { title: 'Balance', titleWidth: 'w-32', colWidth: 'w-10-0  lg:w-10-5', flag: 'balance' },
        { title: 'From', titleWidth: '', colWidth: 'w-13-0  lg:flex-1', flag: 'from', filterAddress: true },
        { title: 'Arrive', titleWidth: '', colWidth: 'w-13-0  lg:flex-1', flag: 'to', filterAddress: true },
        { title: 'Time', titleWidth: 'w-32', colWidth: 'w-20-0 lg:flex-1', flag: 'txtime' },
    ]
    let selectList = [{ title: 'Brc-20' }, { title: 'Block Hash' }, { title: 'Transaction ID' }]
    const handleSelect = () => {
        toggleSelect(showSelect = !showSelect)
    }
    const handleFilter = (item, index) => {
        changeSelectTarget(selectTarget = index)
        toggleSelect(showSelect = !showSelect)
        console.log(item, selectTarget)
    }
    // 处理输入框变化的函数
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
        // console.log(searchValue)
    }
    const handleSearch = () => {
        console.log(searchValue)
        // if(!searchValue) return
        switch (selectTarget) {
            case 0: fetchBrc20TransferList(0, searchValue);
                break;
            case 1: featchBtcBlockBrc20Trans(0, searchValue)
                break;
            case 2: fetchBtcIdBrc20Trans(0, searchValue)
                break;
        }
        
    }
    //按BTC交易ID查询铭文
    const fetchBtcIdBrc20Trans = async (targetPageNumber, btctxid) => {
        let brc20TransList = await btcBlockBrc20Trans({ "jsonrpc": "2.0", "method": "listbrc20txdetails", "params": { "btctxid": btctxid, pagenumber: targetPageNumber || 0, "fork": "202", "pagesize": 10, }, "id": 83 })
        
        console.log('brc20交易列表', brc20TransList.data.result.datalist)
        const { pagenumber, pagesize, totalpagecount, totalrecordcount } = brc20TransList.data.result
        upTransferDataColumns(transferDataColumns = brc20TransList.data.result.datalist)
        let pageCountArr = []
        if (pagenumber <= 2) {
            // pageCountArr = [pagenumber - 2, pagenumber - 1, pagenumber + 1, pagenumber + 2, pagenumber + 3]
            pageCountArr = [1, 2, 3, 4, 5]
        } else {
            pageCountArr = [pagenumber - 1, pagenumber, pagenumber + 1, pagenumber + 2, pagenumber + 3]
        }
        if (pagenumber === totalpagecount - 1) {
            console.log('afsdf')
            pageCountArr = [pagenumber - 3, pagenumber - 2, pagenumber - 1, pagenumber, pagenumber + 1]
        }
        let obj = {
            pagenumber,
            pagesize, totalpagecount, totalrecordcount, pageNumbers: pageCountArr
        }
        changeListPagination(listPagination = obj)
    }
    //按BTC区块HASH查询铭文
    const featchBtcBlockBrc20Trans = async (targetPageNumber, hash) => {
        let brc20TransList = await btcBlockBrc20Trans({ "jsonrpc": "2.0", "method": "listbrc20txdetails", "params": { "hash": hash, pagenumber: targetPageNumber || 0, "fork": "202", "pagesize": 10, }, "id": 83 })
        
        console.log('brc20交易列表', brc20TransList.data.result.datalist)
        const { pagenumber, pagesize, totalpagecount, totalrecordcount } = brc20TransList.data.result
        upTransferDataColumns(transferDataColumns = brc20TransList.data.result.datalist)
        let pageCountArr = []
        if (pagenumber <= 2) {
            // pageCountArr = [pagenumber - 2, pagenumber - 1, pagenumber + 1, pagenumber + 2, pagenumber + 3]
            pageCountArr = [1, 2, 3, 4, 5]
        } else {
            pageCountArr = [pagenumber - 1, pagenumber, pagenumber + 1, pagenumber + 2, pagenumber + 3]
        }
        if (pagenumber === totalpagecount - 1) {
            console.log('afsdf')
            pageCountArr = [pagenumber - 3, pagenumber - 2, pagenumber - 1, pagenumber, pagenumber + 1]
        }
        let obj = {
            pagenumber,
            pagesize, totalpagecount, totalrecordcount, pageNumbers: pageCountArr
        }
        changeListPagination(listPagination = obj)
    }
    //brc20交易列表
    const fetchBrc20TransferList = async (targetPageNumber, name) => {
        let brc20TransList = await getBrc20TransList({ "jsonrpc": "2.0", "method": "listbrc20txdetails", "params": { "name": name, pagenumber: targetPageNumber || 0, "fork": "202", "pagesize": 10, }, "id": 83 })
        console.log('brc20交易列表', brc20TransList.data.result.datalist)
        const { pagenumber, pagesize, totalpagecount, totalrecordcount } = brc20TransList.data.result
        upTransferDataColumns(transferDataColumns = brc20TransList.data.result.datalist)
        let pageCountArr = []
        if (pagenumber <= 2) {
            // pageCountArr = [pagenumber - 2, pagenumber - 1, pagenumber + 1, pagenumber + 2, pagenumber + 3]
            pageCountArr = [1, 2, 3, 4, 5]
        } else {
            pageCountArr = [pagenumber - 1, pagenumber, pagenumber + 1, pagenumber + 2, pagenumber + 3]
        }
        if (pagenumber === totalpagecount - 1) {
            console.log('afsdf')
            pageCountArr = [pagenumber - 3, pagenumber - 2, pagenumber - 1, pagenumber, pagenumber + 1]
        }
        let obj = {
            pagenumber,
            pagesize, totalpagecount, totalrecordcount, pageNumbers: pageCountArr
        }
        changeListPagination(listPagination = obj)
    }
    //点击分页器某个页数
    const handlePageNumber = (pageNumber) => {
        console.log('click page numnber', pageNumber)
        fetchBrc20TransferList(pageNumber - 1)

    }
    //点击上一页
    const handlePrevPage = () => {
        console.log('上一页', listPagination.pagenumber - 1)
        if (listPagination.pagenumber <= 0) return
        fetchBrc20TransferList(listPagination.pagenumber - 1)

    }
    //点击下一页
    const handleNextPage = () => {
        console.log('下一页', listPagination.pagenumber)
        if (listPagination.pagenumber >= Math.floor(listPagination.totalrecordcount / listPagination.totalpagecount)) return
        fetchBrc20TransferList(listPagination.pagenumber + 1)
    }
    //点击第一页
    const handleFirstPage = () => {
        console.log('first page')
        fetchBrc20TransferList(0)
    }
    //点击最后一页
    const handleLastPage = () => {
        console.log('last page')
        fetchBrc20TransferList(listPagination.totalpagecount - 1)
    }

    return (
        <div>
            <div className='bg-primary-green relative'>
                {/* <div className='xl:min-h-screen  absolute z-10'>
                    <img src='/images/pc/search-bg.png' alt='' className='hidden xl:block'></img>
                    <img src='/images/mobile/search-bg.png' alt='' className='lg:hidden xl:hidden'></img>
                    <img src='/images/pad/search-bg.png' alt='' className='hidden lg:block xl:hidden'></img>
                </div> */}
                <div className='flex flex-col w-full xl:min-h-screen justify-start items-center relative z-20 lg:pb-2-0 xl:pb-0-1'>
                    <div className='w-10-5 mt-3-9 lg:w-16-4 xl:w-23-0 xl:mt-11-4'>
                        <img src='/images/pc/logo-black.png' alt=''></img>
                    </div>
                    <div className='w-20-8 py-0-6 px-1-0 lg:w-54-3 xl:w-70-4 rounded-full bg-white lg:py-1-5 lg:px-2-0 xl:py-1-2 xl:px-1-7 mt-2-8 xl:mt-3-2 flex justify-between items-center'>
                        <div className='text-line-gray font-medium text-1-0 lg:text-2-0 flex justify-start items-center relative cursor-pointer' onClick={() => handleSelect()}>
                            <div className='pr-0-4 xl:pr-1-0 font-medium'>{selectList[selectTarget].title}</div>
                            <div className='icon iconfont icon-down1 pr-0-4 xl:pr-1-0 text-down-icon hidden lg:block'></div>
                            <div className='icon iconfont icon-down1 pr-0-4 xl:pr-1-0 text-down-icon block xl:hidden' style={{ fontSize: '10px' }}></div>

                            <div className='w-0-1 h-1-4 lg:h-2-4 xl:h-2-4 bg-search-border'></div>
                        </div>
                        {showSelect && <div className='absolute xl:w-22-5 xl:px-2-4 bg-black-0.58 backdrop-blur-md text-select-item rounded-xl text-1-0 top-14-0 px-1-0 lg:text-1-6 lg:top-18-0 lg:px-2-0 xl:text-2-0 xl:top-28-0 font-bold' onMouseLeave={() => handleSelect()}>
                            {selectList.map((item, index) => {
                                return <div key={index} className='py-1-2 cursor-pointer hover:text-white' onClick={() => { handleFilter(item, index) }}>{item.title}</div>
                            })}
                        </div>}
                        <div className='flex-1 pl-1-0'>
                            <input className='w-full h-full' onChange={handleInputChange} type="text"
                                value={searchValue} ></input>
                        </div>
                        <div className='flex justify-center items-center cursor-pointer'>
                            <div className='icon iconfont icon-search text-black hidden lg:block' onClick={() => handleSearch()} style={{ fontSize: '2rem' }}></div>
                            <div className='icon iconfont icon-search text-black lg:hidden' style={{ fontSize: '1rem' }}></div>

                        </div>
                    </div>
                    {/* <div className='mt-1-9 w-19-4 lg:w-full text-1-0 lg:text-1-5 xl:text-2-0 text-black text-center mb-1-0'>
                        Among the <span className='text-title-blue'>{listPagination.listPagination}</span> records, search for "{ searchValue}" and found <span className='text-title-blue'>100</span> results
                    </div> */}
                    {transferDataColumns.length !== 0 &&<div className='lg:px-2-3 pb-2-0 lg:rounded-2xl overflow-hidden bg-module-title flex flex-col justify-start items-center pt-2-4 lg:pt-2-7 mt-1-0'>
                        <TransDataTable titleColumnsData={transferTitleaColumusData} dataColumns={transferDataColumns}></TransDataTable>
                    </div>}
                    {transferDataColumns.length !== 0 && <div className='w-full lg:flex justify-end mt-1-3 hidden mb-1-0'>
                        <Pagination showJump getPageNumber={handlePageNumber} paginatioInfo={listPagination} toPrevPage={handlePrevPage} toNextPage={handleNextPage} toFirstPage={handleFirstPage} toLastPage={handleLastPage} />
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Search
