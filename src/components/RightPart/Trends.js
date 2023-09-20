import React from 'react'
import SingleTrend from './SingleTrend'

const Trends = ({data}) => {
  return (
    <div className='trendsSection'>
      <h4 className="white-text likedTrends">Trends for you</h4>
      {data.map((item,index) => {
        return(
          <SingleTrend key={index} name={item.name} numberOfPosts={item.numberOfPosts} dir={item.dir} />
        )
      })}
      <small className="text-info trendsShowMore">Show more</small>
    </div>
  )
}

export default Trends