import styled from '@emotion/styled'

const StyledContainer = styled.div``

const Label = styled.p`
  margin-bottom: 7px;
`

const Amount = styled.p`
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
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
