import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'


const Login = () => {
  
  const{name , setUserName}=useContext(UserContext)

  return (
    
    <div>
     
      <input type="text"  value={name} onChange={(e)=> setUserName(e.target.value)} className='border-2 border-solid border-black'  />
      
    </div>
  )
}

export default Login
