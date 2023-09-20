import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import SingleSuggestedFollowing from "../MiddlePart/SingleSuggestedFollowing"
const SuggestedLiked = ({data}) => {
  return (
    <div>
        <div className="searchBar">
            <AiOutlineSearch className="gray-text icon" />
            <small>Search</small>
        </div>
      <div className="likedSection mb-4">
        <h4 className="white-text likedTitle">You might like</h4>
        {data.map((e, index) => (
          <SingleSuggestedFollowing key={index} data={e} />
        ))}
        <small className="text-info likedShowMore">Show more</small>
      </div>
    </div>
  )
}

export default SuggestedLiked