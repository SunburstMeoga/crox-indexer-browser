import React from 'react'

const DataCard = ({ title, quantities, unit, cardStatus }) => {

    return (
        <div className='w-full h-10-0'>
            <div className=''>
                <div className='mb-2-8 text-1-5 '>{title}</div>
                <div className='flex justify-start items-baseline'>
                    {!cardStatus && <div className='text-6-0 font-bold'>
                        {quantities}
                    </div>}

                    {unit && <div className='text-2-4'>{unit}</div>}
                    {cardStatus && <div className='flex justify-start items-center'>
                        <div className='w-5-5'>
                            <img src='/images/pc/success.png'></img>
                        </div>
                        <div className='text-3-0 font-bold pl-1-3'>
                            Success
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default DataCard
