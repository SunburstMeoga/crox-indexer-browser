import React from 'react'

const SupplyCard = ({ cardInfo }) => {
    return (
        <div className='px-6 py-2.5'>
            <div className='flex justify-start border border-transparent items-center'>
                <div className='text-line-gray'>{cardInfo.title}</div>
                <div className='text-white flex justify-start items-baseline ml-6'>
                    <div className='text-2xl font-bold'>{cardInfo.content}</div>
                    {cardInfo.unit && <div className='text-sm'></div>}
                </div>
            </div>
        </div>
    )
}

export default SupplyCard
