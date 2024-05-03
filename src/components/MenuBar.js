import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const MenuBar = () => {
    const navigate = useNavigate()
    let languages = [{ title: 'Eng' }, { title: '繁体' }]
    let [currentLange, setLanguage] = useState(0)

    const handleLanguage = (index) => {
        setLanguage(currentLange = index)
    }

    return (
        <div className='w-full bg-menu-black flex justify-center items-center lg:pt-1-4 lg:pb-1-0 lg:px-2-7'>
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    <div className='lg:w-12-0 cursor-pointer' onClick={() => { navigate('/') }}>
                        <img className='' alt='' src='/images/word-logo.png'></img>
                    </div>
                    <div className='bg-line-gray lg:h-2-0 lg:ml-1-2 w-0-1'></div>
                    <div className='flex justify-start items-baseline'>
                        <div className='text-title-green  lg:ml-1-6 lg:text-2-0'>Indexer </div>
                        <div className='text-red-500 text-xs font-extralight ml-1 '>(Test Net)</div>
                    </div>
                </div>
                <div className='flex justify-end items-center'>
                    <div className='bg-line-gray rounded-full border border-search-line lg:w-21-4 lg:mr-2-0'>
                        <div className='flex justify-between items-center bg-line-gray rounded-full text-search-gray '>
                            <div className='h-2-5 ml-1-0'>
                                <input className='bg-transparent outline-none rounded-full w-full h-full'></input>
                            </div>
                            <div className='flex justify-items-center mr-1-0'>
                                <div className='icon iconfont icon-search'></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center lg:w-7-9'>
                        {languages.map((item, index) => {
                            return <div onClick={() => handleLanguage(index)} key={index} className={[
                                'cursor-pointer',
                                'lg:text-1-5',
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
