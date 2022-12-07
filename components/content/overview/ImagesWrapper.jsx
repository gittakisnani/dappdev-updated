import Image from "next/image"
import styled from "styled-components"
import useWindowSize from "../../../hooks/useWindowSize"
import BlockAuditContract from '../../../public/assets/images/BlackAuditContract.svg'
import BlockAuditKYC from '../../../public/assets/images/BlackAuditKYC.svg'
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 768) {
      gap: 1.5rem;
      flex-direction: row;
    }
`


const ImagesWrapper = () => {
  const { width } = useWindowSize()
  return (
    <Wrapper>
      <Image className="mt-3 md:mt-0" src={BlockAuditKYC} alt='Block Audit KYC' width={width <768 ? 120 : undefined}  />
      <Image style={{ marginTop:'20px'}} src={BlockAuditContract} alt='Block Audit Contract' width={width <768 ? 120 : undefined} />
    </Wrapper>
  )
}

export default ImagesWrapper