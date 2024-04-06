import React from 'react'

const DataTable = ({ tableTitle }) => {
  const titleColumns = [
    { title: 'Block number', width: 'w-24', canCopy: false },
    { title: 'Block height', width: 'w-24', canCopy: false },
    { title: 'Block timeslot', width: 'w-24', canCopy: false },
    { title: 'Block Hash', width: 'w-24', canCopy: true },
    { title: 'Verify address', width: 'w-36', canCopy: true },
    { title: 'Block reward', width: 'w-32', canCopy: false },
    { title: 'Number of transactions', width: 'w-32', canCopy: false },
    { title: 'Time', width: 'w-32', canCopy: false }]
  const dataColumns = [
    { content: '630012' },
    { content: '333125' },
    { content: '0' },
    { content: '0xf902……7f0b ' },
    { content: '0x422d46580c09dcd44036 0204318b322a1fcc18c7' },
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
              className={['flex justify-start items-center flex-1 border border-red-500'].join(" ")}>
              <div className={['pl-2 text-left h-14 font-bold pt-2 border-word-gray ', index !== 0 ? 'border' : '', item.width ? item.width : ''].join(" ")}>{item.title}</div>
            </div>
          })}
        </div>

        <div className='flex justify-between items-center border-b border-word-gray'>
          {dataColumns.map((item, index) => {
            return <div
              key={index} className={['text-select-color flex-1 flex justify-between items-center h-20', index !== 0 ? 'border-l border-word-gray' : ''].join(" ")}>
              <div className='pl-2 max-w-full text-wrap'>{item.content}</div>
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
