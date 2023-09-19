import React from 'react'
import Reposted from './Reposted';
import { BiRepost, BiBarChart } from "react-icons/bi";
import {FaRegComment} from "react-icons/fa"
import { GiSelfLove } from "react-icons/gi";
import { GoShare } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

const Post = ({user,content,numberOfComments,numberOfLikes,numberOfReposted,numberOfVote,reposted}) => {
  return (
    <div>
        {reposted && <Reposted/>}

        <div className="post">
            <div className="content ms-2">
            <img className="contentImg" src="/assets/reactLogo.png" alt={user} />
            <pre className="contentBox white-text">
                {content}
            </pre>
            </div>
        <BsThreeDots className="white-text icon contentIcon" />
      </div>

        <div className="iconList">
          <div className="iconItem">
            <FaRegComment className="gray-text icon" />
            <small>{numberOfComments}</small>
          </div>
          <div className="iconItem">
            <BiRepost className="gray-text icon"/>
            <small>{numberOfReposted}</small>
          </div>
          <div className="iconItem">
            <GiSelfLove className="gray-text icon" />
            <small>{numberOfLikes}</small>
          </div>
          <div className="iconItem"> 
            <BiBarChart className="gray-text icon" />
            <small>{numberOfVote}</small>
          </div>
          <GoShare className="gray-text icon" />
      </div>
    </div>
  )
}

export default Post