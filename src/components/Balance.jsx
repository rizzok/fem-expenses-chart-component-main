import styled from '@emotion/styled'

const StyledContainer = styled.div``

const Label = styled.p`
  margin-bottom: 5px;
`

const Amount = styled.p`
  font-size: 2rem;
  font-weight: 700;
`

const Balance = () => {
  return (
    <StyledContainer>
      <Label>My balance</Label>
      <Amount>$921.48</Amount>
    </StyledContainer>
  )
}

export default Balance
