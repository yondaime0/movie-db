import React from "react";
import Skeleton from "react-loading-skeleton";

const Actors = ({ data }) => {
  const [profileIsLoaded, setProfileIsLoaded] = React.useState(false);

  return (
    <div className="actor-block">
      <div className="actor-block-profile">
        {data.profile_path && (
          <img
            className={`actor-block-profile-img ${
              !profileIsLoaded ? "hidden" : ""
            }`}
            src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
            onLoad={() => setProfileIsLoaded(true)}
            alt="profile"
          />
        )}
        <Skeleton
          className={`actor-block-profile-img ${
            profileIsLoaded ? "hidden" : ""
          }`}
          width={120}
          height={180}
        />
      </div>
      <div className="actor-block-name">{data.name}</div>
      <div className="actor-block-character">{data.character}</div>
    </div>
  );
};
export default Actors;
