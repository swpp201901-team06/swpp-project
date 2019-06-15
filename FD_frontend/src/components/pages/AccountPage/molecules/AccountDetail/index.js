import React, { PropTypes } from 'react'
import styled from 'styled-components'
// import { font, palette } from 'styled-theme'
// import Button from '../../atoms/Button'
// import DCButton from '../../atoms/DCButton'
import SubmitButton from '../../atoms/SubmitButton'
import Dropdown from 'react-dropdown'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`
const browncolor = {
  color: '#e0ba7c',
}

export class AccountDetail extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    console.log(this.props.children)
    this.props.onAccountLoad(this.props.children)
  }
  
  render() {
    let email
    let pw
    let confirmpw
    let nickname
    let emailText
    let usernameText
    let currentEmail
    let currentPW
    let currentPW2
    let currentNickname
    
    let defaultOption
    if(this.props.statefunction.AccountPage.pubStatus) {
      defaultOption = 'Public'
    }
    else {
      defaultOption = 'Private'
    }
    
    const options = [
      'Public', 'Private',
    ]

    if (this.props.statefunction.SignUpPage.emailText) {
      emailText = this.props.statefunction.SignUpPage.emailText
    } else {
      emailText = ''
    }

    if (this.props.statefunction.SignUpPage.usernameText) {
      usernameText = this.props.statefunction.SignUpPage.usernameText
    } else {
      usernameText = ''
    }
    
    if (this.props.statefunction.AccountPage.email) {
      currentEmail = this.props.statefunction.AccountPage.email
    } else {
      currentEmail = JSON.parse(localStorage.getItem('email'))
    }
    
    if (this.props.statefunction.AccountPage.password) {
      currentPW = this.props.statefunction.AccountPage.password
    } else {
      currentPW = JSON.parse(localStorage.getItem('password'))
    }
    
    if (this.props.statefunction.AccountPage.confirmpw) {
      currentPW2 = this.props.statefunction.AccountPage.confirmpw
    } else {
      currentPW2 = JSON.parse(localStorage.getItem('password'))
    }
    
    if (this.props.statefunction.AccountPage.nickname) {
      currentNickname = this.props.statefunction.AccountPage.nickname
    } else {
      currentNickname = JSON.parse(localStorage.getItem('nickname'))
    }
    
    const onInputChange = (e) => {
      this.props.onChangeAccountInput(e.target.name, e.target.value)
    }

    const onSubmit = () => {
      this.props.onAccountChange(this.refs.email.value, this.refs.password.value, this.refs.confirmpw.value, this.refs.nickname.value, this.props.statefunction.AccountPage.pubStatus)
    }
    const handleEmailChange = () => {
      if (email.value) {
        setTimeout(() => { handleChange('email', email.value) }, 300)
      }
    }
    const handleNicknameChange = () => {
      if (nickname.value) {
        setTimeout(() => { handleChange('username', nickname.value) }, 300)
      }
    }

    return (
      <div>
        <Wrapper>
          <h4 style={browncolor}>
            Email
            {' '}
            <input
              value={currentEmail}
              onChange={(e) => onInputChange(e)}
              name="email"
              ref="email"
              style={{paddingleft:"100px"}}
            />
            {'     '}
            {emailText}
          </h4>
          <h4 style={browncolor}>
            Password
            {' '}
            <input
              type="password"
              value={currentPW}
              onChange={(e) => onInputChange(e)}
              name="password"
              ref="password"
              style={{paddingleft:"100px"}}
            />
          </h4>

          <h4 style={browncolor}>
            Confirm Password
            {' '}
            <input
              type="password"
              value={currentPW2}
              onChange={(e) => onInputChange(e)}
              name="confirmpw"
              ref="confirmpw"
              style={{paddingleft:"100px"}}
            />
          </h4>

          <h4 style={browncolor}>
            Nickname
            {' '}
            <input
              value={currentNickname}
              onChange={(e) => onInputChange(e)}
              name="nickname"
              ref="nickname"
              style={{paddingleft:"100px"}}
            />
            {'     '}
            {usernameText}
          </h4>
	        <Dropdown name="publicStatus" options={options} onChange={(e) => onInputChange(e)} value={defaultOption} placeholder="Select an option" />
          <h4 style={browncolor}>
            <SubmitButton type="submit" onClick={onSubmit}>
              Submit
            </SubmitButton>
          </h4>
        </Wrapper>
      </div>
    )
  }
}

/* <DCButton type="submit" onClick={onECheck}>Email Check</DCButton> {' '}{emailText}
<DCButton type="submit" onClick={onNCheck}>Nickname Check</DCButton>{' '}{usernameText} */
AccountDetail.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}
/* export default signUp */
