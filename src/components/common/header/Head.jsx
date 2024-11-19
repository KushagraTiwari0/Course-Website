import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>LNC</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className="social">
            {/* <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i> */}

            {/* Login icon */}
            <Link to="/login">
              <i className="fas fa-user-circle icon"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
