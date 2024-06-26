import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FilterAddress } from '@/utils/format'

const TransDataTable = ({ titleColumnsData, dataColumns }) => {
    const navigate = useNavigate()
    return (
        <div className='w-full overflow-x-scroll xl:overflow-auto'>
            <div className=''>
                <div className='flex justify-between items-center mb-0-3'>
                    {titleColumnsData.map((item, index) => {
                        return <div
                            key={index}
                            className={['text-trans-gray text-1-5 ', item.colWidth ? item.colWidth : 'flex-1'].join(" ")}>
                            <div className={['pl-2-4 text-left font-semibold flex justify-start items-center ', item.colWidth ? item.colWidth : ''].join(" ")}>{item.title}</div>
                        </div>
                    })}
                </div>

                {dataColumns.map((_item, _index) => {
                    return <div key={_index} className='flex justify-between items-center cursor-pointer hover:bg-trans-hover' onClick={() => { navigate('/inscription-details/' + _item.inscriptionid) }}>
                
                        {titleColumnsData.map((item, index) => {
                            return <div
                                key={index} className={[
                                    'flex text-word-gray justify-start items-center h-5-3',
                                    titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1',
                                    index !== dataColumns.lenght - 1 ? "border-b border-line-gray" : ''
                                ].join(" ")}>
                                <div className={['pl-2-4 flex justify-start items-center text-1-5', titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1'].join(" ")}>
                                    {item.flag ? (item.filterAddress ? FilterAddress(_item[item.flag]) : _item[item.flag]) : ''}

                                </div>

                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}

export default TransDataTable
