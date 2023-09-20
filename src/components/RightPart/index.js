import React from 'react'
import SuggestedLiked from './SuggestedLiked'
import {SuggestedLikedData} from "../../mockData/SuggestedLikedData"

const RightPart = () => {
  return (
    <div className='rightPartContainer'>
       <SuggestedLiked data={SuggestedLikedData}/>
      {/*<Trends /> */}
    </div>
  )
}

export default RightPart