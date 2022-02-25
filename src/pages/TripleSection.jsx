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
`
export default TripleSection
