import Header from "./Header";
import ProfilePicture from "./ProfilePicture";
import Details from "./Details";
import Posts from "./Posts";

const MiddlePart = ({ data }) => {
  return (
    <div className="middlePart">
      <Header name={data.name} numberOfPosts={data.numberOfPosts} />
      <ProfilePicture
        srcOfPicture={{
          profileBackGround: data.srcOfPictures.backGround,
          profile: data.srcOfPictures.profile,
        }}
      />
      <Details
        name={data.name}
        aliasName={data.alias}
        description={data.description}
        link={data.link}
        dateOfJoined={data.dateOfJoined}
        numberOfFollowing={data.numberOfFollowing}
        numberOfFollowers={data.numberOfFollowers}
        mutualFriends={data.mutualFriends}
      />
      <Posts/>
    </div>
  );
};

export default MiddlePart;
