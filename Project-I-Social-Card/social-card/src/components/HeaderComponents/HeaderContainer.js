import React from 'react'
import ReactDOM from 'react-dom'
import './Header.css'
// import ImageThumbnail from './ImageThumbnail'
import HeaderContent from './HeaderContent'
// import HeaderTitle from './HeaderTitle'

const HeaderContainer = () => {
  return `<div className='container-header'>
      
      <HeaderTitle />
      <HeaderContent />
    </div>`
}

export default HeaderContainer
