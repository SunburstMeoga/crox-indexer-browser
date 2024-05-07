import React, { useState } from 'react'

function Search() {
    let [showSelect, toggleSelect] = useState(false)
    const handleSelect = () => {
        toggleSelect(showSelect = !showSelect)
    }
    return (
        <div>
            <div className='text relative'>
                <div className='min-h-screen  absolute -z-10'>
                    <img src='/images/pc/search-bg.png' alt='' ></img>
                </div>
                <div className='flex flex-col w-full min-h-screen justify-start items-center '>
                    <div className='w-23-0 mt-11-4'>
                        <img src='/images/pc/logo-black.png' alt=''></img>
                    </div>
                    <div className='w-70-4 rounded-full bg-white py-1-2 px-1-7 mt-3-2 flex justify-between items-center'>
                        <div className='text-line-gray font-medium text-2-0 flex justify-start items-center relative cursor-pointer' onClick={() => handleSelect()}>
                            <div className='pr-1-0 font-medium'>Brc-20</div>
                            <div className='icon iconfont icon-down1 pr-1-0 text-down-icon'></div>
                            <div className='w-0-1 h-2-0 bg-search-border'></div>
                        </div>
                        {showSelect && <div className='absolute w-22-5 px-2-4 bg-black-0.58 backdrop-blur-md text-select-item rounded-xl text-2-0 top-28-0 font-bold' onMouseLeave={() => handleSelect()}>
                            <div className='py-1-2 cursor-pointer hover:text-white'>picture</div>
                            <div className='py-1-2 cursor-pointer hover:text-white'>text</div>
                            <div className='py-1-2 cursor-pointer hover:text-white'>video</div>
                            <div className='py-1-2 cursor-pointer hover:text-white'>Audio</div>
                            <div className='py-1-2 cursor-pointer hover:text-white'>Block Chain</div>
                            <div className='py-1-2 cursor-pointer hover:text-white'>Transaction Hash</div>
                        </div>}
                        <div className='flex-1 pl-1-0'>
                            <input className='w-full h-full'></input>
                        </div>
                        <div className='flex justify-center items-center cursor-pointer'>
                            <div className='icon iconfont icon-search text-black' style={{ fontSize: '2rem' }}></div>
                        </div>
                    </div>
                    <div className='mt-1-9 text-2-0 text-black'>
                        Among the <span className='text-title-blue'>4231354</span> records, search for "Hash" and found <span className='text-title-blue'>100</span> results
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
