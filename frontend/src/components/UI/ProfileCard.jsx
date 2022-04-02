import React from "react";
import css from "./ProfileCard.module.css";
function ProfileCard({ children }) {
  return <div className={css["card"]}>{children}</div>;
}

export default ProfileCard;
