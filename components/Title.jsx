import Image from 'next/image'
import Info from '../public/assets/images/Info.svg'

const Title = ({ text, includeIcon = true, fontSize }) => {
  return (
    <div className="flex items-center gap-2">
        <h4 
        style={fontSize && { fontSize }}
        className="text-textColorActive text-[25px] capitalize">{text}</h4>
        {includeIcon && <Image src={Info} alt='More' width={16} />}
    </div>
  )
}

export default Title