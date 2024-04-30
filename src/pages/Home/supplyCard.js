import React from 'react'

const SupplyCard = ({ cardInfo }) => {
    return (
        <div className='lg:py-0-9 lg:px-1-0'>
            <div className='flex justify-between border border-transparent items-center'>
                <div className='text-line-gray text-1-2 font-medium'>{cardInfo.title}</div>
                <div className='text-white flex justify-start items-baseline ml-6 font-semibold text-2-0'>
                    <div className='text-2xl font-bold'>{cardInfo.content}</div>
                    {cardInfo.unit && <div className='text-'></div>}
                </div>
            </div>
        </div>
    )
}

export default SupplyCard
