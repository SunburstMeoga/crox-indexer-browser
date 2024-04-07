import React, { useEffect, useState } from 'react'
import PageSize from '@/components/PageSize'
import DataTable from '@/components/DataTable'
import { getListTransactions } from '@/api/homeApi';

const LastestTransactions = () => {
    const titleColumnsData = [
        { title: 'Block number', titleWidth: 'w-24', colWidth: '', canCopy: false, flag: 'number' },
        { title: 'Block height', titleWidth: 'w-24', colWidth: '', canCopy: false, flag: 'height' },
        { title: 'Block timeslot', titleWidth: 'w-24', colWidth: '', canCopy: false, flag: 'slot' },
        { title: 'Block Hash', titleWidth: '', colWidth: 'w-44', canCopy: true, filterAddress: true, flag: 'hash' },
        { title: 'Verify address', titleWidth: '', colWidth: 'w-64', canCopy: true, flag: 'mintaddress' },
        { title: 'Block reward', titleWidth: '', colWidth: '', canCopy: false, flag: 'reward', showSymbol: true },
        { title: 'Number of transactions', titleWidth: '', colWidth: '', canCopy: false, flag: 'txcount' },
        { title: 'Time', titleWidth: '', colWidth: '', canCopy: false, flag: 'time' }]
    let [dataColumns, changeDataColumns] = useState([])
    useEffect(() => {
        fetchListTransations()
    }, [])
    const fetchListTransations = async () => {
        try {
            const listTransactions = await getListTransactions({ "jsonrpc": "2.0", "method": "listtx", "params": { "fork": "202" }, "id": 83 })
            console.log(listTransactions)
            // changeDataColumns(dataColumns = listblock.data.result)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='bg-primary-green w-full min-h-svh'>
            <div className='w-full flex flex-col justify-start items-center'>
                <div className='py-6 font-black text-6xl w-10/12 text-module-title'>
                    Latest transactions
                </div>
                <div className='w-10/12 flex justify-end mb-2'>
                    <PageSize />
                </div>
                <div className='bg-white w-10/12 rounded-3xl p-4 mb-14 shadow-2xl'>
                    <DataTable titleColumns={titleColumnsData} dataColumns={dataColumns} />
                </div>
            </div>
        </div>
    )
}

export default LastestTransactions
