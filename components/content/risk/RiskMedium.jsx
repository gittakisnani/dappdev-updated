import Info from '../../../public/assets/images/Info.svg'
import Image from 'next/image'
import Title from '../../Title'


const Risk = ({ good }) => {
    return (
        <div 
        style={{ boxShadow: 'inset 6px 6px 14px rgba(0, 0, 0, 0.4)'}}
        className="p-4 rounded-[10px] bg-white flex items-center gap-1">
        <span 
        className={"w-[40px] h-[29px] rounded-md" + ` ${good ? 'bg-primaryGreen' : 'bg-primaryRed'}`}></span>
        <p className="font-light text-sm"><span className="font-semibold">- {good ? 'Good' : 'Bad'}</span> for Users</p>
        </div>
    )
}

const Entity = () => {
    return (
        <div className='flex items-center gap-4 justify-between'>
            <div className='flex-1'>
            <Title fontSize={'16px'} text='Anti Whale Modifiable' />
            <p className='text-textColor text-xs font-light'>Can the owner change or modify the attributes of the “Anti Whale Function”?</p>
            </div>
            <span 
            style={{background: 'linear-gradient(180deg, #B60000 0%, #FF1616 100%)'}}
            className='md:w-[50px] md:h-[27px] text-center font-semibold p-2 md:p-0 md:font-bold rounded-[1px]'>Yes</span>
        </div>
    )
}

const RiskMedium = () => {
  return (
    <div className="flex flex-col gap-4 md:w-[420px]">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Risk good />
            <Risk />
        </div>
        <div className="p-2 md:p-4 rounded-[10px] md:border border-primaryRed flex-1 bg-[#414141]">
            <div className="flex justify-between gap-4 items-center text-textColorActive">
                <div className="flex flex-col flex-1">
                    <Title fontSize={'18px'} text='Anti Whale Function Present' />
                    <p className='text-textColor font-light text-xs'>
                    Does the smart contract have a function present that restricts users to buy/sell above a certain quantity of tokens?
                    </p>
                </div>
                <span 
                style={{background: 'linear-gradient(180deg, #B60000 0%, #FF1616 100%)'}}
                className='md:w-[90px] md:h-[43px] p-2 md:p-0 text-xl md:text-[25px] font-bold text-center rounded-[10px]'>Yes</span>
            </div>
            <div className='p-2 md:p-4 md:p-7 text-textColorActive flex flex-col gap-4'>
                <Entity />
                <Entity />
                <Entity />
                <Entity />
            </div>
        </div>
    </div>
  ) 
}

export default RiskMedium