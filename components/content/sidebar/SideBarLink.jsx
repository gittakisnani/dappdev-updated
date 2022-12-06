import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'


const SideBarLink = styled.div`
    display: flex;
    padding: 0 .5rem;
    gap: 1.5rem;
    align-items: center;


    > p {
        font-weight: ${props => props.active ? 500 : 200 };
        font-size: ${props => props.active ? '22px' : '18px' };
        color: ${props => props.active ? props.theme.textColorActive : props.theme.textColor };
        line-height: 95.5%;
    }
`

const SideBarLinkWrapper = ({ text, icon, link, width, height, active }) => {
  return (
    <SideBarLink className='relative' active={active}>
        <Link href={link}>
            <Image src={icon} alt={text} width={active ? width + 5 : width} height={active ? height + 5 : height}  />
        </Link>
        <p className='hidden md:block'>
            <Link href={link}>
                {text}
            </Link>
        </p>

        {active && <span className='absolute top-[-25px] right-[7px] h-[10px] rounded-br-[10px] md:-right-6 md:h-[60px] md:rounded-br-none md:rounded-tl-[10px] rounded-bl-[10px] w-[30px] md:w-[20px] bg-textColorActive'></span>}
    </SideBarLink>
  )
}

export default SideBarLinkWrapper