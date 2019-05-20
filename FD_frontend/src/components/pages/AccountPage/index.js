import React from 'react'

const AccountPage =React.createClass({
  render () {
  return (
     <div>
       {this.props.params.nickname}
       's account page
     </div>
   )
  }
})

export default AccountPage
