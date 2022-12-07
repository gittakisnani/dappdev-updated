import { useState } from "react"
import styled from "styled-components"
import Logo from "./Logo"
import NavBar from "./navbar/NavBar"
import Menu from '../../public/assets/images/Menu.svg'
import useWindowSize from "../../hooks/useWindowSize"
import Image from "next/image"

const Container = styled.div`
    height: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 100%;
      max-width: 1700px;
      justify-content: space-around;
    }
`

const Header = () => {
  const { width } = useWindowSize()
  const [navBar, setNavbar] = useState(false);
  const handleNavbar = () => setNavbar(!navBar)
  return (
    <header>
        <Container>
            <Logo />
            {width < 768 && !navBar && <button onClick={handleNavbar}>
              <Image src={Menu} alt='Open Menu' />
            </button>}
            {(width >= 768 || navBar) && <NavBar includeIcon={width < 768} handleNavBar={handleNavbar} />}
        </Container>
    </header>
  )
}

export default Header