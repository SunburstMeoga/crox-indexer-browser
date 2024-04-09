import React, { useState } from 'react'
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
    const dataTypes = [
        { title: 'Holder', vlaue: 0 },
        { title: 'Transfer', vlaue: 1 }
    ]
    let [cuerrentType, changeType] = useState(0)
    const handleDataType = (item, index) => {
        changeType(cuerrentType = index)
    }

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
                        return <div class="rounded-xl overflow-hidden ease-in-out bg-card-green duration-300 hover:text-primary-green hover:bg-black hover:shadow-2xl">
                            <DataCard title={item.title} showUnit={index === 0} quantities={item.quantities} />
                        </div>
                    })}
                </div>
                <div className='w-11/12 rounded-xl overflow-hidden bg-module-title flex flex-col justify-start items-center py-2 mb-6'>
                    {detailsList.map((item, index) => {
                        return <div className={['pl-6 py-4 text-select-color flex justify-start items-center', index !== detailsList.length - 1 ? 'border-b border-select-color' : ''].join(" ")} style={{ width: '97%' }} >
                            <div className='bg-select-color w-2 h-2'></div>
                            <div className='pl-6'>{item.title} {item.content}</div>
                        </div>
                    })}

                </div>
                <div className='w-11/12 rounded-xl overflow-hidden bg-module-title flex flex-col justify-start items-center py-2'>
                    <div className='flex justify-start items-center w-full pl-12 pt-4'>
                        {dataTypes.map((item, index) => {
                            return <div
                                onClick={() => handleDataType(item, index)}
                                className={['text-select-color', index === 0 ? 'mr-20' : ''].join(" ")}>
                                <div className={['font-bold text-3xl mb-1 cursor-pointer ease-in-out duration-300 hover:text-title-green', cuerrentType === index ? "text-title-green" : ""].join(" ")}>{item.title}</div>
                                <div className={['h-0.5  ease-in-out duration-300', cuerrentType === index ? "bg-title-green w-full" : "bg-transparent w-0"].join(" ")}></div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BRC20Details
