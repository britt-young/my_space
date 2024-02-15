import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const styles = {
  footerStyles: {
    minHeight: "100px",
    background: "#353535",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
 linkStyles: {

 } 
};

const Footer = () => {
  return (
    <footer style={styles.footerStyles} className="p-3 mt-5">
      <a
        href="https://github.com/britt-young"
        style={styles.linkStyles}
        className="m-3"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/brittney-young-a1962a228/"
        style={styles.linkStyles}
        className="m-3"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://stackoverflow.com/"
        style={styles.linkStyles}
        className="m-3"
      >
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>
    </footer>
  );
};

export default Footer;
