import React, { useState } from 'react'

const PageSize = () => {
    let pageSizes = [{ value: 5, title: '5 / page' }, { value: 10, title: '10 / page' }, { value: 15, title: '15 / page' }, { value: 20, title: '20 / page' }, { value: 25, title: '25 / page' }, { value: 50, title: '50 / page' }, { value: 75, title: '75 / page' }, { value: 100, title: '100 / page' }]
    let [pageSize, setPageSize] = useState(5)
    let [showPageSize, togglePageSize] = useState(false)
    let [mouseEnterItem, setMouseEnterItem] = useState(0)

    const handlePageSize = (item) => {
        setPageSize(pageSize = item.value)
        handleTogglePageSize()
    }

    const handleTogglePageSize = () => {
        togglePageSize(showPageSize = !showPageSize)
    }

    const changeMouseEnterItem = (index) => {
        setMouseEnterItem(mouseEnterItem = index)
    }
    return (
        <div>
            <div className='relative'>
                <div className='flex justify-center items-center px-1-4 py-0-9 bg-black rounded-lg text-white'
                    onClick={() => handleTogglePageSize()}>
                    <div className='flex justify-end items-center text-1-5'>
                        <div className=''>
                            显示数量：
                        </div>
                        <div className='text-right'>
                            {pageSize}
                        </div>
                    </div>
                    <div className='bg-line-gray h-1-7 mx-1-0 w-0-1'></div>
                    <div className='flex cursor-pointer'>
                        <div className='icon iconfont icon-down'></div>
                    </div>
                </div>
                {showPageSize &&
                    <div className='absolute w-full px-2 top-11 rounded-lg bg-black-0.58 backdrop-blur-md flex flex-col items-center'
                        onMouseLeave={() => handleTogglePageSize()}>
                        {pageSizes.map((item, index) => {
                            return <div
                                onClick={() => handlePageSize(item)}
                                onMouseEnter={() => changeMouseEnterItem(index)}
                                key={index}
                                className={[
                                    'text-center py-0-9 cursor-pointer w-11/12 ',
                                    pageSize === item.value ? 'text-white font-bold' : 'text-select-color',
                                    mouseEnterItem === index ? 'text-white font-bold' : 'text-select-color',
                                ].join(" ")} >
                                {item.value}
                            </div>
                        })}
                    </div>}
            </div>
        </div>
    )
}

export default PageSize
