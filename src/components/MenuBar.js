import React, { useState } from 'react'
const MenuBar = () => {
    let languages = [{ title: 'Eng' }, { title: '繁体' }]
    let [currentLange, setLanguage] = useState(0)

    const handleLanguage = (index) => {
        setLanguage(currentLange = index)
    }

    return (
        <div className='w-full bg-menu-black flex justify-center items-center py-4'>
            <div className='w-11/12 flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    <div className='w-40'>
                        <img className='' alt='' src='/images/word-logo.png'></img>
                    </div>
                    <div className='bg-line-gray h-5 ml-4 w-0.5 mt-2'></div>
                    <div className='ml-4 text-title-green  text-xl mt-2'>Indexer </div>
                </div>

                <div className='flex justify-end items-center '>
                    <div className='mr-4 bg-line-gray rounded-full border border-search-line w-64 px-3'>
                        <div className='flex justify-between items-center bg-line-gray rounded-full text-search-gray '>
                            <div className='h-8'>
                                <input className='bg-transparent outline-none rounded-full w-full h-full text-xl'></input>
                            </div>
                            <div className='flex justify-items-center'>
                                <div className='icon iconfont icon-search'></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end items-center'>
                        {languages.map((item, index) => {
                            return <div onClick={() => handleLanguage(index)} key={index} className={[
                                'cursor-pointer',
                                'text-lg',
                                'w-14',
                                'text-right',
                                index === currentLange ? 'text-title-green font-extrabold' : 'text-word-gray font-normal'
                            ].join(' ')}>{item.title}</div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar
