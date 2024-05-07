import React from 'react'

const BlockCard = ({ blockInfo }) => {
    return (
        <div className=''>
            <div className='py-1-7 px-2-2 lg:px-4-3 lg:py-3-4 relative bg-card-gray'>
                <div className='absolute -top-1-0 right-0-1 lg:right-0-1 lg:top-0-1 z-10'>
                    {/* <img src='/images/link.png' alt=''></img> */}
                    <div className='icon iconfont icon-link' style={{ fontSize: '12.5rem' }}></div>
                </div>
                <div className='flex justify-start items-baseline mb-2-2 lg:mb-1-9 font-medium'>
                    <div className='text-white text-2-0 lg:text-2-5'>#{blockInfo.height}</div>
                    <div className='text-line-gray ml-1-3 lg:ml-1-8 text-1-0 lg:text-1-3 font-medium relative z-20'>6 minute age</div>
                </div>
                <div className='flex justify-start items-end mb-1-8'>
                    <div className='text-title-green text-6xl lg:font-bold'>{blockInfo.txcount}</div>
                    <div className='text-white text-xl ml-1-0'>pens trade</div>
                </div>
                <div className='lg:flex justify-start text-1-0 lg:text-1-5 items-center mb-1-0 text-line-gray'>
                    <div className='font-bold'>Verifier:</div>
                    <div className='mt-0-6 lg:mt-auto break-words'>{blockInfo.mintaddress}</div>
                </div>
                <div className='flex justify-start text-1-0 lg:text-1-5 items-center text-line-gray '>
                    <div className='font-bold'>Force:</div>
                    <div className=''>{blockInfo.reward}HAH</div>
                </div>
            </div>
        </div>
    )
}

export default BlockCard
