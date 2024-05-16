import React from 'react'

const Pagination = ({ showJump, getPageNumber, paginatioInfo, toPrevPage, toNextPage,toFirstPage,toLastPage, onChange,inputValue,toPage }) => {
    // console.log('paginatioInfo', paginatioInfo.pageNumbers)

    const handlePrevPage = () => {
        toPrevPage()
    }
    const handleNextPage = () => {
        toNextPage()
    }
    const handlePageNumber = (pageNumber) => {
        getPageNumber(pageNumber)
    }
    const handleFirstPage = () => {
        toFirstPage()
    }
    const handleLastPage = () => {
        toLastPage()
    }
    const jumpPage = () => {
        toPage()
    }
    const handleInputChange = (event) => {
        // 获取输入框的新值
        const newValue = Number(event.target.value)
        // 调用父组件传递过来的回调函数，将新值传递给父组件
        onChange(newValue);
        // console.log(newValue)
      };
    // let pageNumbers = [1,2,3]
    return (
        <div>
            <div className='flex justify-between items-center w-full '>
                <div className={['flex justify-start items-center font-medium text-1-5 rounded-xl overflow-hidden', !showJump ? 'bg-primary-green text-menu-black' : 'bg-black text-white'].join(" ")}>
                    <div onClick={() => handleFirstPage()} className='flex justify-start items-center w-3-2 h-3-2 cursor-pointer'>
                        <div className='w-3-2 h-3-2 flex justify-center items-center text-white cursor-pointer border-r  border-line-gray  bg-black'>
                            <div className='icon iconfont icon-youshuangjiantou rotate-180' style={{ fontSize: '20px' }}></div>
                        </div>
                    </div>
                    <div onClick={() => handlePrevPage()} className='flex justify-start items-center w-3-2 h-3-2 cursor-pointer'>
                        <div className='w-3-2 h-3-2 flex justify-center items-center text-white cursor-pointer bg-black'>
                            <div className='icon iconfont icon-left1' style={{ fontSize: '30px' }}></div>
                        </div>
                    </div>
                    {paginatioInfo.pageNumbers.map((item, index) => {
                        return <div onClick={() => handlePageNumber(item)} key={index} className={['border-l  border-line-gray px-1-0 h-3-2 flex justify-center items-center  cursor-pointer bg-black', item === paginatioInfo.pagenumber + 1 ? 'text-primary-green' : 'text-trans-gray', index === paginatioInfo.pageNumbers.length - 1 ? 'border-r' : ''].join(" ")}>{item}</div>
                    })}
                    <div onClick={() => handleNextPage()} className={[' flex justify-end items-center w-3-2 h-3-2 cursor-pointer', !showJump ? 'bg-primary-green text-menu-black' : 'bg-black text-white'].join(" ")}>
                        <div className='w-3-2 h-3-2 flex justify-center items-center text-white cursor-pointer bg-black'>
                            <div className='icon iconfont icon-left1 rotate-180' style={{ fontSize: '30px' }}></div>
                        </div>
                    </div>
                    <div onClick={() => handleLastPage()} className='flex justify-start items-center w-3-2 h-3-2 border-l  border-line-gray  cursor-pointer'>
                        <div className='w-3-2 h-3-2 flex justify-center items-center text-white cursor-pointer bg-black'>
                            <div className='icon iconfont icon-youshuangjiantou ' style={{ fontSize: '20px' }}></div>
                        </div>
                    </div>
                </div>
                {showJump && <div className='flex justify-start items-center text-black text-1-5 font-medium ml-4-2'>
                    <div className=''>page</div>
                    <div className='h-3-2 w-4-1 bg-black rounded-xl flex justify-center items-center text-white mx-1-0'>
                        <input className='bg-black text-center w-full h-full rounded-xl text-primary-green'  onChange={handleInputChange}  value={inputValue}></input>
                    </div>
                    <div>of { paginatioInfo.totalpagecount}</div>
                    <div onClick={() => jumpPage()} className='h-2-3 w-5-0 text-black rounded-full flex justify-center items-center bg-btn-green ml-1-0 cursor-pointer'>Go</div>
                </div>}
            </div>
        </div>
    )
}

export default Pagination
