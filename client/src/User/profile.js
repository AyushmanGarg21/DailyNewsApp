import React from "react";

const UserProfile = ({ fullName, email, profileImage, setcontainer }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
    <img src={profileImage ? profileImage : "images/profile.png"} className="card-img-top" alt="User Profile" />
    <div className="card-body">
        <h4 className="card-title">{fullName}</h4>
        <p className="card-text">{email}</p>
        <div className="d-flex justify-content-between align-items-center">
        <button
                className="btn btn-primary"
                onClick={() => {
                    setcontainer('main');
                }}
            >
                <img src="images\arrow.png" alt="....."/> Go Back
            </button>
        </div>
    </div>
</div>

  );
};

export default UserProfile;
