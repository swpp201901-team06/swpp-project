import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router' 
import { font, palette } from 'styled-theme'
import SideBarButton from '../../atoms/SideBarButton'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const SideBar = ({ statefunction, onLogout, onClickMyArchive }) => {
	const onClickLogout = () => {
		onLogout();
  };
  console.log('SideBar begin')
  console.log(statefunction.SignInPage)
  let myArchiveUrl = "/"+statefunction.SignInPage.nickname+"/archive"
  let myAccountUrl = "/"+statefunction.SignInPage.nickname+"/account"
  const loggedInDisplay = (
    <div>
	    <SideBarButton type="submit" onClick={onClickLogout}>Logout</SideBarButton>
      <SideBarButton
        onClick={() => { onClickMyArchive(statefunction.SignInPage.nickname) }}
      >
        My Archive
      </SideBarButton>

      <Link to={myAccountUrl}>
        <SideBarButton>My Account</SideBarButton>
      </Link>
    </div>
	)
  const notLoggedInDisplay = (
    <Link to="/signin">
      <SideBarButton>{'Sign In'}</SideBarButton>
    </Link>
  )
  return (
    statefunction.SignInPage.isLoggedIn ? loggedInDisplay : notLoggedInDisplay
	)
}

SideBar.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

/* export default SideBar */
