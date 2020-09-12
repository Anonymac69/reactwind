import React from 'react'
import {Link} from 'react-router-dom'


function NavMenu(props) {
  return (
    <div>
      <div className='font-bold py-3'>This is the Menu</div>

      {/* This List just contain links that require Switch & Routes to fully function */}
      <ul>
        <li><Link onClick={props.closeMenu} to='/' className='text-blue-500 py-3 border-t border-b block'>Home</Link></li>
        <li><Link onClick={props.closeMenu} to='/about' className='text-blue-500 py-3 border-b block'>About</Link></li>
        <li><Link onClick={props.closeMenu} to='/contact' className='text-blue-500 py-3 border-b block'>Contact</Link></li>
      </ul>

    </div>
  )
}

export default NavMenu