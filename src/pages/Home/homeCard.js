import React from 'react'

const HomeCard = ({ cardInfo }) => {
    return (
        <div>
            <div className='lg:px-2-4 lg:py-2-0 '>
                <div className='text-line-gray flex justify-between items-center lg:mb-2-0 lg:font-semibold lg:text-1-5 '>
                    <div className='font-bold lg:leading-3-1'>{cardInfo.title}</div>
                    <div className='font-semibold lg:leading-3-1'>{cardInfo.time}</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='text-white lg:text-3-0 lg:leading-3-1'>{cardInfo.amount}</div>
                    <div className={[' font-semibold lg:text-1-5 lg:leading-3-1', cardInfo.tide === 'up' ? 'text-title-green' : 'text-decline-red'].join("  ")}>{cardInfo.tide === 'up' ? '+' : '-'}{cardInfo.trading}</div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard
