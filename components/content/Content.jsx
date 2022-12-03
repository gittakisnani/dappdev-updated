import styled from "styled-components";
import SideBarWrapper from "./sidebar/SideBar";

const ContentWrapper = styled.main`
    flex: 1;
    background-color: #242424;
    height: 505px;
    max-height: 580px;
    overflow-y: hidden;
    border-radius: 20px;
    padding: 1.2rem 1rem;
    display: flex;
    gap: 1rem;
    width: 100%;
    min-width: 1500px;
    max-width: 1700px;
    margin: 0 auto;
    overflow: auto;
`


const ChildrenWrapper = styled.div`
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.textColor };
    flex: 1;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    gap: 1.6rem;
    padding: 0.8rem 1.6rem;
`


const Content = ({ children }) => {
    return (
        <ContentWrapper>
            <SideBarWrapper />
            <ChildrenWrapper>
                {children}
            </ChildrenWrapper>
        </ContentWrapper>
    )
}


export default Content