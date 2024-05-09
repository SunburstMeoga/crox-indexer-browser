import React from 'react'

const DetailsCard = () => {
    const detailsItem = [
        { title: 'Transaction Hash:', content: '0x60bce58004a332d2543948c4f82559edb1ff6265fdb46cd61d8f33cde59e1ea7', isLink: true },
        { title: 'From:', content: '0x9d0dd64239920c231ede9bdcd99bcd4716247bb5' },
        { title: 'To:', content: '0x9d0dd64239920c231ede9bdcd99bcd4716247bb5' },
        { title: 'Brc20 Quantity:', content: '10,000' },
        { title: 'Transaction Type:', content: 'Transfer' },
        { title: 'Transaction Hour:', content: '2024-03-26 17:37:18' },

    ]
    return (
        <div>
            <div className='px-1-3 pt-1-4 lg:pb-2-8 lg:pt-3-6 lg:px-2-0 xl:px-6-9 overflow-hidden lg:rounded-2xl bg-white shadow-2xl'>
                <div className='flex justify-start items-end mb-1-4'>
                    <div className='flex justify-start items-start text-title-blue '>
                        <div className='text-2-0 font-light lg:font-semibold'>#</div>
                        <div className='text-3-5 lg:text-4-0 ml-0-5 font-light lg:font-medium cursor-pointer hover:text-blue-500 hover:border-blue-500'>1123112</div>
                    </div>
                    <div className='ml-0-5 font-light lg:font-extrabold text-2-4 lg:text-3-0'>HAH</div>
                </div>
                <div className='lg:hidden w-full h-0-1 bg-black'></div>
                <div className=''>
                    {detailsItem.map((item, index) => {
                        return <div key={index} className={['flex justify-between items-start lg:justify-start lg:items-center py-1-4 lg:py-1-0 xl:py-0-1 xl:h-3-7 text-black  border-trans-line text-1-5', index !== detailsItem.length - 1 ? 'border-b' : ''].join(" ")}>
                            <div className='w-8-3  lg:w-28-9'>{item.title}</div>
                            <div className={['break-words w-12-6 lg:flex-1', item.isLink ? 'underline text-title-blue cursor-pointer hover:text-blue-500 hover:border-blue-500' : ''].join(" ")}>{item.content}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default DetailsCard
