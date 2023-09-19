import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

const Details = ({name,aliasName,description,link,dateOfJoined,numberOfFollowing,numberOfFollowers,mutualFriends}) => {
  return (
    <div className="details">
    <div className="nameAndAlias">
      <h3 className="white-text">{name}</h3>
      <small>{aliasName}</small>
    </div>
    <p className="white-text description">
      {description}
    </p>
    <div className="link">
      <AiOutlineLink className="gray-text detailsIcons" />
      <a href={link} className="blueColor">
        {`${name}.dev`}
      </a>
      <BsCalendar3 className="gray-text detailsIcons" />
      <small>Joined {dateOfJoined}</small>
    </div>
    <div className="numberFollow">
      <h3 className="white-text">{numberOfFollowing} 
       <small> Following</small>
       </h3>
      <h3 className="white-text">{numberOfFollowers} 
      <small> Followers</small>
      </h3>
    </div>
    <div className="footer">
      <div className="imgBox">
        <img className="img1" src="/assets/reactLogo.png" alt="" />
        <img className="img2" src="/assets/twitterLogo.jpg" alt="" />
      </div>
      <small>
        Followed By {mutualFriends}
      </small>
    </div>
  </div>
  )
}

export default Details