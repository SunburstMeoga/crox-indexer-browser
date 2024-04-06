import React from 'react'

const DataTable = ({ tableTitle }) => {
  const titleColumns = [
    { title: 'Block number', titleWidth: 'w-24', colWidth: '', canCopy: false },
    { title: 'Block height', titleWidth: 'w-24', colWidth: '', canCopy: false },
    { title: 'Block timeslot', titleWidth: 'w-24', colWidth: '', canCopy: false },
    { title: 'Block Hash', titleWidth: '', colWidth: '', canCopy: true },
    { title: 'Verify address', titleWidth: '', colWidth: 'w-64', canCopy: true },
    { title: 'Block reward', titleWidth: '', colWidth: '', canCopy: false },
    { title: 'Number of transactions', titleWidth: '', colWidth: '', canCopy: false },
    { title: 'Time', titleWidth: '', colWidth: '', canCopy: false }]
  const dataColumns = [
    { content: '630012' },
    { content: '333125' },
    { content: '0' },
    { content: '0xf902……7f0b ' },
    { content: '0x422d46580c09dcd440360204318b322a1fcc18c7' },
    { content: '0.08610000 HAH' },
    { content: '49' },
    { content: '2024-03-27 16:07:0' },
  ]
  return (
    <div>
      <div className=''>
        <div className='flex justify-between items-center border-b-4 border-line-gray'>
          {titleColumns.map((item, index) => {
            return <div
              key={index}
              className={['', item.colWidth ? item.colWidth : 'flex-1'].join(" ")}>
              <div className={['pl-2 text-left h-14 font-bold pt-2 border-word-gray', index !== 0 ? 'border-l' : '', item.titleWidth ? item.titleWidth : ''].join(" ")}>{item.title}</div>
            </div>
          })}
        </div>

        <div className='flex justify-between items-center border-b border-word-gray'>
          {dataColumns.map((item, index) => {
            return <div
              key={index} className={['text-select-color flex justify-between items-center h-20', titleColumns[index].colWidth ? titleColumns[index].colWidth : 'flex-1', index !== 0 ? 'border-l border-word-gray' : ''].join(" ")}>
              <div className={['flex pl-2 items-center overflow-hidden', titleColumns[index].colWidth ? titleColumns[index].colWidth : 'flex-1',].join(" ")}>{item.content}</div>
              {titleColumns[index].canCopy &&
                <div className='h-full flex flex-col justify-start pr-2 pt-1'>
                  <div className='icon iconfont icon-copy1 text-copy-icon cursor-pointer' style={{ fontSize: '16px' }}></div>
                </div>
              }
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default DataTable
