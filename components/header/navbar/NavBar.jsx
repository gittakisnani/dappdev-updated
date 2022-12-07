import styled from "styled-components";
import NavLink from "./NavLink";
import Close from '../../../public/assets/images/Close.svg'
import Image from "next/image";
const navLinksData = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Audits',
        link: '/'
    }, 
    {
        text: 'Services',
        link: '/'
    }, 
    {
        text: 'Contact',
        link: '/'
    }
]

const Nav = styled.nav`
    gap: 3rem;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    padding-left: 4.5rem;
    position: static;

    @media (max-width: 768px) {
        background-color: black;
        inset: 0;
        z-index: 1000;
        flex-direction: column;
        justify-content: center;
        padding-left: 0;
        position: fixed;
    }
`


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;


    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const NavButton = styled.div`
    border: 2px solid ${({ theme }) => theme.textColorActive};
    color: ${({ theme }) => theme.textColorActive};
    backdrop-filter: blur(5.5px);
    border-radius: 15px;
    font-weight: 300;
    font-size: 20px;
    line-height: 119.5%;
    padding: .5rem 1rem;
`

const NavBar = ({ handleNavBar, includeIcon}) => {
  return (
    <Nav>   
        {includeIcon && <button onClick={handleNavBar} className="absolute top-6 right-6 cursor-pointer">
            <Image src={Close} alt='Close menu' width={30} />
        </button>}
        <Wrapper>
            {navLinksData.map(({ text, link }) => (
                <NavLink key={text} text={text} link={link} />
            ))}
        </Wrapper>
        <Wrapper>
                <NavButton>Request A KYC</NavButton>
                <NavButton>Request An Audit</NavButton>
        </Wrapper>
    </Nav>
  )
}

export default NavBar