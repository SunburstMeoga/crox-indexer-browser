import React from 'react'
import TransactionsCard from './transactionsCard'
import PageSize from '@/components/PageSize'
import DetailsCard from './detailsCard'
const BlockDetails = () => {
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
                <div className='w-full relative'>
                    <div className=''>
                        <img src='/images/block-details.png' alt=''></img>
                    </div>
                    <div className='absolute left-0 top-0 w-full flex justify-center items-center h-full'>
                        <div className='w-10/12 text-white font-bold text-4xl'>
                            <div className='mb-6'>Blockchain</div>
                            <div className='mb-6 text-6xl'>#1413002</div>
                            <div>2024-03-26 17:37:18</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center min-h-svh bg-primary-green w-full pt-14'>
                    <div className='w-11/12 overflow-hidden rounded-2xl   bg-card-black mb-14'>
                        <TransactionsCard detailsInfo={detailsInfo}></TransactionsCard>
                    </div>
                    <div className='w-11/12 text-module-title'>
                        <div className='font-bold text-6xl pop-bold mb-6' style={{ fontSize: '100px' }}>
                            Brc20
                        </div>
                        <div className='pop-bold text-3xl' style={{ fontSize: '50px' }}>
                            Transaction Details
                        </div>
                    </div>
                    <div className='w-11/12 flex justify-end items-center mb-4'>
                        <PageSize></PageSize>
                    </div>
                    <div className='w-11/12 '>
                        {transactionsList.map((item, index) => {
                            return <div className='w-full overflow-hidden rounded-2xl bg-white shadow-2xl mb-8'>
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
