import React, { useEffect, useState } from 'react'
import PageSize from '@/components/PageSize'
import DataTable from '@/components/DataTable'
import Pagination from '../../components/Pagination';

import { getListTransactions } from '@/api/homeApi';

const LastestTransactions = () => {
    const titleColumnsData = [
        { title: 'Transaction Hash', titleWidth: '', colWidth: 'w-12-1', canCopy: false, flag: 'number' },
        { title: 'Transaction Type', titleWidth: '', colWidth: 'w-8-8', canCopy: false, flag: 'height' },
        { title: 'Block Height', titleWidth: '', colWidth: 'w-8-3', canCopy: false, flag: 'slot' },
        { title: 'Time Cost', titleWidth: '', colWidth: 'w-9-4', canCopy: true, filterAddress: true, flag: 'hash' },
        { title: 'From', titleWidth: '', colWidth: 'w-16-9', canCopy: true, flag: 'mintaddress' },
        { title: 'To', titleWidth: '', colWidth: 'w-16-1', canCopy: false, flag: 'reward', showSymbol: true },
        { title: 'Execution Status', titleWidth: '', colWidth: 'w-8-7', canCopy: false, flag: 'txcount' },
        { title: 'Quantity', titleWidth: '', colWidth: 'w-11-7', canCopy: false, flag: 'time' },
        { title: 'Time', titleWidth: '', colWidth: 'w-12-7', canCopy: false, flag: 'time' }
    ]

    let [dataColumns, changeDataColumns] = useState([])
    useEffect(() => {
        fetchListTransations()
    }, [])
    const fetchListTransations = async () => {
        try {
            const listTransactions = await getListTransactions({ "jsonrpc": "2.0", "method": "listbrc20txdetails", "params": { "name": "aisi", "fork": "202" }, "id": 83 })
            console.log(listTransactions)
            changeDataColumns([])
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='bg-primary-green w-full min-h-svh'>
            <div className='w-full flex flex-col justify-start items-center'>
                <div className='font-bold  module-title cursor-pointer pl-6-9 w-full mt-5-5 text-8-0'>
                    Latest transactions
                </div>
                <div className='w-full pr-6-9 flex justify-end mb-0-7'>
                    <PageSize />
                </div>
                <div className='px-6-9 w-full mb-3-3'>
                    <div className='bg-white w-full rounded-3xl pt-1-7 shadow-2xl'>
                        <DataTable titleColumns={titleColumnsData} dataColumns={dataColumns} />
                    </div>
                </div>
                <div className='w-full flex justify-end mb-7-0 pr-7-8'>
                    <Pagination showJump />
                </div>
            </div>
        </div>
    )
}

export default LastestTransactions
