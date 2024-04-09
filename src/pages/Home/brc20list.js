import React from 'react'
import { useNavigate } from 'react-router-dom'

const Brc20list = ({ titleColumnsData, dataColumns }) => {
    const navigate = useNavigate()
    return (
        <div className='w-full'>
            <div className=''>
                <div className='flex justify-between items-center border-b border-black'>
                    {titleColumnsData.map((item, index) => {
                        return <div
                            key={index}
                            className={['', item.colWidth ? item.colWidth : 'flex-1'].join(" ")}>
                            <div className={['pl-2 h-14 text-left font-semibold flex justify-start items-center pop-bold', item.titleWidth ? item.titleWidth : ''].join(" ")}>{item.title}</div>
                        </div>
                    })}
                </div>

                {dataColumns.map((_item, _index) => {
                    return <div key={_index} className='flex justify-between items-center item-hover cursor-pointer' onClick={() => { navigate('/brc20-details', { replace: true }) }}>
                        {titleColumnsData.map((item, index) => {
                            return <div
                                key={index} className={[
                                    'flex text-black justify-start items-center h-20',
                                    titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1'
                                ].join(" ")}>
                                <div className={['pl-2 flex justify-start items-center text-lg', titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1'].join(" ")}>
                                    {(item.flag ? _item[item.flag] : '')}
                                    {item.flag === 'mintprogress' && <div className='flex p-1 bg-black flex-1 rounded-full ml-3 mr-6'>
                                        <div className='bg-title-green rounded-full h-3' style={{ width: _item[item.flag] }}></div>
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

export default Brc20list
