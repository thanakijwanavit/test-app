import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="nav-center">
          <div class="nav-header">
            <img src={logo} class="nav-logo" alt="backroads" />
            <button type="button" class="nav-toggle" id="nav-toggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <ul class="nav-links" id="nav-links">
            {pageLinks.map((pageLink) => navLink(pageLink))}
          </ul>
          <ul class="nav-icons">{socialLinks.map(socialLinkUI)}</ul>
        </div>
      </nav>
    </div>
  );
};
function socialLinkUI(socialLink) {
  const { id, href, icon } = socialLink;
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
        <i className={icon}></i>
      </a>
    </li>
  );
}

const navLink = (pageLink) => {
  return (
    <div>
      <li>
        <a href={pageLink.href} class="nav-link">
          {" "}
          {pageLink.text}{" "}
        </a>
      </li>
    </div>
  );
};

export default Navbar;
