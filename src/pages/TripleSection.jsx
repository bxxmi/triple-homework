import styled from 'styled-components'
import TrophyContent from '../views/TrophyContent'
import AwardInfoContent from '../views/AwardInfoContent'
import FadeInContainer from '../components/FadeInContainer'

const TripleSection = () => {
  return (
    <FadeInContainer>
      <SectionContainer>
        <TrophyContent />
        <AwardInfoContent />
      </SectionContainer>
    </FadeInContainer>
  )
}

const SectionContainer = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-evenly;
`

export default TripleSection
