import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthModal from '../auth_modal/auth_modal'
import UserMenu from './top_bar_user_menu'
import EditMenu from './top_bar_edit_artist'

import {
  useSelector
} from 'react-redux'

export default (props) => {
  const currentUser = useSelector(state => state.entities.users[state.session.id])
  const authContent = (currentUser ? (
    <>
      <EditMenu />
      <UserMenu currentUser={currentUser} />
    </>
  ) : (
    <AuthModal />
  ))
  return (
    <header>
      <nav className='top-nav'>
        <div className='top-bar-logo-container'>
          <NavLink to='/'>
            <img src={window.logoURL} alt='WikiArt logo' className='top-bar-logo' />
          </NavLink>
        </div>
        <div className='top-bar-side-nav'>
          {authContent}
        </div>
      </nav>
    </header>
  )
}
