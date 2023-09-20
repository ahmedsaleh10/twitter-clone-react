import React from 'react'
import SuggestedLiked from './SuggestedLiked'
import {SuggestedLikedData} from "../../mockData/SuggestedLikedData"
import { TrendData } from '../../mockData/TrendsData'
import Trends from './Trends'
const RightPart = () => {
  return (
    <div className='rightPartContainer'>
        <SuggestedLiked data={SuggestedLikedData}/>
        <Trends data={TrendData} />
    </div>
  )
}

export default RightPart