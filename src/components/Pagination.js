import React from 'react'

const Pagination = () => {
    return (
        <div>
            <div className='flex justify-start items-center'>
                <div className='flex justify-start items-center px-1-6 bg-black font-medium text-1-5 rounded-2xl'>
                    <div className='text-white flex justify-start items-center'>
                        <div className='pr-1-0'>
                            <div className='icon iconfont icon-left1' style={{ fontSize: '30px' }}></div>
                        </div>
                        <div className='pr-2-0'>Prev</div>
                    </div>
                    <div className='border-l border-line-gray w-3-2 h-3-2 flex justify-center items-center text-primary-green '>1</div>
                    <div className='border-l border-line-gray w-3-2 h-3-2 flex justify-center items-center text-primary-green '>2</div>
                    <div className='border-x border-line-gray w-3-2 h-3-2 flex justify-center items-center text-primary-green '>3</div>
                    <div className='text-white flex justify-start items-center'>

                        <div className='px-2-0'>Next</div>
                        <div className=' rotate-180'>
                            <div className='icon iconfont icon-left1 ' style={{ fontSize: '30px' }}></div>
                        </div>
                    </div>
                </div>
                <div className=''></div>
            </div>
        </div>
    )
}

export default Pagination
