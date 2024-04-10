import React from 'react'

const HomeCard = ({ cardInfo }) => {
    return (
        <div>
            <div className='px-6 py-2 pt-5'>
                <div className='text-line-gray flex justify-between items-center mb-8 font-bold text-xl'>
                    <div className=''>{cardInfo.title}</div>
                    <div className=''>{cardInfo.time}</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='text-white text-5xl'>{cardInfo.amount}</div>
                    <div className={['text-xl', cardInfo.tide === 'up' ? 'text-title-green' : 'text-decline-red'].join("  ")}>{cardInfo.tide === 'up' ? '+' : '-'}{cardInfo.trading}</div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard
