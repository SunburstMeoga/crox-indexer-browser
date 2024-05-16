import React, { useEffect, useState } from 'react'
import TransactionsCard from './transactionsCard'
import PageSize from '@/components/PageSize'
import DetailsCard from './detailsCard'
import Pagination from '@/components/Pagination'
import { useParams } from 'react-router-dom'
import { getBlockDetails } from '@/api/homeApi'
import { FilterTime } from '../../utils/format'
import TableLoading from '@/components/TableLoading'
const BlockDetails = () => {
    const params = useParams()
    const { hash } = params
    let [detailsCard, getDetailsCard] = useState([])
    let [blockDetails, changeBlockDetails] = useState([])
    let [transactionsList, changeTrasactionList] = useState([])
    let [blockTranPagination, changeBlockTranPagination] = useState({})
    let [transCount, changeTransCount] = useState({})
    let [loading, changeLoading] = useState(false)
    let [inputValue, setInputValue] = useState('');

    const fetchBlockDetails = async (targetPageNumber) => {
        changeLoading(loading = true)
        let res = await getBlockDetails({ "jsonrpc": "2.0", "method": "getblockbrcinfo", "params": { "blockhash": hash, pagenumber: targetPageNumber || 0, "fork": "202" }, "id": 83 })
        const { height, txmint, reward, gasused, gaslimit, usertxcount, } = res.data.result.header
        const { pagenumber, pagesize, totalpagecount, totalrecordcount } = res.data.result
        getDetailsCard(detailsCard = [
            { title: 'Block Height', content: height },
            { title: 'Verification Address', content: txmint, canCopy: true },
            { title: 'Block Reward', content: `${reward} HAH` },
            { title: 'Gas Used', content: gasused },
            { title: 'Gas Limit', content: gaslimit },
        ])
        changeBlockDetails(blockDetails = res.data.result.header)
        changeTrasactionList(transactionsList = res.data.result.datalist)
        changeTransCount(transCount = { count: usertxcount, brc20Count: totalrecordcount })
        let arr = []
        if (pagenumber === 0 || pagenumber === 1) {
            arr = [pagenumber + 1, pagenumber + 2, pagenumber + 3, pagenumber + 4, pagenumber + 5]
        } else {
            arr = [pagenumber - 1, pagenumber, pagenumber + 1, pagenumber + 2, pagenumber + 3]
        }
        let obj = {
            pagenumber,
            pagesize, totalpagecount, totalrecordcount, pageNumbers: arr
        }
        changeBlockTranPagination(blockTranPagination = obj)
        setInputValue(inputValue = blockTranPagination.pagenumber + 1)
        console.log('区块详情', res)
        changeLoading(loading = false)
    }
    //点击分页器某个页数
    const handlePageNumber = (pageNumber) => {
        console.log('click page numnber', pageNumber)
        fetchBlockDetails(pageNumber - 1)

    }
    //点击上一页
    const handlePrevPage = () => {
        console.log('上一页', blockTranPagination.pagenumber - 1)
        if (blockTranPagination.pagenumber <= 0) return
        fetchBlockDetails(blockTranPagination.pagenumber - 1)

    }
    //点击下一页
    const handleNextPage = () => {
        console.log('下一页', blockTranPagination.pagenumber)
        if (blockTranPagination.pagenumber >= Math.floor(blockTranPagination.totalrecordcount / blockTranPagination.totalpagecount)) return
        fetchBlockDetails(blockTranPagination.pagenumber + 1)

    }
    //点击第一页
    const handleFirstPage = () => {
        console.log('first page')
        fetchBlockDetails(0)
    }
    //点击最后一页
    const handleLastPage = () => {
        console.log('last page')
        fetchBlockDetails(blockTranPagination.totalpagecount - 1)
    }
    const handleInputChange = (newValue) => {
        setInputValue(newValue);
        console.log(newValue)
    };
    const toPage = () => {
        console.log(inputValue)
        fetchBlockDetails(inputValue - 1)
    }
    useEffect(() => {
        fetchBlockDetails()
    }, [])
    return (
        <div>
            <div className='flex flex-col justify-start items-center'>
                <div className='w-full relative'>
                    <div className=''>
                        <img src='/images/block-details.png' className='hidden lg:hidden xl:block' alt=''></img>
                        <img src='/images/mobile/block-details.png' className='block xl:hidden lg:hidden' alt=''></img>
                        <img src='/images/pad/block-details.png' className='hidden lg:block xl:hidden' alt=''></img>
                    </div>
                    <div className='absolute top-0-1 w-full flex justify-center items-center h-full'>
                        <div className='pl-2-5 lg:pl-9-9 w-full text-white font-light lg:font-medium'>
                            <div className='mb-1-8 text-3-0 hidden lg:block'>Block</div>
                            <div className='mb-1-0 mt-2-0 lg:mt-0-1 text-3-0 lg:mb-1-8 lg:text-6-0'>#{blockDetails.height}</div>
                            <div className='text-1-2 lg:text-2-3'>{FilterTime(blockDetails.time)} common</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center min-h-svh bg-primary-green w-full pt-2-0 lg:pt-0-1 xl:pt-4-4'>
                    <div className='w-full xl:px-7-7 hidden lg:block'>
                        <TransactionsCard detailsInfo={detailsCard} transCount={transCount}></TransactionsCard>
                    </div>
                    <div className='w-full pl-0-6 lg:pl-2-9 xl:pl-7-7 text-module-title mt-0-1 lg:mt-3-2 '>
                        <div className='text-5-2 lg:text-6-8 font-bold'>
                            Brc20
                        </div>
                        <div className='text-3-8 lg:text-5-2 font-bold'>
                            Transaction Details
                        </div>
                    </div>
                    {/* <div className='w-full  justify-end pr-7-7 mb-0-7 hidden xl:flex'>
                        <PageSize />
                    </div> */}
                    <div className=''>
                        {loading && <TableLoading></TableLoading>}
                    </div>
                    <div className='w-full'>
                        {transactionsList.map((item, index) => {
                            return <div className='w-full mt-1-5 xl:mt-auto lg:mb-1-2 lg:px-2-9 xl:px-7-7' key={index}>
                                <DetailsCard itemContent={item} hash={blockDetails.hash}></DetailsCard>
                            </div>
                        })}
                    </div>
                    <div className='w-full  justify-end mb-7-0 pr-7-8 hidden lg:flex'>
                        {transactionsList.length !== 0 &&
                            <Pagination showJump getPageNumber={handlePageNumber} paginatioInfo={blockTranPagination} toPrevPage={handlePrevPage} toNextPage={handleNextPage} toFirstPage={handleFirstPage} toLastPage={handleLastPage} toPage={toPage} inputValue={inputValue}
                                onChange={handleInputChange} />}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlockDetails
