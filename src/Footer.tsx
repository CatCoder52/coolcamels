import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p>© 2022 Cool Camels. The Coolest to ever do it.</p>
      <div className='social'>
        <a className='sl' href='https://www.facebook.com/QodeInteractive/'>
          <span>Fb.</span>
        </a>
        <a className='sl' href='https://www.instagram.com/qodeinteractive/'>
          <span>In.</span>
        </a>
        <a className='sl' href='https://twitter.com/QodeInteractive'>
          <span>Tw.</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer