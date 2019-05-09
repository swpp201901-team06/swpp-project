import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const SideBar = ({ statefunction, }) => {
	const onClickLogout = () => {
		onLogout();
	}
	return (
    {statefunction.SignInPage.isLoggedIn ?
		<div>
			<Button type="submit" onClick={onClickLogout}>{'Logout'}</Button>
			<Button component={Link} raised to="/archive/"+usertoken>{'My Archive'}</Button>
			<Button component={Link} raised to="/account/"+usertoken>{'My Account'}</Button>
		</div> : <Button component={Link} raised to="/signin">{'Sign In'}</Button>}
	)
};

const SideBar = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

SideBar.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SideBar
