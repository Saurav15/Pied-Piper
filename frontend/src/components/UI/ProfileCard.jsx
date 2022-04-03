import React from "react";
import Footer from "../Footer";
import Header from "../header";
import "./ProfileCard.css";
function ProfileCard(props) {
  // React.useEffect(() => {
  //   // Body Class for Page
  //   const body = document.querySelector("body");
  //   document.body.classList.add("profile-card-center");
  //   return () => {
  //     body.classList.remove("profile-card-center");
  //   };
  // }, []);
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="layout-container">{props.children}</div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileCard;
