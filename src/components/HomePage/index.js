import React from 'react'
import LeftPart from '../LeftPart'
import MiddlePart from '../MiddlePart'
import RightPart from '../RightPart'

const HomePage = () => {
  return (
    <div className='homePage'>
        <LeftPart/>
        <MiddlePart/>
        <RightPart/>
    </div>
  )
}

export default HomePage