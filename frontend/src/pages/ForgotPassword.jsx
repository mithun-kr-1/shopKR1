import React from 'react'
import { Link} from 'react-router-dom'
import "../style/forgotPassword.css"

const ForgotPassword = () => {
  return (
    <div>
      <div className='para'>
        <p>Try to Contact Store Owner</p>
        <p >
            Tel: +91 00000 00000 <br />
            Fax: +91 00000 00000 <br />
            Email: contactus@krmart.com
          </p>
        <Link to="/contact" >
        <button>Contact</button>
         </Link> 
      </div><br />
      <br/>
      <br/>
      <br/>
    </div>
    
  )
}

export default ForgotPassword
