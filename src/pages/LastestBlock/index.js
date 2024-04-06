import React, { useEffect, useState } from 'react'
import PageSize from '@/components/PageSize'
import DataTable from '@/components/DataTable'
import { getListBlock } from '@/api/homeApi';

const LastestBlock = () => {
  const titleColumnsData = [
    { title: 'Block number', titleWidth: 'w-24', colWidth: '', canCopy: false },
    { title: 'Block height', titleWidth: 'w-24', colWidth: '', canCopy: false },
    { title: 'Block timeslot', titleWidth: 'w-24', colWidth: '', canCopy: false },
    { title: 'Block Hash', titleWidth: '', colWidth: 'w-44', canCopy: true },
    { title: 'Verify address', titleWidth: '', colWidth: 'w-64', canCopy: true },
    { title: 'Block reward', titleWidth: '', colWidth: '', canCopy: false },
    { title: 'Number of transactions', titleWidth: '', colWidth: '', canCopy: false },
    { title: 'Time', titleWidth: '', colWidth: '', canCopy: false }]
  let [dataColumns, changeDataColumns] = useState([])
  let [titleColumns, changeTitleColumns] = useState(titleColumnsData)
  useEffect(() => {
    fetchListBlock()
  }, [])

  const fetchListBlock = async () => {
    try {
      const listblock = await getListBlock({ "jsonrpc": "2.0", "method": "listblock", "params": { "fork": "202" }, "id": 83 })
      console.log(listblock)
      changeDataColumns(dataColumns = listblock.data.result)
      const updataTitleColumns = titleColumns.map(item => {
        return { ...item, id: 'test id' }
      })
      changeTitleColumns(updataTitleColumns)
      console.log(titleColumns)
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
        <div className='bg-white w-10/12 rounded-3xl p-4 mb-14 shadow-2xl'>
          <DataTable titleColumns={titleColumns} dataColumns={dataColumns} />
        </div>
      </div>
    </div>
  )
}

export default LastestBlock
