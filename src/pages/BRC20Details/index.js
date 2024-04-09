import React from 'react'
import DataCard from './dataCard'
const BRC20Details = () => {
    const cardList = [
        { title: 'Total Amount', quantities: '21' },
        { title: 'Casting Quantity', quantities: '30,000' },
        { title: 'Single Casting Limit', quantities: '1,000' },
        { title: 'Decimal Precision', quantities: '18' },
        { title: 'Number Of Holders', quantities: '9132' },
        { title: 'Total Transaction Volume', quantities: '12588' },
    ]
    const detailsList = [
        { title: 'Deployed by:', content: 'bc1qh4jesszps4g5gjfw5aayv0sf4pekc4pu8s762e' },
        { title: 'Inscription Starting Nunber:', content: '#15676132' },
        { title: 'End Number Of Inscription:', content: '#15676132' }

    ]
    return (
        <div>
            <div className='bg-primary-green w-full flex flex-col items-center justify-start min-h-svh'>
                <div className='w-11/12 flex justify-start items-baseline text-module-title'>
                    <div className='font-bold pop-bold module-title '>
                        HAH
                    </div>
                    <div className='ml-4'>2023-4-30 23:45:02</div>
                </div>
                <div className='w-11/12 grid grid-cols-3 gap-6 mb-6'>
                    {cardList.map((item, index) => {
                        return <div class="rounded-xl overflow-hidden easy-out bg-card-green duration-300 hover:text-primary-green hover:bg-black hover:shadow-2xl">
                            <DataCard title={item.title} showUnit={index === 0} quantities={item.quantities} />
                        </div>
                    })}
                </div>
                <div className='w-11/12 rounded-xl overflow-hidden bg-module-title flex flex-col justify-start items-center py-1'>
                    {detailsList.map((item, index) => {
                        return <div className={['pl-6 py-4 text-select-color flex justify-start items-center', index !== detailsList.length - 1 ? 'border-b border-select-color' : ''].join(" ")} style={{ width: '97%' }} >
                            <div className='bg-select-color w-2 h-2'></div>
                            <div className='pl-6'>{item.title} {item.content}</div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default BRC20Details
