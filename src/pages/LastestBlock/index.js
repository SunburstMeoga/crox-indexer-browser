import React, { useEffect, useState } from 'react'
import PageSize from '@/components/PageSize'
import Pagination from '../../components/Pagination';
import DataTable from '@/components/DataTable'
import { getListBlock } from '@/api/homeApi';
import TableLoading from '../../components/TableLoading';
const LastestBlock = () => {

  const titleColumnsData = [
    { title: 'Block Number', titleWidth: 'w-24', colWidth: 'w-7-4  lg:w-8-0', canCopy: false, flag: 'number' },
    { title: 'Block Height', titleWidth: 'w-24', colWidth: 'w-7-4 lg:w-8-0', canCopy: false, flag: 'height' },
    { title: 'Block Timeslot', titleWidth: 'w-24', colWidth: 'w-7-4 lg:w-8-0', canCopy: false, flag: 'slot' },
    { title: 'Block Hash', titleWidth: '', colWidth: 'w-15-4 mr-2-0 lg:pr-0-1 lg:w-15-2', canCopy: true, filterAddress: true, flag: 'hash' },
    { title: 'Verify Address', titleWidth: '', colWidth: 'w-25-4 lg:pr-0-1 lg:w-24-1', canCopy: true, flag: 'mintaddress' },
    { title: 'Block Teward', titleWidth: '', colWidth: 'w-7-4 lg:w-14-4', canCopy: false, flag: 'reward' },
    { title: 'Number Of Transactions', titleWidth: '', colWidth: 'w-10-4 lg:pr-0-1 lg:w-9-6', canCopy: false, flag: 'txcount' },
    { title: 'Inscription Trading', titleWidth: '', colWidth: 'w-8-4 lg:w-9-9', canCopy: false, flag: 'brc20count' },
    { title: 'Time', titleWidth: '', colWidth: 'w-10-2', canCopy: false, flag: 'time' }]
  let [dataColumns, changeDataColumns] = useState([])
  let [blockListPagination, changeBlockListPagination] = useState({})
  let [loading,changeLoading] = useState(false)
  useEffect(() => {
    fetchListBlock(0)
  }, [])
  const fetchListBlock = async (targetPageNumber) => {
    console.log(targetPageNumber)
    changeLoading(loading = true)
    try {
      const listblock = await getListBlock({ "jsonrpc": "2.0", "method": "listblock", "params": { "fork": "202", "pagesize": 10, pagenumber: targetPageNumber || 0 }, "id": 83 })
      console.log(listblock)
      const { pagenumber, pagesize, totalpagecount, totalrecordcount } = listblock.data.result
      changeDataColumns(dataColumns = listblock.data.result.datalist)
      let pageCountArr = []
      if (pagenumber <= 2) {
        // pageCountArr = [pagenumber - 2, pagenumber - 1, pagenumber + 1, pagenumber + 2, pagenumber + 3]
        pageCountArr = [1,2,3,4,5]
      } else {
        pageCountArr = [pagenumber - 1, pagenumber, pagenumber + 1, pagenumber + 2, pagenumber + 3]
      }
      if (pagenumber === totalpagecount - 1) {
        console.log('afsdf')
        pageCountArr = [pagenumber - 3, pagenumber - 2, pagenumber - 1,pagenumber,pagenumber + 1]
      }
      let obj = {
        pagenumber,
        pagesize, totalpagecount, totalrecordcount, pageNumbers: pageCountArr
      }
      changeBlockListPagination(blockListPagination = obj)
    } catch (err) {
      console.log(err)
      changeLoading(loading = false)
    }
    changeLoading(loading = false)
  }
  //点击分页器某个页数
  const handlePageNumber = (pageNumber) => {
    console.log('click page numnber', pageNumber)
    fetchListBlock(pageNumber - 1)

  }
  //点击上一页
  const handlePrevPage = () => {
    console.log('上一页', blockListPagination.pagenumber - 1)
    if (blockListPagination.pagenumber <= 0) return
    fetchListBlock(blockListPagination.pagenumber - 1)

  }
  //点击下一页
  const handleNextPage = () => {
    console.log('下一页', blockListPagination.pagenumber)
    if (blockListPagination.pagenumber >= Math.floor(blockListPagination.totalrecordcount / blockListPagination.totalpagecount)) return
    fetchListBlock(blockListPagination.pagenumber + 1)
  }
  //点击第一页
  const handleFirstPage = () => {
    console.log('first page')
    fetchListBlock(0)
  }
  //点击最后一页
  const handleLastPage = () => {
    console.log('last page')
    fetchListBlock(blockListPagination.totalpagecount - 1)
  }
  return (
    <div className='bg-primary-green w-full min-h-svh '>
      <div className='w-full flex flex-col justify-start items-center '>
        <div className='font-light lg:font-bold py-2-5 lg:py-0-1 module-title cursor-pointer pl-1-3 lg:pl-5-9 w-full lg:mt-5-5 text-4-0 lg:text-8-0'>
          Latest Block
        </div>
        <div className='w-full hidden lg:flex justify-end pr-7-8 mb-0-7 '>
          {/* <PageSize /> */}
        </div>
        
        <div className='lg:px-3-0 w-full lg:mb-3-3'>
          <div className='bg-white w-full lg:rounded-3xl lg:pt-1-7 shadow-2xl relative overflow-x-hidden'>
            <div className='absolute -right-1-5 top-1-6 more-arrow h-3-0 w-3-0 rounded-full flex justify-start items-center text-white z-10 lg:hidden'>
              <div className='icon iconfont icon-right ml-0-5' style={{ fontSize: '20px' }}></div>
            </div>
            {!loading && <DataTable titleColumns={titleColumnsData} dataColumns={dataColumns} />}
            {loading && <TableLoading></TableLoading>}
          </div>
        </div>

        <div className='w-full hidden lg:flex justify-end mb-7-0 pr-7-8'>
          {dataColumns.length !== 0 && <Pagination showJump getPageNumber={handlePageNumber} paginatioInfo={blockListPagination} toPrevPage={handlePrevPage} toNextPage={handleNextPage} toFirstPage={handleFirstPage} toLastPage={handleLastPage} />}
        </div>
      </div>
    </div>
  )
}

export default LastestBlock
