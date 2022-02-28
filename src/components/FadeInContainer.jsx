import styled from 'styled-components'
import { AwardContainer } from '../views/StoreAward'
import { ContentContainer } from '../views/TrophyContent'
import { CountContainer } from '../views/UsageCount'

const FadeInContainer = ({ children }) => {
  return <FadeContainer>{children}</FadeContainer>
}

const FadeContainer = styled.div`
  ${ContentContainer} {
    animation: fadeIn 700ms ease-in;
  }

  ${CountContainer} {
    animation: fadeIn 700ms ease-in;
    animation-delay: 100ms;
  }

  ${AwardContainer} {
    animation: fadeIn 700ms ease-in;
    animation-delay: 200ms;
  }

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

export default FadeInContainer
