import styled from "styled-components";
import SideBarWrapper from "./sidebar/SideBar";

const ContentWrapper = styled.main`
    flex: 1;
    background-color: #242424;
    overflow-y: hidden;
    border-radius: 20px;
    display: flex;
    gap: 1rem;
    margin: 0 auto;
    overflow: auto;
    max-width: 100%;
    @media (min-width: 768px) {
        padding: 1.2rem 1rem;
        width: 100%;
        height: 505px;
        max-height: 580px;
        min-width: 1500px;
        max-width: 1700px;
    }
`


const ChildrenWrapper = styled.div`
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.textColor };
    flex: 1;
    max-height: 100%;
    overflow-y: auto;
    gap: 1.6rem;
    padding: 0.8rem 1.6rem;

    @media screen and (max-width: 768px) {
        margin-bottom: 4.5rem;
        padding: 10px;
        gap: 8px;
    }
`


const Content = ({ children }) => {
    return (
        <ContentWrapper>
            <SideBarWrapper />
            <ChildrenWrapper className="flex flex-col md:flex-row">
                {children}
            </ChildrenWrapper>
        </ContentWrapper>
    )
}


export default Content