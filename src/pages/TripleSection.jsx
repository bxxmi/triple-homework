import TrophyContent from '../views/TrophyContent'
import AwardInfoContent from '../views/AwardInfoContent'
import styled from 'styled-components'

const TripleSection = () => {
  return (
    <SectionContainer>
      <TrophyContent />
      <AwardInfoContent />
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-evenly;
  animation: fadeIn 700ms ease-in;

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

export default TripleSection
