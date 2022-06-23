import styled from '@emotion/styled'
import logo from '../images/logo.svg'

const StyledLogo = styled.img`
  margin-right: 6px;
`

const Logo = () => {
  return <StyledLogo src={logo} alt="logo" />
}

export default Logo
