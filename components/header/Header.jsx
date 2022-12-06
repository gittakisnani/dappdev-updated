import styled from "styled-components"
import Logo from "./Logo"
import NavBar from "./navbar/NavBar"

const Container = styled.div`
    height: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 100%;
      max-width: 1700px;
      justify-content: space-around;
    }
`

const Header = () => {
  return (
    <header>
        <Container>
            <Logo />
            <NavBar />
        </Container>
    </header>
  )
}

export default Header