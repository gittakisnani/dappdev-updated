import Image from "next/image"
import Info from '../../../public/assets/images/Info.svg'
import Mintable from '../../../public/assets/images/Mintable.svg'
import ProxyContract from '../../../public/assets/images/ProxyContract.svg'
import HoneyPot from '../../../public/assets/images/HoneyPot.svg'
import Burnable from '../../../public/assets/images/Burnable.svg'
import useWindowSize from "../../../hooks/useWindowSize"

const RiskLastEntity = ({ icon, primaryText, secondaryText }) => {
    const { width } = useWindowSize()
    return (
        <div className="rounded-[10px] border border-textColor p-4 flex justify-between gap-4 items-center px-4 md:px-8">
            <div className="md:w-[100px]">
            <Image src={icon} alt={primaryText} width={45}  />
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2">
                    <h4 className="text-textColorActive text-xl md:text-[25px]">{primaryText}</h4>
                    <Image src={Info} alt='More' width={16} />
                </div>
                <p className="text-textColor font-light text-sm">{secondaryText}</p>
            </div>
            <span 
                style={{
                    background: 'linear-gradient(180deg, #B60000 0%, #FF1616 100%)',
                    boxShadow: '5px 4px 34px rgba(0, 0, 0, 0.5), inset 11px 6px 18px rgba(0, 0, 0, 0.5)'
                }}
                className="rounded-[10px] text-2xl md:text-[32px] font-bold text-textColorActive p-2 md:p-3 md:px-4">
                    Yes
            </span>
        </div>
    )
}

const RiskLast = () => {
  return (
    <div className='flex flex-col justify-between gap-4'>
    <RiskLastEntity icon={Mintable} primaryText='Mintable' secondaryText='Does the token have a non-fixed supply?' />
    <RiskLastEntity icon={Burnable} primaryText='Burnable' secondaryText='Can the token be burned?' />
    <RiskLastEntity icon={HoneyPot} primaryText='Honey Pot' secondaryText='Does the token have a non-fixed supply? ' />
    <RiskLastEntity icon={ProxyContract} primaryText='Proxy Contract' secondaryText='Does the token have a proxy contract?'/>

    </div>
  )
}

export default RiskLast