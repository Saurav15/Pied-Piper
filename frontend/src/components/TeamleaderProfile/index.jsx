import React from "react";
import ProfileCard from "../UI/ProfileCard";
import Avatar from "../../assests/images/483361.png";
import "./TeamLeader.css";
function TeamLeaderProfile() {
  return (
    <ProfileCard>
      <img
        className="custom-margin"
        height={60}
        width={60}
        src={Avatar}
        alt="No preview available"
      />
      <h5 className="custom-margin">Name</h5>
      <h6 className="custom-margin">E-mail</h6>
      <div className="custom-margin card d-flex flex-wrap w-200">
        <div>
          Projects
          <div className="d-flex flex-wrap">
            <div className="p-2 card m-2">
              Previous Projects:
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                enim cupiditate sapiente sint officiis vel voluptatem tempora
                dolores eius provident officia debitis saepe sed, nobis
                aspernatur reprehenderit illum pariatur ipsam.
              </div>
            </div>
            <div className="p-2 card m-2">
              Ongoing Projects:
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                enim cupiditate sapiente sint officiis vel voluptatem tempora
                dolores eius provident officia debitis saepe sed, nobis
                aspernatur reprehenderit illum pariatur ipsam.
              </div>
            </div>
            <div className="p-2 card m-2">
              Upcoming Projects:
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                enim cupiditate sapiente sint officiis vel voluptatem tempora
                dolores eius provident officia debitis saepe sed, nobis
                aspernatur reprehenderit illum pariatur ipsam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileCard>
  );
}

export default TeamLeaderProfile;
