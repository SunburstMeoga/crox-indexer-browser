import React from 'react'
import PageSize from '@/components/PageSize'
import DataTable from '@/components/DataTable'
const LastestBlock = () => {
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
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default LastestBlock
