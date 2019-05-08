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
	if(statefunction.LoggedIn)
	{
		return (
			<div>
				<Button type="submit" onClick={onClickLogout}>{'Logout'}</Button>
				<Button component={Link} raised to="/archive/"+usertoken>{'My Archive'}</Button>
				<Button component={Link} raised to="/account/"+usertoken>{'My Account'}</Button>
			</div>
		)
	}
	
	return (
		<Button component={Link} raised to="/">{'Sign In'}</Button>
	);
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
