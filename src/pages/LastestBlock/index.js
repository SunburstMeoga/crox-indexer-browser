import React, { useEffect, useState } from 'react'
import PageSize from '@/components/PageSize'
import Pagination from '../../components/Pagination';
import DataTable from '@/components/DataTable'
import { getListBlock } from '@/api/homeApi';

const LastestBlock = () => {
  const titleColumnsData = [
    { title: 'Block Number', titleWidth: 'w-24', colWidth: 'w-8-0', canCopy: false, flag: 'number' },
    { title: 'Block Height', titleWidth: 'w-24', colWidth: 'w-8-0', canCopy: false, flag: 'height' },
    { title: 'Block Timeslot', titleWidth: 'w-24', colWidth: 'w-8-0', canCopy: false, flag: 'slot' },
    { title: 'Block Hash', titleWidth: '', colWidth: 'w-15-2', canCopy: true, filterAddress: true, flag: 'hash' },
    { title: 'Verify Address', titleWidth: '', colWidth: 'w-24-1', canCopy: true, flag: 'mintaddress' },
    { title: 'Block Teward', titleWidth: '', colWidth: 'w-14-4', canCopy: false, flag: 'reward' },
    { title: 'Number Of Transactions', titleWidth: '', colWidth: 'w-9-6', canCopy: false, flag: 'txcount' },
    { title: 'Inscription Trading', titleWidth: '', colWidth: 'w-9-9', canCopy: false, flag: 'txcount' },

    { title: 'Time', titleWidth: '', colWidth: 'w-12-2', canCopy: false, flag: 'time' }]
  let [dataColumns, changeDataColumns] = useState([])
  useEffect(() => {
    fetchListBlock()
  }, [])
  const fetchListBlock = async () => {
    try {
      const listblock = await getListBlock({ "jsonrpc": "2.0", "method": "listblock", "params": { "fork": "202" }, "pagesize": 100, "id": 83 })
      console.log(listblock)
      changeDataColumns(dataColumns = listblock.data.result)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='bg-primary-green w-full min-h-svh '>
      <div className='w-full flex flex-col justify-start items-center '>
        <div className='font-bold  module-title cursor-pointer pl-5-9 w-full mt-5-5 text-8-0'>
          Latest Block
        </div>
        <div className='w-10/12 flex justify-end mb-0-7'>
          <PageSize />
        </div>
        <div className='px-3-0 w-full mb-3-3'>
          <div className='bg-white w-full rounded-3xl pt-1-7 shadow-2xl'>
            <DataTable titleColumns={titleColumnsData} dataColumns={dataColumns} />
          </div>
        </div>

        <div className='w-full flex justify-end mb-7-0 pr-7-8'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default LastestBlock
