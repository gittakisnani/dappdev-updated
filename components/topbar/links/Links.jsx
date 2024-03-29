import styled from "styled-components"
import Social from "./social"
import Website from "./website"

const LinksWrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.textColorActive};
    border-radius: 15px;
    width: 412px;
    height: 89px;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-content: center;

    @media (max-width: 768px) {
        width: unset;
        border: none;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin: 20px 0;
    }
`


const Separator = styled.div`
    width: 2px;
    height: 47px;
    background: #535353;
    border-radius: 20px;
`

const Links = () => {
  return (
    <LinksWrapper>
        <Website />
        <Separator />
        <Social />
    </LinksWrapper>
  )
}

export default Links