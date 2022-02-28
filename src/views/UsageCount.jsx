import styled from 'styled-components'
import useCount from '../hooks/useCount'

const UsageCount = () => {
  const users = useCount(0, 350)
  const review = useCount(0, 21)
  const schedule = useCount(0, 650)

  return (
    <CountContainer>
      <Text>
        <span>{users}만 명</span>의 여행자
      </Text>
      <Text>
        <span>{review}만 개</span>의 여행 리뷰
      </Text>
      <Text>
        <span>{schedule}만 개</span>의 여행 일정
      </Text>
    </CountContainer>
  )
}

export const CountContainer = styled.div`
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
