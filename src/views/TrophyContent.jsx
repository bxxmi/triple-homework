import styled from 'styled-components'

const TrophyContent = () => {
  return (
    <ContentContainer>
      <Image src="./images/triple@2x.png" alt="trophy" />
      <Text>2021년 12월 기준</Text>
    </ContentContainer>
  )
}

export const ContentContainer = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 400px;
  height: 338px;
`

const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  top: 280px;
`

export default TrophyContent
