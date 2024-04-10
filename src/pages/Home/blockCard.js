import React from 'react'

const BlockCard = ({ blockInfo }) => {
    return (
        <div>
            <div className='p-10 relative bg-card-gray'>
                <div className='absolute right-0 -top-16 z-10'>
                    {/* <img src='/images/link.png' alt=''></img> */}
                    <div className='icon iconfont icon-link' style={{ fontSize: '200px' }}></div>
                </div>
                <div className='flex justify-start items-baseline mb-8'>
                    <div className='text-white text-4xl'>#{blockInfo.height}</div>
                    <div className='text-line-gray text-xl ml-4'>6 minute age</div>
                </div>
                <div className='flex justify-start items-end mb-6'>
                    <div className='text-title-green text-6xl font-bold'>{blockInfo.txcount}</div>
                    <div className='text-white text-xl ml-2'>pens trade</div>
                </div>
                <div className='flex justify-start text-lg items-center mb-4 text-line-gray'>
                    <div className='font-bold'>Verifier:</div>
                    <div className=''>{blockInfo.mintaddress}</div>
                </div>
                <div className='flex justify-start text-lg items-center text-line-gray'>
                    <div className='font-bold'>Force:</div>
                    <div className=''>{blockInfo.reward}HAH</div>
                </div>
            </div>
        </div>
    )
}

export default BlockCard
