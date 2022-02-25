import styled from 'styled-components'

const USERS = 350
const REVIEW = 21
const SCHEDULE = 650

const UsageCount = () => {
  return (
    <CountContainer>
      <Text>
        <span>{USERS}만 명</span>의 여행자
      </Text>
      <Text>
        <span>{REVIEW}만 개</span>의 여행 리뷰
      </Text>
      <Text>
        <span>{SCHEDULE}만 개</span>의 여행 일정
      </Text>
    </CountContainer>
  )
}

const CountContainer = styled.div`
  margin-bottom: 50px;
`

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  & > span {
    font-weight: bold;
  }
`

export default UsageCount
