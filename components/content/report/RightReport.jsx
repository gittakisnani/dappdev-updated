import React from 'react'
import Title from '../../Title'

const RightReport = () => {
  return (
    <div className='flex flex-col gap-4 justify-between flex-1'>
        <Title includeIcon={false} text='Audit Document Review' />
        <div className='bg-[#111111] rounded-[10px] border border-textColor flex-1 min-h-[400px]'></div>
        <button className='text-textColorActive border border-textColor bg-[#111111] mx-auto w-[167px] h-[40px] rounded-[10px]'>View Full PDF</button>
    </div>
  )
}

export default RightReport