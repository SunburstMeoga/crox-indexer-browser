import React from 'react'

const DetailsCard = () => {
    const detailsItem = [
        { title: 'Brc20 Transaction Hash', content: '0x60bce58004a332d2543948c4f82559edb1ff6265fdb46cd61d8f33cde59e1ea7', isLink: true },
        { title: 'From', content: '0x9d0dd64239920c231ede9bdcd99bcd4716247bb5' },
        { title: 'To', content: '0x9d0dd64239920c231ede9bdcd99bcd4716247bb5' },
        { title: 'Brc20 Quantity', content: '10,000' },
        { title: 'Transaction Type', content: 'Transfer' },
        { title: 'Transaction Hour', content: '2024-03-26 17:37:18' },

    ]
    return (
        <div>
            <div className='pb-2-8 pt-3-6 px-6-9 overflow-hidden rounded-2xl bg-white shadow-2xl'>
                <div className='flex justify-start items-end mb-1-4'>
                    <div className='flex justify-start items-start text-title-blue '>
                        <div className='text-2-0 font-semibold'>#</div>
                        <div className='text-4-0 ml-0-5 font-medium cursor-pointer hover:text-blue-500 hover:border-blue-500'>1123112</div>
                    </div>
                    <div className='ml-0-5 font-extrabold text-3-0'>HAH</div>
                </div>
                <div className=''>
                    {detailsItem.map((item, index) => {
                        return <div key={index} className='flex justify-start items-center h-3-7 text-black border-b border-trans-line text-1-5'>
                            <div className='w-28-9'>{item.title}</div>
                            <div className={['', item.isLink ? 'underline text-title-blue cursor-pointer hover:text-blue-500 hover:border-blue-500' : ''].join(" ")}>{item.content}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default DetailsCard
