import React, { useEffect, useState } from 'react'
import PageSize from '@/components/PageSize'
import DataTable from '@/components/DataTable'
import { getListTransactions } from '@/api/homeApi';

const LastestTransactions = () => {
    const titleColumnsData = [
        { title: 'Transaction Hash', titleWidth: 'w-24', colWidth: '', canCopy: false, flag: 'number' },
        { title: 'Transaction Type', titleWidth: 'w-24', colWidth: '', canCopy: false, flag: 'height' },
        { title: 'Block Height', titleWidth: 'w-24', colWidth: '', canCopy: false, flag: 'slot' },
        { title: 'Time Cost', titleWidth: '', colWidth: 'w-44', canCopy: true, filterAddress: true, flag: 'hash' },
        { title: 'From', titleWidth: '', colWidth: 'w-64', canCopy: true, flag: 'mintaddress' },
        { title: 'To', titleWidth: '', colWidth: '', canCopy: false, flag: 'reward', showSymbol: true },
        { title: 'Execution Status', titleWidth: '', colWidth: '', canCopy: false, flag: 'txcount' },
        { title: 'Quantity', titleWidth: '', colWidth: '', canCopy: false, flag: 'time' },
        { title: 'Time', titleWidth: '', colWidth: '', canCopy: false, flag: 'time' }
    ]

    let [dataColumns, changeDataColumns] = useState([])
    useEffect(() => {
        fetchListTransations()
    }, [])
    const fetchListTransations = async () => {
        try {
            const listTransactions = await getListTransactions({ "jsonrpc": "2.0", "method": "listbrc20txdetails", "params": { "name": "aisi", "gettype": "all", "fork": "202" }, "id": 83 })
            console.log(listTransactions)
            changeDataColumns([])
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='bg-primary-green w-full min-h-svh'>
            <div className='w-full flex flex-col justify-start items-center'>
                <div className='pt-10 w-10/12 text-module-title font-bold pop-bold module-title'>
                    Latest Transactions
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
