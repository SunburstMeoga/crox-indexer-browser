import React from 'react'
import { useNavigate } from 'react-router-dom'

const Brc20ListTable = ({ titleColumnsData, dataColumns }) => {
    const navigate = useNavigate()
    return (
        <div className='xl:w-full overflow-x-scroll lg:overflow-auto bg-primary-green '>
            <div className=''>

                <div className='flex justify-between items-start lg:items-center pb-1-6 lg:w-full '>
                    {titleColumnsData.map((item, index) => {
                        return <div
                            key={index}
                            className={['', item.colWidth ? item.colWidth : 'flex-1'].join(" ")}>
                            <div className={['leading-point-128 text-left font-light text-1-0 lg:font-semibold flex justify-start items-center lg:text-2-0', item.colWidth ? item.colWidth : 'flex-1'].join(" ")}>{item.title}</div>
                        </div>
                    })}
                </div>
                <div className='w-34-4 lg:w-98-8 xl:w-full bg-black h-0-1'></div>

                {dataColumns.map((_item, _index) => {
                    return <div key={_index} className='flex justify-between items-start lg:items-center item-hover cursor-pointer py-2-6' onClick={() => { navigate('/brc20-details/' + _item.name) }}>
                        {titleColumnsData.map((item, index) => {
                            return <div
                                key={index} className={[
                                    'flex text-black justify-start items-center ',
                                    titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1'
                                ].join(" ")}>
                                <div className={['lg:flex justify-start items-center font-light text-1-0 lg:text-2-0 lg:font-normal', titleColumnsData[index].colWidth ? titleColumnsData[index].colWidth : 'flex-1'].join(" ")}>
                                    <div className={[item.flag === 'mintprogress' ? 'lg:w-4-9' : titleColumnsData[index].colWidth]}>
                                        {(item.flag ? _item[item.flag] : '')}
                                    </div>
                                    {item.flag === 'mintprogress' && <div className='flex bg-black w-5-4 h-0-8 mt-0-2 lg:mt-auto lg:w-24-8 lg:h-2-0 rounded-full justify-start items-center p-0-2'>
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
