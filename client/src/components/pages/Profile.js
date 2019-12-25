import React, { Component } from "react";
import LatestPost from "../modules/LatestPost.js";
import ProfilePicture from "../../public/corgi.jpg";

import "../../utilities.css";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Profile Page";
  }

  render() {
    const pfpStyle = {
      backgroundImage: `url(${ProfilePicture})`,
    };
    return (
      <>
        <div className="Profile-avatarContainer">
          <div style={pfpStyle} className="Profile-avatar" />
        </div>
        <h1 className="Profile-name u-textCenter">Shannen Wu</h1>
        <hr className="Profile-line" />
        <div className="u-flex">
          <div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle">About Me</h4>
            <div id="profile-description">
              I am really allergic to cats i don't know why i have a catbook
            </div>
          </div>
          <div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle">My Latest Post</h4>
            <LatestPost name="Shannen Wu" latestPost="Woof woof" id="ffffff" />
          </div>
          <div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
            <div id="favorite-cat">corgi</div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;