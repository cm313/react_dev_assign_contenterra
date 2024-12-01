import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
     <div className="bg-orange-300 flex px-5 py-5 justify-between font-semibold font-serif">
    <Link to="/"><div>Home</div></Link>  
     <Link to="/about"><div>About</div></Link> 
     <Link to="/contactus"><div>ContactUs</div></Link> 
     </div>
    </div>
  )
}

export default Header