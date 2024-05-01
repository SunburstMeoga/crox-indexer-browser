import React from 'react'
import { useNavigate } from 'react-router-dom'

const Brc20ListTable = ({ titleColumnsData, dataColumns }) => {
    const navigate = useNavigate()
    return (
        <div className='w-full'>
            <div className=''>
                <div className='flex justify-between items-center border-b border-black pb-1-6'>
                    {titleColumnsData.map((item, index) => {
                        return <div
                            key={index}
                            className={['', item.colWidth ? item.colWidth : 'flex-1 '].join(" ")}>
                            <div className={['leading-point-128 text-left font-semibold flex justify-start items-center text-2-0', item.titleWidth ? item.titleWidth : ''].join(" ")}>{item.title}</div>
                        </div>
                    })}
                </div>

                {dataColumns.map((_item, _index) => {
                    return <div key={_index} className='flex justify-between items-center item-hover cursor-pointer py-2-6' onClick={() => { navigate('/brc20-details/' + _item.name) }}>
                        {titleColumnsData.map((item, index) => {
                            return <div
                                key={index} className={[
                                    'flex text-black justify-start items-center ',
                                    titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1'
                                ].join(" ")}>
                                <div className={['flex justify-start items-center text-2-0 font-normal', titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1'].join(" ")}>
                                    <div className={[item.flag === 'mintprogress' ? 'w-4-9' : titleColumnsData[index].colWidth]}>
                                        {(item.flag ? _item[item.flag] : '')}
                                    </div>
                                    {item.flag === 'mintprogress' && <div className='flex bg-black w-24-8 h-2-0 rounded-full justify-start items-center p-0-2'>
                                        <div className='bg-title-green rounded-full h-full' style={{ width: _item[item.flag] }}></div>
                                    </div>}
                                </div>

                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Brc20ListTable
