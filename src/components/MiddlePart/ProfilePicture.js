import { BsThreeDots } from "react-icons/bs";
import { MdOutlineNotificationAdd } from "react-icons/md";

const ProfilePicture = ({srcOfPicture}) => {
  return (
    <div>
    <img
      className="coverPicture"
      src={srcOfPicture.profileBackGround}
      alt=""
    />
    <div className="bottomIcon">
      <img className="profileImg" src={srcOfPicture.profile} alt="" />
      <div className="icons">
        <BsThreeDots className="border white-text" />
        <MdOutlineNotificationAdd className="border white-text" />
        <h4 className="following white-text">Following</h4>
      </div>
    </div>
  </div>
  )
}

export default ProfilePicture