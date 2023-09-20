import React from "react";

const SingleSuggestedFollowing = ({ data }) => {
  return (
    <div className="SingleSuggestedFollowing">
      <div className="sharedFollowing">
        {data.user}
        <small>{data.title}</small>
      </div>
      <div className="followingUser">
        <div className="userContentBox">
          <img className="contentImg" src={data.img} alt="" />
            <div className="followingUserDetails">
              <h4 className="white-text">
                <span className="">{data.name} </span>
                {data.icon}
              </h4>
              <small>{data.type}</small>
              <p className="white-text followingUserDescription">{data.text}</p>
            </div>
        </div>
        <button className="followButton">Follow</button>
      </div>
    </div>
  );
};

export default SingleSuggestedFollowing;
