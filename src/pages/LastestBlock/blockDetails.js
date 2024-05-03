import React, { useEffect, useState } from 'react'
import TransactionsCard from './transactionsCard'
import PageSize from '@/components/PageSize'
import DetailsCard from './detailsCard'
import Pagination from '@/components/Pagination'
import { useParams } from 'react-router-dom'
import { getBlockDetails } from '@/api/homeApi'

const BlockDetails = () => {
    const params = useParams()
    const { hash } = params
    let [detailsCard, getDetailsCard] = useState([])
    let [blockDetails, changeBlockDetails] = useState([])
    const transactionsList = ['', '', '']
    const fetchBlockDetails = async () => {
        let res = await getBlockDetails({ "jsonrpc": "2.0", "method": "getblockbrcinfo", "params": { "blockhash": hash, "fork": "202" }, "id": 83 })
        const { height, txmint, reward } = res.data.result.header
        getDetailsCard(detailsCard = [
            { title: 'Block Height', content: height },
            { title: 'Verification Address', content: txmint, canCopy: true },
            { title: 'Block Reward', content: `${reward} HAH` },
            { title: 'Gas Used', content: 'null' },
            { title: 'Gas Limit', content: 'null' },
        ])
        changeBlockDetails(blockDetails = res.data.result.header)
        console.log(res)
    }
    useEffect(() => {
        fetchBlockDetails()
    }, [])
    return (
        <div>
            <div className='flex flex-col justify-start items-center'>
                <div className='w-full relative '>
                    <div className=''>
                        <img src='/images/block-details.png' alt=''></img>
                    </div>
                    <div className='absolute  top-0-1 w-full flex justify-center items-center h-full'>
                        <div className='pl-9-9 w-full text-white font-medium'>
                            <div className='mb-1-8 text-3-0'>Blockchain</div>
                            <div className='mb-1-8 text-6-0'>#{blockDetails.height}</div>
                            <div className='text-2-3'>{blockDetails.time}</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center min-h-svh bg-primary-green w-full pt-4-4'>
                    <div className='w-full px-7-7'>
                        <TransactionsCard detailsInfo={detailsCard}></TransactionsCard>
                    </div>
                    <div className='w-full pl-7-7 text-module-title mt-3-2 '>
                        <div className='text-6-8 font-bold'>
                            Brc20
                        </div>
                        <div className='text-5-2 font-bold'>
                            Transaction Details
                        </div>
                    </div>
                    <div className='w-full flex justify-end pr-7-7 mb-0-7'>
                        <PageSize />
                    </div>
                    <div className='w-full'>
                        {transactionsList.map((item, index) => {
                            return <div className='w-full mb-1-2  px-7-7' key={index}>
                                <DetailsCard></DetailsCard>
                            </div>
                        })}
                    </div>
                    <div className='w-full flex justify-end mb-7-0 pr-7-8'>
                        <Pagination />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlockDetails
