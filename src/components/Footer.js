import React from "react";
import { footerLinkData } from "../data";

const Footer = () => {
  return (
    <div>
      <footer class="section footer">
        <ul class="footer-links">
          {footerLinkData.map((link) => footerLinkUi(link))}
        </ul>
        <ul class="footer-icons">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              class="footer-icon"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              class="footer-icon"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              class="footer-icon"
            >
              <i class="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
        <p class="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;

function footerLinkUi(link) {
  return (
    <li id={link.id}>
      <a href={link.href} class="footer-link">
        {link.text}
      </a>
    </li>
  );
}
