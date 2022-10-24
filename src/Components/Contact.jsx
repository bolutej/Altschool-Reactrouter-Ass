import React from "react";

const Contact = ({ user }) => {
  const image =
    user?.picture?.medium || user?.picture?.small || user?.picture?.large;

  return (
    <div className="all">
      <div>
        <div className="main">
          <img src={image} alt=" " width={200} className="img" />
          <div className="title">
            <h1>
              {user?.name?.title} {user?.name?.first} {user?.name?.last}
            </h1>
            <h3>Gender: {user?.gender}</h3>
          </div>

          <div className="row">
            <div className="left">
              <h4>Phone</h4>
              <p>{user?.cell}</p>
            </div>

            <div className="right">
              <h4>Age</h4>
              <p>{user?.dob?.age}</p>
            </div>
          </div>

          <div className="row">
            <div className="left">
              <h4>City</h4>
              <p>{user?.location?.city}</p>
            </div>

            <div className="right">
              <h4>Country</h4>
              <p>{user?.location?.country}</p>
            </div>
          </div>

          <div className="row">
            <div className="left">
              <h4>Email</h4>
              <p>{user?.email}</p>
            </div>

            <div className="right">
              <h4> State</h4>
              <p>{user?.location?.state}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
