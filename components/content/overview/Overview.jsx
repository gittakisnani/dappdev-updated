import styled from "styled-components"
import useWindowSize from "../../../hooks/useWindowSize"
import AlertWrapper from "./AlertWrapper"
import CategoriesWrapper from "./CategoriesWrapper"
import ImagesWrapper from "./ImagesWrapper"
import ScoreWrapper from "./ScoreWrapper"

const OverviewWrapper = styled.div`
    color: ${({ theme }) => theme.textColorActive};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
`

const Overview = () => {
  const { width } = useWindowSize()
  return (
    <OverviewWrapper>
        <div className="flex flex-row md:flex-col w-full md:justify-between md:justify-[unset]">
          <ImagesWrapper />
          <ScoreWrapper />
        </div>
        {width >= 768 && <>
          <CategoriesWrapper />
          <AlertWrapper />
        </>}
    </OverviewWrapper>
  )
}

export default Overview