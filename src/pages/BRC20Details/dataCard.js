import React from 'react'

const DataCard = ({ title, quantities, showUnit }) => {
    return (
        <div className='w-full'>
            <div className=''>
                <div className='mb-2-8 text-1-5 '>{title}</div>
                <div className='flex justify-start items-baseline'>
                    <div className='text-6-0 font-bold'>
                        {quantities}
                    </div>
                    {/* {showUnit && <div className='text-2-4'>million</div>} */}

                </div>
            </div>
        </div>
    )
}

export default DataCard
