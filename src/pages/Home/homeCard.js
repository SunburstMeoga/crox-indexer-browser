import React from 'react'

const HomeCard = ({ cardInfo }) => {
    return (
        <div>
            <div className='px-1-8 py-1-2 lg:px-2-4 lg:py-2-0'>
                <div className='text-line-gray flex justify-between items-center text-1-0 mb-2-0 lg:mb-2-0 lg:font-semibold lg:text-1-5 '>
                    <div className='font-bold lg:leading-3-1'>{cardInfo.title}</div>
                    <div className='font-semibold lg:leading-3-1'>{cardInfo.time}</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='text-white font-light text-2-0 lg:text-3-0 lg:leading-3-1'>{cardInfo.amount}</div>

                    <div className='flex justify-end items-center font-semibold lg:text-1-5 lg:leading-3-1'>
                        <div className={[' ', cardInfo.tide === 'up' ? 'text-title-green' : 'text-decline-red'].join("  ")}>{cardInfo.tide === 'up' ? '+' : '-'}{cardInfo.trading}</div>
                        <div className='text-title-green flex justify-start items-center pl-2-0'>
                            <div className={['icon iconfont icon-down1 ',cardInfo.tide === 'up' ? 'rotate-180' : ''].join(" ")}></div>
                            <div className='pl-0-2'>{ cardInfo.point}%</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeCard
