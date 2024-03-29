import styled from "styled-components";
import { useRouter } from "next/router";
import Overview from '../../../public/assets/images/Overview.svg'
import Risk from '../../../public/assets/images/Risk.svg'
import SocialAnalysis from '../../../public/assets/images/SocialAnalysis.svg'
import Report from '../../../public/assets/images/Report.svg'
import Price from '../../../public/assets/images/Money.svg'
import Monitoring from '../../../public/assets/images/Monitoring.svg'
import SideBarLinkWrapper from "./SideBarLink";


const SideBarLinksData = [
    {
        text: 'Overview',
        icon: Overview,
        link: '/overview',
        width: 19,
        height: 20
    },
    {
        text: 'Risk Analysis',
        icon: Risk,
        link: '/risk-analysis',
        width: 22,
        height: 19
    },
    {
        text: 'Social Media Analysis',
        icon: SocialAnalysis,
        link: '/social-media-analysis',
        width: 23,
        height: 22
    },
    {
        text: 'Audit Report',
        icon: Report,
        link: '/audit-report',
        width: 21,
        height: 26
    },
    {
        text: 'Price Analysis',
        icon: Price,
        link: '/price-analysis',
        width: 26,
        height: 24
    },
    {
        text: 'On Chain Monitoring',
        icon: Monitoring,
        link: '/on-chain-monitoring',
        width: 23,
        height: 23
    },
]

const SideBar = styled.aside`
    background: ${({ theme }) => theme.primaryGradient};
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.5);
    padding: 1.6rem 1.2rem;
    display: flex;
    gap: 1.6rem;
    position: fixed;
    justify-content: space-between;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    z-index: 10000;
    
    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        & {
            position: static;
            width: 248px;
            flex-direction: column;
            min-width: 248px;
            height: 100%;
            justify-content: unset;
            border-radius: 20px;
        }
    }
`


const Separator = styled.div`
    height: 1px;
    width: 112px;
    background: ${({ theme }) => theme.primary};
    border-radius: 20px;
    margin: 0 auto;
`

const SideBarWrapper = () => {
    const router = useRouter();
  return (
    <SideBar>
        {SideBarLinksData.map(({ link, text, icon, width, height}, index) => (
            <>
                <SideBarLinkWrapper 
                active={router.asPath.includes(link)}  
                key={index} 
                link={link} 
                text={text} 
                icon={icon} 
                width={width} 
                height={height} 
                />

                {index < SideBarLinksData.length - 1  && <Separator className="hidden md:block" />}
            </>
        ))}
    </SideBar>
  )
}

export default SideBarWrapper



