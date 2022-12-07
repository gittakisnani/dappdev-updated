import styled from "styled-components"
import Links from "./links/Links"
import Stats from "./Stats"
import User from "./User"

const Container = styled.div`
    display: flex;
    border-radius: 20px;
    background: ${({ theme }) => theme.primaryGradient};
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    margin: 0 auto;
    padding: .8rem;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    overflow-x: hidden;

    @media (min-width: 768px) {
      height: 113px;
      min-width: 1500px;
      max-width: 1700px;
    }
`

const TopBar = () => {
  return (
    <Container>
        <User />
        <Stats />
        <Links />
    </Container>
  )
}

export default TopBar