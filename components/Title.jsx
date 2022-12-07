import Image from 'next/image'
import useWindowSize from '../hooks/useWindowSize'
import Info from '../public/assets/images/Info.svg'

const Title = ({ text, includeIcon = true, fontSize }) => {
  const { width } = useWindowSize()
  return (
    <div className="flex items-center gap-2">
        <h4 
        style={width < 768 ? { fontSize: '20px'} : fontSize && { fontSize }}
        className="text-textColorActive text-[25px] capitalize">{text}</h4>
        {includeIcon && <Image src={Info} alt='More' width={16} />}
    </div>
  )
}

export default Title