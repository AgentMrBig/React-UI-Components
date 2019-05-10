import React from 'react'
import './Header.css'

// import moment from 'moment'
// const time = moment()

const HeaderTitle = () => {
  return (
    <div className='header-title-wrapper'>
      <div className='header-title'>
        Lambda School
        <span className='time-stamp'>time</span>
      </div>
    </div>
  )
}

export default HeaderTitle
