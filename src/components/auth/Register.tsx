import React from 'react'

import useInput from '../../hooks/useInput'

const Register = () => {
  const [username, handleUsername] = useInput("");
  const [password, handlePassword] = useInput("");
  const [email, handleEmail] = useInput("");
  return (
    <div className='auth-form-wrapper'>
      <form action="">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username"
          {...(typeof handleUsername === 'object' ? handleUsername : {})}
        />
        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          id="email"
          {...(typeof handleEmail === 'object' ? handleEmail : {})}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="text" 
          id="password"
          {...(typeof handlePassword === 'object' ? handlePassword : {})}
        />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  )
}

export default Register