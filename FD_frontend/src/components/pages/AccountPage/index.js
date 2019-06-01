import React from 'react'

class AccountPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.params.nickname}
        's account page
     </div>
    )
  }
}

export default AccountPage
