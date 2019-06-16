import React, { PropTypes } from 'react'
import { Link } from 'react-router' 
import SideBarButton from '../../atoms/SideBarButton'

export const SideBar = ({ statefunction, onLogout, onClickMyArchive }) => {
  const onClickLogout = () => {
    window.localStorage.clear()
    window.location.href = '/'
  }
  // let myArchiveUrl = `/${statefunction.SignInPage.nickname}/archive`
  const myAccountUrl = `/${statefunction.SignInPage.nickname}/account`
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

      <Link to={myAccountUrl}>
        <SideBarButton>My Account</SideBarButton>
      </Link>
    </div>
  )
  const notLoggedInDisplay = (
    <Link to="/signin">
      <SideBarButton>Sign In</SideBarButton>
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
