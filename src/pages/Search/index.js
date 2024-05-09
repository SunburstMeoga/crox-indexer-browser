import React, { useState } from 'react'

function Search() {
    let [showSelect, toggleSelect] = useState(false)
    const handleSelect = () => {
        toggleSelect(showSelect = !showSelect)
    }
    return (
        <div>
            <div className='text relative'>
                <div className='xl:min-h-screen  absolute z-10'>
                    <img src='/images/pc/search-bg.png' alt='' className='hidden xl:block'></img>
                    <img src='/images/mobile/search-bg.png' alt='' className='xl:hidden'></img>
                    {/* <img src='/images/pc/search-bg.png' alt='' ></img> */}
                </div>
                <div className='flex flex-col w-full xl:min-h-screen justify-start items-center relative z-20'>
                    <div className='w-10-5 mt-3-9 lg:w-16-4 xl:w-23-0 xl:mt-11-4'>
                        <img src='/images/pc/logo-black.png' alt=''></img>
                    </div>
                    <div className='w-20-8 py-0-6 px-1-0 lg:w-54-3 xl:w-70-4 rounded-full bg-white lg:py-1-5 lg:px-2-0 xl:py-1-2 xl:px-1-7 mt-2-8 xl:mt-3-2 flex justify-between items-center'>
                        <div className='text-line-gray font-medium text-1-0 lg:text-2-0 flex justify-start items-center relative cursor-pointer' onClick={() => handleSelect()}>
                            <div className='pr-0-4 xl:pr-1-0 font-medium'>Brc-20</div>
                            <div className='icon iconfont icon-down1 pr-0-4 xl:pr-1-0 text-down-icon hidden lg:block'></div>
                            <div className='icon iconfont icon-down1 pr-0-4 xl:pr-1-0 text-down-icon block xl:hidden' style={{fontSize: '10px'}}></div>

                            <div className='w-0-1 h-1-4 lg:h-2-4 xl:h-2-4 bg-search-border'></div>
                        </div>
                        {showSelect && <div className='absolute xl:w-22-5 xl:px-2-4 bg-black-0.58 backdrop-blur-md text-select-item rounded-xl text-1-0 top-14-0 px-1-0 lg:text-1-6 lg:top-18-0 lg:px-2-0 xl:text-2-0 xl:top-28-0 font-bold' onMouseLeave={() => handleSelect()}>
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
                            <div className='icon iconfont icon-search text-black hidden lg:block' style={{ fontSize: '2rem' }}></div>
                            <div className='icon iconfont icon-search text-black lg:hidden' style={{ fontSize: '1rem' }}></div>

                        </div>
                    </div>
                    <div className='mt-1-9 w-19-4 lg:w-full text-1-0 lg:text-1-5 xl:text-2-0 text-black text-center'>
                        Among the <span className='text-title-blue'>4231354</span> records, search for "Hash" and found <span className='text-title-blue'>100</span> results
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
