import styled from 'styled-components'
import StoreAward from './StoreAward'
import UsageCount from './UsageCount'

const AwardInfoContent = () => {
  return (
    <InfoContainer>
      <UsageCount />
      <StoreAward />
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  animation: fadeIn 700ms ease-in;
  animation-delay: 100ms;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export default AwardInfoContent
