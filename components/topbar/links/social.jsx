import styled from "styled-components"
import Discord from '../../../public/assets/images/Discord.svg'
import Telegram from '../../../public/assets/images/Telegram.svg'
import Github from '../../../public/assets/images/Github.svg'
import Twitter from '../../../public/assets/images/Twitter.svg'
import SocialIcon from '../../../public/assets/images/SocialIcon.svg'
import Image from "next/image"
import Link from "next/link"

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: flex-end;

    @media (max-width: 768px) {
        align-items: center;
    }

    > h4 {
        font-weight: 500;
        font-size: 15px;  
        color: ${({ theme }) => theme.textColor}  
    }
`


const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`


const Social = () => {
  return (
    <SocialWrapper>
        <h4>Community Resources</h4>
        <SocialIcons>
            <Link href='/'>
                <Image src={Github} alt='Github' width={20} height={20} />
            </Link>
            <Link href='/'>
                <Image src={Telegram} alt='Telegram' width={20} height={20}  />
            </Link>
            <Link href='/'>
                <Image src={SocialIcon} alt='SocialIcon' width={20} height={20}  />
            </Link>
            <Link href='/'>
                <Image src={Discord} alt='Discord' width={20} height={20}  />
            </Link>
            <Link href='/'>
                <Image src={Twitter} alt='Twitter' width={20} height={20} />
            </Link>
        </SocialIcons>
    </SocialWrapper>
  )
}

export default Social