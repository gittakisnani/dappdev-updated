import { useState } from "react"
import styled from "styled-components"
import useWindowSize from "../../hooks/useWindowSize"
import Links from "./links/Links"
import Stats from "./Stats"
import User from "./User"

const Container = styled.div`
    display: flex;
    border-radius: 20px;
    background: ${({ theme }) => theme.primaryGradient};
    flex-direction: column;
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
      flex-direction: row;
    }

    @media (min-width: 1500px) {
      min-width: 1500px;
      max-width: 1700px;
    }
`

const TopBar = () => {
  const { width } = useWindowSize();
  const [showMore, setShowMore] = useState(false);
  const handleChange = () => {
    setShowMore(!showMore)
  }
  return (
    <Container>
        <User />
        {(width >= 768 || showMore) &&
          <>
          <Stats />
          <Links />
          </>
        }
        {width < 768 && <button onClick={handleChange} className="text-textColorActive">Show {showMore ? 'Less' :'More'}</button>}
    </Container>
  )
}

export default TopBar