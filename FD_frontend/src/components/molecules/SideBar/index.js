import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router' 
import { font, palette } from 'styled-theme'
import SideBarButton from '../../atoms/SideBarButton'

export const SideBar = ({ statefunction, onLogout, onClickMyArchive, onClickMyAccount }) => {
	const onClickLogout = () => {
		window.localStorage.clear()
		window.location.href = '/'
  };
  let myArchiveUrl = "/"+statefunction.SignInPage.nickname+"/archive"
  let myAccountUrl = "/"+statefunction.SignInPage.nickname+"/account"
  const loggedInDisplay = (
    <div>
      <Link to="/guest">
	      <SideBarButton>Guest Page</SideBarButton>
	    </Link>
      <SideBarButton type="submit" onClick={onClickLogout}>Logout</SideBarButton>
      <SideBarButton
        onClick={() => { onClickMyArchive(statefunction.SignInPage.nickname) }}
      >
        My Archive
      </SideBarButton>
      <SideBarButton
        onClick={() => { onClickMyAccount(statefunction.SignInPage.nickname) }}
      >
        My Account
      </SideBarButton>
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
