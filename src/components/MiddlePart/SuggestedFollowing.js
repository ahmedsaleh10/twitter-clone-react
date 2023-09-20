import React from "react";
import SingleSuggestedFollowing from "./SingleSuggestedFollowing";

const SuggestedFollowing = ({ data }) => {
  return (
    <div className="followingContainer">
      <h4 className="white-text followingTitle">Who to follow</h4>
      {data.map((e, index) => (
        <SingleSuggestedFollowing key={index} data={e} />
      ))}
      <small className="text-info followingShowMore">Show more</small>
    </div>
  );
};

export default SuggestedFollowing;
