import React from "react";
import ProfileCard from "../UI/ProfileCard";
import './Employee.css'
import Avatar from "../../assests/images/483361.png";
function EmployeeProfile() {
  return (
    <ProfileCard>
      <img className="custom-margin" height={60} width={60} src={Avatar} alt="No preview available" />
      <h5 className="custom-margin">Name</h5>
      <h6 className="custom-margin">E-mail</h6>
      <div className="custom-margin card d-flex flex-wrap w-200">
        <div>
          Skills:
          <div className="d-flex flex-wrap">
            <div className="p-2 card m-2">skill-1</div>
            <div className="p-2 card m-2">skill-2</div>
            <div className="p-2 card m-2">skill-3</div>
            <div className="p-2 card m-2">skill-4</div>
          </div>
        </div>
      </div>
    </ProfileCard>
  );
}

export default EmployeeProfile;
