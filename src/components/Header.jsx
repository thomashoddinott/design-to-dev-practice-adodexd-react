import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <div className='logo'>
        {"Travel & Co"}
      </div>
      <div className='button-position'>
        <button
          onClick={() => alert('Sign me up!')}
        >Sign Up
        </button>
      </div>
    </>
  )
}

export default Header
