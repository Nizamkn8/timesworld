// footer 
import React from 'react'
import { Container } from 'react-bootstrap'
import SocialLoginButtons from '../../utils/SocialLoginButtons'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='site-footer'>
      <SocialLoginButtons />
      <div className="copy-right secondary-clr fw-bold text-center">
        <div className='footer-mail'>Example@email.com </div>
        <div>Copyright © 2020 Name. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
