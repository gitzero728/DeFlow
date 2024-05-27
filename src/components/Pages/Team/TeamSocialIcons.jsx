import React from "react";
import { Link } from "react-router-dom";
import { TeamFaceBookIcon, TeamTwiterIcon } from "../../../assets/images";

function TeamSocialIcons() {
  return (
    <div className="team-social-icon-wrap">
      <Link
        to={"https://www.facebook.com"}
        target="_blank"
        className="team-wrap-social-link w-inline-block"
      >
        <div className="team-wrap-social-area">
          <div className="footer-social-icon-wrap">
            <img
              src={TeamFaceBookIcon}
              alt="FB Icon"
              className="footer-social-icon"
            />
          </div>
        </div>
      </Link>
      <Link
        to={"https://www.twitter.com"}
        target="_blank"
        className="team-wrap-social-link w-inline-block"
      >
        <div className="team-wrap-social-area">
          <div className="footer-social-icon-wrap">
            <img
              src={TeamTwiterIcon}
              alt="Twitter Icon"
              className="footer-social-icon"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TeamSocialIcons;
