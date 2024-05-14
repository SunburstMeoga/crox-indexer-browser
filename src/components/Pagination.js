import React from 'react'

const Pagination = ({ showJump, getPageNumber, paginatioInfo,toPrevPage,toNextPage }) => {
    console.log('paginatioInfo', paginatioInfo)
    const handlePrevPage = () => {
       toPrevPage()
    }
    const handleNextPage = () => {
        toNextPage()
    }
    const handlePageNumber = (pageNumber) => {
        getPageNumber(pageNumber)
    }
    // let pageNumbers = [1,2,3]
    return (
        <div>
            <div className='flex justify-start items-center'>
                <div className={['flex justify-start items-center px-1-6  font-medium text-1-5 rounded-xl', !showJump ? 'bg-primary-green text-menu-black' : 'bg-black text-white'].join(" ")}>
                    <div onClick={() => handlePrevPage()} className='flex justify-start items-center w-8-7 cursor-pointer'>
                        <div className='pr-1-0'>
                            <div className='icon iconfont icon-left1' style={{ fontSize: '30px' }}></div>
                        </div>
                        <div className='' >Prev</div>
                    </div>
                    {paginatioInfo.pageNumbers.map((item, index) => {
                        return <div onClick={() => handlePageNumber(item)} key={index} className={['border-l  border-line-gray w-3-2 h-3-2 flex justify-center items-center text-primary-green cursor-pointer bg-black', index === paginatioInfo.pageNumbers.length - 1 ? 'border-r' : ''].join(" ")}>{ item}</div>
                    //    <div className='border-l  border-line-gray w-3-2 h-3-2 flex justify-center items-center text-primary-green cursor-pointer bg-black'>2</div>
                    //    <div className='border-x  border-line-gray w-3-2 h-3-2 flex justify-center items-center text-primary-green cursor-pointer bg-black'>3</div>
                   })}
                    <div onClick={() => handleNextPage()} className={[' flex justify-end items-center w-8-7 cursor-pointer', !showJump ? 'bg-primary-green text-menu-black' : 'bg-black text-white'].join(" ")}>
                        <div className='' >Next</div>
                        <div className='rotate-180 pl-1-0'>
                            <div className='icon iconfont icon-left1 ' style={{ fontSize: '30px', }}></div>
                        </div>
                    </div>
                </div>
                {showJump && <div className='flex justify-start items-center text-black text-1-5 font-medium ml-1-2'>
                    <div className=''>page</div>
                    <div className='h-3-2 w-4-1 bg-black  rounded-xl flex justify-center items-center text-white mx-1-0'>
                        {paginatioInfo.pagenumber + 1}
                        
                    </div>
                    <div>of 100</div>
                    {/* <div className='h-3-2 w-3-2 bg-black  rounded-xl flex justify-center items-center text-primary-green ml-1-0'>Go</div> */}
                </div>}

            </div>
        </div>
    )
}

export default Pagination
