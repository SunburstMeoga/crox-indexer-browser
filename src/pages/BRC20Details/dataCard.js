import React from 'react'

const DataCard = ({ title, quantities, showUnit }) => {
    return (
        <div className='w-full text-ellipsis module-title'>
            <div className='py-6 pl-12'>
                <div className='mb-6 text-xl'>{title}</div>
                <div className='flex justify-start items-baseline'>
                    <div className='text-6xl font-black pop-bold'>
                        {quantities}
                    </div>
                    {showUnit && <div className='text-xl'>million</div>}

                </div>
            </div>
        </div>
    )
}

export default DataCard
