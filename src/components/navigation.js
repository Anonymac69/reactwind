import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import NavMenu from './navMenu'

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: 'translateX(-100%'},
    enter: { opacity: 1, transform: 'translateX(0%' },
    leave: { opacity: 0, transform: 'translateX(-100%' },
  })

  return (
    <nav>
      <Router>

        <span className='text-xl'>
          <FontAwesomeIcon onClick={() => setShowMenu(!showMenu)} icon={faBars} />
        </span>

        {
          maskTransitions.map(({ item, key, props }) => item && 
          <animated.div key={key} style={props} className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50' onClick={() => setShowMenu(false)}>
          </animated.div>
          )        
        }

        {
          menuTransitions.map(({ item, key, props }) => item && 
          <animated.div key={key} style={props} className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3'>          
            <NavMenu closeMenu={() => setShowMenu(false)} />
          </animated.div>
          )        
        }
      </Router>
    </nav>
  )
}

export default Navigation;