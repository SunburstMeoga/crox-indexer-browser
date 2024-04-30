import React from 'react'

const BlockCard = ({ blockInfo }) => {
    return (
        <div className=''>
            <div className='px-4-3 py-3-4 relative bg-card-gray'>
                <div className='absolute right-0-1 top-0-1 z-10'>
                    {/* <img src='/images/link.png' alt=''></img> */}
                    <div className='icon iconfont icon-link' style={{ fontSize: '200px' }}></div>
                </div>
                <div className='flex justify-start items-baseline mb-1-9 font-medium'>
                    <div className='text-white text-2-5'>#{blockInfo.height}</div>
                    <div className='text-line-gray ml-1-8 text-1-3 font-medium'>6 minute age</div>
                </div>
                <div className='flex justify-start items-end mb-1-8'>
                    <div className='text-title-green text-6xl font-bold'>{blockInfo.txcount}</div>
                    <div className='text-white text-xl ml-1-0'>pens trade</div>
                </div>
                <div className='flex justify-start text-1-5 items-center mb-1-0 text-line-gray'>
                    <div className='font-bold'>Verifier:</div>
                    <div className=''>{blockInfo.mintaddress}</div>
                </div>
                <div className='flex justify-start text-1-5 items-center text-line-gray '>
                    <div className='font-bold'>Force:</div>
                    <div className=''>{blockInfo.reward}HAH</div>
                </div>
            </div>
        </div>
    )
}

export default BlockCard
