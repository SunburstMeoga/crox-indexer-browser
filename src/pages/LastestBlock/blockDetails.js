import React from 'react'
import TransactionsCard from './transactionsCard'
import PageSize from '@/components/PageSize'
import DetailsCard from './detailsCard'
import { useParams } from 'react-router-dom'

const BlockDetails = () => {
    const params = useParams()
    console.log(params.height)
    const detailsInfo = [
        { title: 'Block Height', content: '143002' },
        { title: 'Verification Address', content: '0xb4dd66d7c2c7e57f628210187192fb89d4b99dd4', canCopy: true },
        { title: 'Block Reward', content: '0.00059371 HAH' },
        { title: 'Gas Used', content: '27,559,829' },
        { title: 'Gas Limit', content: '39,997,863' },
    ]
    const transactionsList = ['', '', '']
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
                            <div className='mb-1-8 text-6-0'>#1413002</div>
                            <div className='text-2-3'>2024-03-26 17:37:18</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center min-h-svh bg-primary-green w-full pt-4-4'>
                    <div className='w-full px-7-7'>
                        <TransactionsCard detailsInfo={detailsInfo}></TransactionsCard>
                    </div>
                    <div className='w-full pl-7-7 text-module-title mt-3-2 font-bold'>
                        <div className='text-6-8'>
                            Brc20
                        </div>
                        <div className='text-5-2'>
                            Transaction Details
                        </div>
                    </div>
                    <div className='w-full flex justify-end pr-7-7 mb-0-7'>
                        <PageSize />
                    </div>
                    <div className='w-full'>
                        {transactionsList.map((item, index) => {
                            return <div className='w-full mb-2-1  px-7-7'>
                                <DetailsCard></DetailsCard>
                            </div>
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlockDetails
