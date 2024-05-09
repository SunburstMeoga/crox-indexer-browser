import React, { useEffect, useState } from 'react'
import PageSize from '@/components/PageSize'
import DataTable from '@/components/DataTable'
import DataCard from '../BRC20Details/dataCard'
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
    let [cardList, setCardList] = useState([
        { title: 'Total Amount', quantities: 23223 },
        { title: 'Casting Quantity', quantities: 23223 },
        { title: 'Single Casting Limit', quantities: 23223 }
    ])
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
                <div className='font-bold  module-title cursor-pointer pl-6-9 lg:pl-2-3 xl:pl-6-9 w-full mt-5-5 text-8-0'>
                    Latest transactions
                </div>
                <div className='w-full px-1-3 mt-2-2 lg:px-2-2 xl:px-6-9 flex justify-between items-center flex-wrap'>
                    {cardList.map((item, index) => {
                        return <div key={index} className="w-34-4 lg:w-59-3 xl:w-34-4 pl-1-3 py-1-3 lg:py-2-6 lg:pl-2-9 mb-1-3 font-medium rounded-2xl overflow-hidden ease-in-out cursor-pointer bg-card-green duration-300 hover:text-primary-green hover:bg-black hover:shadow-2xl">
                            <DataCard title={item.title} unit={item.unit} quantities={item.quantities} />
                        </div>
                    })}
                </div>
                <div className='w-full pr-6-9 xl:pr-6-9 lg:pr-2-3 flex justify-end mb-0-7 lg:mt-0-7 xl:mt-auto'>
                    <PageSize />
                </div>
                <div className='px-6-9 lg:px-2-3 lg: xl:px-6-9 w-full mb-3-3'>
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
