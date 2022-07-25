import React from 'react'

import useInput from '../../hooks/useInput'

const Login = () => {
  const [username, handleUsername] = useInput("");
  const [password, handlePassword] = useInput("");

  return (
    <div className='auth-form-wrapper'>
      <form action="">
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username"
          {...(typeof handleUsername === 'object' ? handleUsername : {})}/>

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          {... (typeof handlePassword === 'object' ? handlePassword : {})}/>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default Login