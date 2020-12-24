import React from 'react'
import './Footer.css'
import LinkedInLogo from '../icons/003-linkedin-logo.svg'
import FacebookLogo from '../icons/004-facebook-app-logo.svg'
import TwitterLogo from '../icons/005-twitter.svg'

function Header() {
  return (
    <>
      <div className='page-no-container'>
        <span className='current-page'>03</span>
        <span className='total-pages'>/07</span>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/">
        <img 
          src={LinkedInLogo} 
          alt="LinkedInLogo"
        />
        </a>
        <a href="https://www.facebook.com/">
        <img 
          src={FacebookLogo} 
          alt="FacebookLogo" 
        />
        </a>
        <a href="https://www.twitter.com/">
        <img 
          src={TwitterLogo} 
          alt="TwitterLogo" 
        />
        </a>
    </div>
    </>
  )
}

export default Header
