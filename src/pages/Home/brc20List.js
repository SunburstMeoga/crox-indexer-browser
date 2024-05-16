import React, { useEffect, useState } from 'react'
import Brc20ListTable from './brc20ListTable';
import Pagination from '../../components/Pagination';

import { getBrc20List } from '@/api/homeApi';

const Brc20List = () => {
    let [dataColumns, upDataColumns] = useState([])
    let [brc20ListPagination, changeBrc20ListPagination] = useState({})
    let [inputValue, setInputValue] = useState(1);

    const titleColumnsData = [
        { title: 'Name', titleWidth: '', colWidth: 'w-5-0 lg:w-9-0', flag: 'name' },
        { title: 'Deployment Time', titleWidth: '', colWidth: 'w-8-0 lg:w-26-0', flag: 'deploytime' },
        { title: 'Casting Quantity', titleWidth: '', colWidth: 'w-7-8 lg:w-36-8', flag: 'mintprogress' },
        { title: 'Number Of Address Held', titleWidth: '', colWidth: 'w-8-9 lg:w-15-8', flag: 'addresscount' },
        { title: 'Trading Volume', titleWidth: '', colWidth: 'w- lg:w-14-2', flag: 'txcount' }
    ]
    //brc20列表
    const fetchBRC20List = async (targetPageNumber) => {
        try {
            const BRC20Data = await getBrc20List({ "jsonrpc": "2.0", "method": "listbrc20info", "params": { "fork": "202", "pagesize": 10, pagenumber: targetPageNumber || 0 }, "id": 83 })
            console.log('brc20列表', BRC20Data)
            upDataColumns(dataColumns = BRC20Data.data.result.datalist)
            const { pagenumber, pagesize, totalpagecount, totalrecordcount } = BRC20Data.data.result
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
            changeBrc20ListPagination(brc20ListPagination = obj)
            setInputValue(inputValue = brc20ListPagination.pagenumber + 1)
        } catch (err) {
            console.log(err)
        }
    }
    const handlePageNumber = (pageNumber) => {
        console.log('click page numnber', pageNumber)
        fetchBRC20List(pageNumber - 1)

    }
    //点击上一页
    const handlePrevPage = () => {
        console.log('上一页', brc20ListPagination.pagenumber - 1)
        if (brc20ListPagination.pagenumber <= 0) return
        fetchBRC20List(brc20ListPagination.pagenumber - 1)

    }
    //点击下一页
    const handleNextPage = () => {
        console.log('下一页', brc20ListPagination.pagenumber)
        if (brc20ListPagination.pagenumber >= Math.floor(brc20ListPagination.totalrecordcount / brc20ListPagination.totalpagecount)) return
        fetchBRC20List(brc20ListPagination.pagenumber + 1)
    }
    //点击第一页
    const handleFirstPage = () => {
        console.log('first page')
        fetchBRC20List(0)
    }
    //点击最后一页
    const handleLastPage = () => {
        console.log('last page')
        fetchBRC20List(brc20ListPagination.totalpagecount - 1)
    }
    const handleInputChange = (newValue) => {
        setInputValue(newValue);
        console.log(newValue)
    }
    const toPage = () => {
        console.log(inputValue)
        fetchBRC20List(inputValue - 1)
    }
    useEffect(() => {
        fetchBRC20List()
    }, [])
    return (
        <div className='w-full bg-primary-green flex flex-col items-center pt-2-7'>
            <div
                className='px-1-3 lg:2-7-0 xl:px-5-9 w-full text-title-blue text-4-0 lg:text-black font-medium lg:font-bold module-title lg:mb-4-6 eading-point-128 lg:text-10-0 xl:text-12-5 '>
                Brc-20
            </div>
            <div className='w-full mt-2-0  px-1-3 lg:mt-auto lg:mb-5-2 lg:px-2-6 xl:px-6-9 relative overflow-x-hidden'>
                <div className='absolute -right-1-5 top-1-6 more-arrow h-3-0 w-3-0 rounded-full flex justify-start items-center text-white z-10 lg:hidden'>
                    <div className='icon iconfont icon-right ml-0-5' style={{ fontSize: '20px' }}></div>
                </div>
                <Brc20ListTable titleColumnsData={titleColumnsData} dataColumns={dataColumns} />
            </div>
            <div className='w-full hidden lg:flex justify-end mb-7-0 pr-7-8'>
                {dataColumns.length !== 0 && <Pagination showJump getPageNumber={handlePageNumber} paginatioInfo={brc20ListPagination} toPrevPage={handlePrevPage} toNextPage={handleNextPage} toFirstPage={handleFirstPage} toLastPage={handleLastPage} toPage={toPage} inputValue={inputValue}
                    onChange={handleInputChange} />}
            </div>
        </div>
    )
}

export default Brc20List
