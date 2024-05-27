/* src\components\Pages\Team\Team\Team.jsx */
import "./Team.css";
import {
  TeamMember1,
  TeamMember2,
  TeamMember3,
  TeamMember4,
  TeamMember5,
  TeamMember6,
} from "../../../../assets/images";

import AnimateBottomToTop from "../../../Effect/AnimateBottomToTop/AnimateBottomToTop.jsx";
import TeamSocialIcons from "../TeamSocialIcons.jsx";

import React from "react";
import { Link } from "react-router-dom";

function Team() {
  const teamMembers = [
    {
      name: "Chris Evans",
      designation: "Project Manager",
      image: TeamMember1,
      link: "/team/chris-evans",
    },
    {
      name: "Isabella Clark",
      designation: "Project Manager",
      image: TeamMember2,
      link: "/team/isabella-clark",
    },
    {
      name: "Olivia Taylor",
      designation: "Creative Director",
      image: TeamMember3,
      link: "/team/olivia-taylor",
    },
    {
      name: "Ethan Cooper",
      designation: "Sales Representative",
      image: TeamMember4,
      link: "/team/ethan-cooper",
    },
    {
      name: "Grace Adams",
      designation: "Senior Developer",
      image: TeamMember5,
      link: "/team/grace-adams",
    },
    {
      name: "Alex Robinson",
      designation: "Senior Designer",
      image: TeamMember6,
      link: "/team/alex-robinson",
    },
  ];

  const handleHover = (e) => {
    let teamCardContentWrap = e.target.querySelector(".team-card-content-wrap");
    if (teamCardContentWrap) {
      teamCardContentWrap.style.height = `${teamCardContentWrap.scrollHeight}px`;
    }
  };

  const handleOut = (e) => {
    let teamCardContentWrap = e.target.querySelector(".team-card-content-wrap");
    if (teamCardContentWrap) {
      teamCardContentWrap.style.height = "0px";
    }
  };

  return (
    <div>
      {/* <RestoreHeightInPage /> */}
      <AnimateBottomToTop>
        <section className="team-section">
          <div className="w-layout-blockcontainer container w-container">
            <div className="align-center animate-bottom-to-top">
              <h1 className="banner-title bright">Our Special Team</h1>
            </div>
            <div className="team-wrap">
              <div className="w-dyn-list">
                <div className="w-dyn-items w-row">
                  {teamMembers.map((member, index) => (
                    <div
                      className="team-collection-item w-dyn-item w-col w-col-4 animate-bottom-to-top"
                      key={index}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleOut}
                    >
                      <div className="team-linear-card">
                        <div className="team-card">
                          <Link
                            to={member.link}
                            className="team-image-wrap w-inline-block"
                          >
                            <img
                              src={member.image}
                              alt="Team Image"
                              className="team-image"
                            />
                          </Link>
                          <div className="team-card-content-wrap">
                            <div>
                              <Link to={member.link} className="team-card-name">
                                {member.name}
                              </Link>
                              <p className="team-card-designation">
                                {member.designation}
                              </p>
                            </div>
                            <TeamSocialIcons />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="team-section-button-wrap animate-bottom-to-top">
              <Link
                to={"/contact"}
                className="gradient-change-button w-inline-block"
              >
                <div className="gradient-change-text">Join Our team</div>
                <div className="gradient-change-hover"></div>
              </Link>
            </div>
          </div>
        </section>
      </AnimateBottomToTop>
    </div>
  );
}

export default Team;
