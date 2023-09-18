import {
    AiOutlineSearch,
    AiOutlineHome,
    AiOutlineUsergroupDelete,
  } from "react-icons/ai";
  import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
  import { RiNotification4Line } from "react-icons/ri";
  import { BsCardList, BsBookmark } from "react-icons/bs";
  import { CiCircleMore } from "react-icons/ci";
  
export const SideBarData = [
    { icon: <AiOutlineHome />, title: "Home" },
    { icon: <AiOutlineSearch />, title: "Explore" },
    { icon: <RiNotification4Line />, title: "Notifications" },
    { icon: <HiOutlineMail />, title: "Messages" },
    { icon: <BsCardList />, title: "Lists" },
    { icon: <BsBookmark />, title: "Bookmarks" },
    { icon: <AiOutlineUsergroupDelete />, title: "Communities" },
    { icon: <HiOutlineUser />, title: "Profile" },
    { icon: <CiCircleMore />, title: "More" },
]