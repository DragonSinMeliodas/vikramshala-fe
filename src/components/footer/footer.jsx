import React from "react";
import { NAVBAR_LOGO } from "../../constants/navBarConstants";
export default function footer() {
  return (
    <footer className="footer flex">
      <div className="footer-left">
        <img src={NAVBAR_LOGO.iconPath} alt={NAVBAR_LOGO.title} />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, quas
          temporibus voluptatem consectetur quidem nemo sit perferendis,
          dignissimos tenetur
        </p>
        <div className="socials">
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <ul className="footer-right flex">
        <li>
          <h2>Media Coverage</h2>
          <ul>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Media Coverage</a>
            </li>
            <li>
              <a href="#">Photo Gallery</a>
            </li>
          </ul>
        </li>
        <li className="features">
          <h2>Other Links</h2>
          <ul>
            <li>
              <a href="#">Placement Portal</a>
            </li>
            <li>
              <a href="#">Recruiters Section</a>
            </li>
            <li>
              <a href="#">Parents Section</a>
            </li>
            <li>
              <a href="#">Students Section</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </li>
        <li>
          <h2>Download</h2>
          {/* <ul>
            <li>
              
            </li>
          </ul> */}
          <div className="socials">
            <a href="#">
              <i className="fab fa-apple"></i>
            </a>
            <a href="#">
              <i className="fab fa-android"></i>
            </a>
            <a href="#">
              <i className="fab fa-blackberry"></i>
            </a>
          </div>
        </li>
      </ul>
    </footer>
  );
}
