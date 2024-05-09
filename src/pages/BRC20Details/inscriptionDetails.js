import React from 'react'

function InscriptionDetails() {
    let inforList = [{
        title: 'Content length:', content: '56 bytes'
    }, {
        title: 'Content-type:', content: 'text:charset=utf-8'
    }, {
        title: 'Creation height:', content: 15431231
    }, {
        title: 'Creation fee:', content: 194500
    }, {
        title: 'SAT number:', content: 3015645121365
    }, {
        title: 'SAT name:', content: 'HashAhead'
    }, {
        title: 'offset:', content: 0
    }]
    let detailsCard = [{
        title: 'Holder address:', content: 'bc1ppszqn2mh6vm4wu2e83qjrtfwm3wfe6zp94ph259s54dnkg3sr9xs27pqj3', canCopy: true
    }, {
        title: 'Hash:', content: 'f71fa5ab25f763c51b85c5852e31b94d6cd36897278982b209dd3154d9cdde45'
    }, {
        title: 'ID:', content: 'f71fa5ab25f763c51b85c5852e31b94d6cd36897278982b20:0'
    }]
    return (
        <div>
            <div className='flex flex-col justify-start items-center'>
                <div className='w-full relative '>
                    <div className=''>
                        <div className=''>
                            <img src='/images/block-details.png' className='hidden lg:hidden xl:block' alt=''></img>
                            <img src='/images/mobile/block-details.png' className='block lg:hidden' alt=''></img>
                            <img src='/images/pad/block-details.png' className='hidden lg:block xl:hidden' alt=''></img>
                        </div>
                    </div>
                    <div className='absolute top-0-1 w-full flex justify-center items-center h-full'>
                        <div className='pl-2-5 lg:pl-3-3 xl:pl-9-9 w-full text-white font-light lg:font-medium'>
                            <div className='mb-1-8 text-3-0 hidden xl:block'>Blockchain</div>
                            <div className='mb-1-0 mt-2-0 lg:mt-0-1 text-3-0 lg:mb-1-8 lg:text-6-0'>#3452345</div>
                            <div className='text-1-2 lg:text-2-3'>2345345 common</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center lg:min-h-svh bg-primary-green w-full pt-auto lg:pt-2-8'>
                    <div className='w-full pl-9-9 lg:pl-3-3 xl:pl-9-9 mb-2-1 lg:flex justify-start items-center text-3-0 hidden'>
                        <div className='font-bold text-module-title'>Block:</div>
                        <div className='text-title-blue font-medium'>3015645</div>
                    </div>

                    <div className='xl:flex justify-between items-center w-full lg:px-3-3 xl:px-8-0 lg:mb-5-6'>
                        <div className='flex lg:hidden text-2-2 font-medium py-2-0 bg-module-title w-full px-1-6'>
                            <div className='text-white '>Block:</div>
                            <div className='text-primary-green'>3015646</div>
                        </div>
                        <div className='px-1-6 lg:py-2-0 lg:px-3-4 bg-module-title rounded-b-3xl mb-0-4 xl:mb-auto lg:rounded-2xl w-full xl:w-52-0 -mt-0-1 lg:mb-1-0'>
                            {inforList.map((item, index) => {
                                return <div className={['h-4-7 lg:h-4-9 w-full lg:pl-1-1 flex justify-start items-center', index != inforList.length - 1 ? 'border-b  border-trans-gray' : ''].join(' ')}>
                                    <div className='font-semibold text-select-color w-9-0 lg:w-19-7'>{item.title}</div>
                                    <div className='font-medium text-white pl-1-0 lg:pl-2-5 h-full flex justify-start items-center border-l border-trans-gray'>{item.content}</div>
                                </div>
                            })}
                        </div>
                        <div className='flex flex-col justify-between items-center'>
                            {detailsCard.map((item, index) => {
                                return <div className={['px-2-8 -mt-0-1 pt-1-6 lg:py-2-1 bg-module-title w-full xl:w-49-0 h-9-2 lg:h-12-1 lg:rounded-2xl', index !== detailsCard.length - 1 ? 'lg:mb-1-0' : ''].join(" ")}>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='text-1-0 lg:text-1-5 font-semibold text-select-color'>{item.title}</div>
                                        {item.canCopy && <div className=''>
                                            <div className='icon iconfont icon-copy2 text-primary-green cursor-pointer' style={{ fontSize: '2.4rem' }}></div>
                                        </div>}
                                    </div>
                                    <div className='w-full text-white mt-1-2 break-words pb-1-6 lg:pb-0-1 text-1-0 lg:text-1-5 font-medium'>
                                        {item.content}
                                    </div>
                                    {index !== detailsCard.length - 1 && <div className='block lg:hidden bg-line-gray w-full h-0-1'></div>}
                                </div>
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InscriptionDetails
