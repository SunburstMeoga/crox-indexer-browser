import React, { useEffect, useState } from 'react'
import PageSize from '@/components/PageSize'
import Pagination from '../../components/Pagination';
import DataTable from '@/components/DataTable'
import { getListBlock } from '@/api/homeApi';

const LastestBlock = () => {
  const titleColumnsData = [
    { title: 'Block number', titleWidth: 'w-24', colWidth: '', canCopy: false, flag: 'number' },
    { title: 'Block height', titleWidth: 'w-24', colWidth: '', canCopy: false, flag: 'height' },
    { title: 'Block timeslot', titleWidth: 'w-24', colWidth: '', canCopy: false, flag: 'slot' },
    { title: 'Block Hash', titleWidth: '', colWidth: 'w-44', canCopy: true, filterAddress: true, flag: 'hash' },
    { title: 'Verify address', titleWidth: '', colWidth: 'w-64', canCopy: true, flag: 'mintaddress' },
    { title: 'Block reward', titleWidth: '', colWidth: '', canCopy: false, flag: 'reward' },
    { title: 'Number of transactions', titleWidth: '', colWidth: '', canCopy: false, flag: 'txcount' },
    { title: 'Time', titleWidth: '', colWidth: '', canCopy: false, flag: 'time' }]
  let [dataColumns, changeDataColumns] = useState([])
  useEffect(() => {
    fetchListBlock()
  }, [])
  const fetchListBlock = async () => {
    try {
      const listblock = await getListBlock({ "jsonrpc": "2.0", "method": "listblock", "params": { "fork": "202" }, "id": 83 })
      console.log(listblock)
      changeDataColumns(dataColumns = listblock.data.result)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='bg-primary-green w-full min-h-svh'>
      <div className='w-full flex flex-col justify-start items-center'>
        <div className='py-6 font-black text-6xl w-10/12 text-module-title'>
          Latest block
        </div>
        <div className='w-10/12 flex justify-end mb-2'>
          <PageSize />
        </div>
        <div className='bg-white w-10/12 rounded-3xl p-4 mb-2 shadow-2xl'>
          <DataTable titleColumns={titleColumnsData} dataColumns={dataColumns} />
        </div>
        <div className='w-10/12 flex justify-end mb-10'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default LastestBlock
