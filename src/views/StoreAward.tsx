import styled from 'styled-components'

export const AwardContainer = styled.div`
  display: flex;
`

const StoreContainer = styled.div`
  display: flex;
  margin-right: 39px;

  &:last-child {
    margin-right: 0;
  }
`

const Image = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 8px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.p`
  line-height: 22px;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
`

const StoreAward = () => {
  return (
    <AwardContainer>
      <StoreContainer>
        <Image src="./images/play-store@2x.png" alt="google" />
        <TextContainer>
          <Text>2018 구글 플레이스토어</Text>
          <Text>올해의 앱 최우수상 수상</Text>
        </TextContainer>
      </StoreContainer>
      <StoreContainer>
        <Image src="./images/app-store@2x.png" alt="apple" />
        <TextContainer>
          <Text>2018 애플 앱스토어</Text>
          <Text>오늘의 여행앱 선정</Text>
        </TextContainer>
      </StoreContainer>
    </AwardContainer>
  )
}

export default StoreAward
