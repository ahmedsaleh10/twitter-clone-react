import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

const Header = ({name,numberOfPosts}) => {
  return (
    <div className="headerContent">
      <BsArrowLeft className="white-text" />
      <div>
        <h3 className="headerName white-text">{name}</h3>
        <small>{numberOfPosts} posts</small>
      </div>
    </div>
  )
}

export default Header