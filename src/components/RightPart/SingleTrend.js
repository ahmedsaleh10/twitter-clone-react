import React from 'react'

const SingleTrend = ({name,numberOfPosts,dir}) => {
  return (
    <div className='singleTrend'>
        <h4 dir={dir} className='white-text trendName' > {name} </h4>
        <small>{numberOfPosts} Posts </small>
    </div>
  )
}

export default SingleTrend