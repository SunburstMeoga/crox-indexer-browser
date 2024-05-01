import React from 'react'

const Pagination = () => {
    return (
        <div>
            <div className='flex justify-start items-center'>
                <div className='flex justify-start items-center px-1-6 bg-black font-medium text-1-5 rounded-xl'>
                    <div className='text-white flex justify-start items-center w-8-7 cursor-pointer'>
                        <div className='pr-1-0'>
                            <div className='icon iconfont icon-left1' style={{ fontSize: '30px' }}></div>
                        </div>
                        <div className=''>Prev</div>
                    </div>
                    <div className='border-l border-line-gray w-3-2 h-3-2 flex justify-center items-center text-primary-green cursor-pointer'>1</div>
                    <div className='border-l border-line-gray w-3-2 h-3-2 flex justify-center items-center text-primary-green cursor-pointer'>2</div>
                    <div className='border-x border-line-gray w-3-2 h-3-2 flex justify-center items-center text-primary-green cursor-pointer'>3</div>
                    <div className='text-white flex justify-end items-center w-8-7 cursor-pointer'>
                        <div className=''>Next</div>
                        <div className='rotate-180 pl-1-0'>
                            <div className='icon iconfont icon-left1 ' style={{ fontSize: '30px' }}></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start items-center text-black text-1-5 font-medium ml-1-2'>
                    <div className=''>page</div>
                    <div className='h-3-2 w-4-1 bg-black  rounded-xl flex justify-center items-center text-white mx-1-0'>
                        <input className='h-3-0 w-full bg-transparent border-none text-center text-white' placeholder="23"></input>
                    </div>
                    <div>of 100</div>
                    <div className='h-3-2 w-3-2 bg-black  rounded-xl flex justify-center items-center text-primary-green ml-1-0'>Go</div>
                </div>
            </div>
        </div>
    )
}

export default Pagination
