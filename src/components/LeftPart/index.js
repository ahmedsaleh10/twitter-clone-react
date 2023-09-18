import React from 'react'
import { SideBarData } from '../../mockData/SidebarData';
import MenuBox from './MenuBox';

const LeftPart = () => {
  const data = SideBarData;
  console.log(data)
  return (
    <div className="sideBar">
      <img src="/assets/twitterLogo.jpg" className="twitterLogo" alt="twitter logo" />
      {data.map((e, index) => (
        <MenuBox item={e} key={index} />
      ))}
      <div className="btn">Post</div>
    </div>
  )
}

export default LeftPart