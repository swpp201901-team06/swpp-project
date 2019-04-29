import React from 'react'
import signUp from '../../../containers/pages/SignUpPage/signUp'
import Button from '../../../components/pages/SignUpPage/atoms/Button'

const SignUpPage = () => {
console.log("loading sign up");
  return (
    <div>
      <Button type="submit">TEST</Button>
      <signUp/>
    </div>
  )
}

export default SignUpPage
