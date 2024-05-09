import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FilterAddress } from '@/utils/format'
const HolderDataTable = ({ titleColumnsData, dataColumns }) => {
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
                    return <div key={_index} className='flex justify-between items-center cursor-pointer hover:bg-trans-hover' >
                        {titleColumnsData.map((item, index) => {
                            return <div
                                key={index} className={[
                                    'flex text-word-gray justify-start items-center h-5-3',
                                    titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1',
                                    index !== dataColumns.lenght - 1 ? "border-b border-line-gray" : ''
                                ].join(" ")}>
                                <div className={['pl-2-4 flex justify-start items-center text-1-5', titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1'].join(" ")}>
                                    <div className='lg:flex justify-start items-center'>
                                        <div className={item.flag === 'percentage' ? 'w-3-8 mr-1-0' : 'flex-1'}>
                                            {item.flag ? (item.filterAddress ? FilterAddress(_item[item.flag]) : _item[item.flag]) : ''}
                                        </div>
                                        {item.flag === 'percentage' && <div className='flex p-0-2 lg:p-0-3 bg-black w-7-4 lg:w-18-8 rounded-full overflow-hidden'>
                                            <div className='bg-title-green rounded-full h-0-8 lg:h-1-1' style={{ width: _item[item.flag] }}></div>
                                        </div>}
                                    </div>

                                </div>

                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}

export default HolderDataTable
