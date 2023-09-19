import React from "react";
import Post from "./Post";
const options = ["Posts", "Replies", "Media", "Likes"];

const Posts = () => {
  return (
    <>
      <ul className="list">
        {options.map((option, index) => (
          <li>
            <small className={index === 0 ? "active white-text" : "gray-text"}>
              {" "}
              {option}
            </small>{" "}
          </li>
        ))}
      </ul>
      <Post
        reposted={true}
        numberOfComments={"46"}
        numberOfLikes={"3,175"}
        numberOfReposted={"675"}
        numberOfVote={"1.1M"}
        content={
            `danabramov.bsky.social
happy10th birthday to @reactjs! `
        }
      />
    </>
  );
};

export default Posts;
