import Title from "../../Title"
import { DetailEntity } from "../overview/TokenDetails"
import Binance from '../../../public/assets/images/Binance.svg'
import Passed from '../../../public/assets/images/Passed.svg'
import Copy from '../../../public/assets/images/Copy.svg'
import LinksWrapper from "../../LinksWrapper"
import useWindowSize from "../../../hooks/useWindowSize"

const DetailsData = [
  { key: 'Project Name', value: 'PancakeSwap Token'},
  { key: 'On Boarding Date', value: '17 Nov 2022' },
  { key: 'Publishing Date', value: '21 Nov 2022' },
  { key: 'Platform', value: 'BSC Mainnet', image: { src: Binance, alt: 'Binance'} },
  { key: 'Audit Status', value: 'Passed', green: true, image: { src: Passed, alt: 'passed'}, white: true },
]


const LeftReport = () => {
  return (
    <div className="flex flex-col gap-4 justify-between md:w-[478px]">
        <div className="p-4 rounded-[10px] border border-textColorActive text-textColorActive bg-[#111111] flex-1">
            <Title  text={'Audit Overview'} />
            <div className="mt-4 flex flex-col gap-5">
            {DetailsData.map(detail => (<DetailEntity key={Math.random()} detail={detail} />))}
            </div>
        </div>
        <div className="p-4 rounded-[10px] border border-textColor">
          <Title text='Audited Files Details' includeIcon={false} />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <p className="text-textColor text-lg font-light">SyrupBar.sol</p>
              <div className="flex-1 flex justify-center items-center">
                <LinksWrapper text={'d3503....5c48c'} images={[{ src: Copy, alt: 'Copy'}]} />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-textColor text-lg font-light">SyrupBar.sol</p>
              <div className="flex-1 flex justify-center items-center">
                <LinksWrapper text={'d3503....5c48c'} images={[{ src: Copy, alt: 'Copy'}]} />
              </div>
            </div>
          </div>
          <u 
          style={{ fontFamily: 'Poppins'}}
          className="text-am text-textColor font-thin mt-3 block italic">View All Files</u>
        </div>
    </div>
  )
}

export default LeftReport