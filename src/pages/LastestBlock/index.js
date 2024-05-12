import React, { useEffect, useState } from 'react'
import PageSize from '@/components/PageSize'
import Pagination from '../../components/Pagination';
import DataTable from '@/components/DataTable'
import { getListBlock } from '@/api/homeApi';

const LastestBlock = () => {

  const titleColumnsData = [
    { title: 'Block Number', titleWidth: 'w-24', colWidth: 'w-7-4  lg:w-8-0', canCopy: false, flag: 'number' },
    { title: 'Block Height', titleWidth: 'w-24', colWidth: 'w-7-4 lg:w-8-0', canCopy: false, flag: 'height' },
    { title: 'Block Timeslot', titleWidth: 'w-24', colWidth: 'w-7-4 lg:w-8-0', canCopy: false, flag: 'slot' },
    { title: 'Block Hash', titleWidth: '', colWidth: 'w-15-4 mr-2-0 lg:pr-0-1 lg:w-15-2', canCopy: true, filterAddress: true, flag: 'hash' },
    { title: 'Verify Address', titleWidth: '', colWidth: 'w-25-4 lg:pr-0-1 lg:w-24-1', canCopy: true, flag: 'mintaddress' },
    { title: 'Block Teward', titleWidth: '', colWidth: 'w-7-4 lg:w-14-4', canCopy: false, flag: 'reward' },
    { title: 'Number Of Transactions', titleWidth: '', colWidth: 'w-10-4 lg:pr-0-1 lg:w-9-6', canCopy: false, flag: 'txcount' },
    { title: 'Inscription Trading', titleWidth: '', colWidth: 'w-8-4 lg:w-9-9', canCopy: false, flag: 'txcount' },

    { title: 'Time', titleWidth: '', colWidth: 'w-10-2', canCopy: false, flag: 'time' }]
  let [dataColumns, changeDataColumns] = useState([])
  useEffect(() => {
    fetchListBlock()
  }, [])
  const fetchListBlock = async () => {
    try {
      const listblock = await getListBlock({ "jsonrpc": "2.0", "method": "listblock", "params": { "fork": "202", "pagesize": 10, }, "id": 83 })
      console.log(listblock)
      changeDataColumns(dataColumns = listblock.data.result)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='bg-primary-green w-full min-h-svh '>
      <div className='w-full flex flex-col justify-start items-center '>
        <div className='font-light lg:font-bold py-2-5 lg:py-0-1 module-title cursor-pointer pl-1-3 lg:pl-5-9 w-full lg:mt-5-5 text-4-0 lg:text-8-0'>
          Latest Block
        </div>
        <div className='w-full hidden lg:flex justify-end pr-7-8 mb-0-7 '>
          <PageSize />
        </div>
        <div className='lg:px-3-0 w-full lg:mb-3-3'>
          <div className='bg-white w-full lg:rounded-3xl lg:pt-1-7 shadow-2xl relative overflow-x-hidden'>
            <div className='absolute -right-1-5 top-1-6 more-arrow h-3-0 w-3-0 rounded-full flex justify-start items-center text-white z-10 lg:hidden'>
              <div className='icon iconfont icon-right ml-0-5' style={{ fontSize: '20px' }}></div>
            </div>
            <DataTable titleColumns={titleColumnsData} dataColumns={dataColumns} />
          </div>
        </div>

        <div className='w-full hidden lg:flex justify-end mb-7-0 pr-7-8'>
          {/* <Pagination showJump /> */}
        </div>
      </div>
    </div>
  )
}

export default LastestBlock
