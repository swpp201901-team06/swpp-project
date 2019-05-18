import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router' 
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const SideBar = ({ statefunction }) => {
	const onClickLogout = () => {
		onLogout();
	}
  let myArchiveUrl = "/"+statefunction.SignUpPage.nickname+"/archive"
  let myAccountUrl = "/"+statefunction.SignUpPage.nickname+"/account"
  const loggedInDisplay = (
    <div>
			<Button type="submit" onClick={onClickLogout}>{'Logout'}</Button>
      <Link to={myArchiveUrl}>
        <Button>{'My Archive'}</Button>
      </Link>

			<Link to={myAccountUrl}>
        <Button>{'My Account'}</Button>
      </Link>
		</div>
	);
  const notLoggedInDisplay = (
    <Link to="/signin">
      <Button>{'Sign In'}</Button>
    </Link>
  );
  return (
    statefunction.SignInPage.isLoggedIn ? loggedInDisplay : notLoggedInDisplay
	);
};

SideBar.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default SideBar
