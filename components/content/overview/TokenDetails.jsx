import Image from 'next/image'
import Binance from '../../../public/assets/images/Binance.svg'
import Info from '../../../public/assets/images/Info.svg'
import Copy from '../../../public/assets/images/Copy.svg'
import LinksWrapper from '../../LinksWrapper'
import AlertWrapper from './AlertWrapper'
import CategoriesWrapper from './CategoriesWrapper'
import useWindowSize from '../../../hooks/useWindowSize'


const DetailsData = [
    { key: 'Token Name', value: 'PancakeSwap Token'},
    { key: 'Symbol', value: 'CAKE' },
    { key: 'Chain', value: 'BSC Mainnet', image: { src: Binance, alt: 'Binance'} },
    { key: 'Token Lunch Date', value: '1 September 2020' },
    { key: 'Total Supply', value: '952668799.7510512' },
    { key: 'Token Burn', value: '64.25%', redBorder: true  },
    { key: 'Next Unlock Date', value: '31 October 2022' },
    { key: 'Owner Address', link: '0x73feaa1ee3...'},
    { key: 'Creator Address', link: '0x73feaa1ee3...'},
]

export const DetailEntity = ({ detail }) => {
    return (
        <div className='flex items-center justify-between gap-2 text-textColor'>
            <div className='flex gap-2 items-center'>
                <p 
                style={detail.white && { color: 'white', fontWeight: 600 }}
                className='text-sm md:text-lg font-light leading-[27px]'>{detail.key}</p>
                <Image src={Info} alt={detail.key} width={17} />
            </div>
            {!detail?.link && <div className='flex items-center gap-2'>
                {detail?.image && <Image src={detail.image.src} alt={detail.image.alt} />}
                <p style={detail?.redBorder ? { border: '1px solid red', padding: '2px 5px'} : detail.red ? { color: '#FF1616'} : detail.green ?  { color: '#00DE24'}: null} className='font-medium text-xs md:text-[16px] leading-[24px]'>{detail.value}</p>
            </div>}

            {detail?.link && <LinksWrapper text={detail.key} images={[{ src: Copy , alt: 'Copy'}]} />}
        </div>
    )
}

const TokenDetails = () => {
    const { width } = useWindowSize()
  return (
    <>
    <div className='p-2 md:p-4 rounded-[10px] md:border border-textColorActive text-textColorActive bg-[#111111] flex-1'>
        <div className='flex gap-2 items-center mb-4'>
        <h4 className='font-bold text-xl text-textColorActive'>Token Details</h4>
        <Image src={Info} alt='More' width={20} />
        </div>
        <div className='flex flex-col gap-5'>
            {DetailsData.map(detail => (<DetailEntity key={Math.random()} detail={detail} />))}
        </div>
    </div>
    {width < 768 && <div className='text-textColorActive flex flex-col gap-6'>
          <CategoriesWrapper />
          <AlertWrapper />
    </div>}
    </>
  )
}

export default TokenDetails