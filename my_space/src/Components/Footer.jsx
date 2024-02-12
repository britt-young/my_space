import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footerStyles} className="p-3 mt-5">
      <a
        href="https://github.com/britt-young"
        className="m-3"
      >
        <img src="your_image_url" alt="GitHub Icon" />;
      </a>
      <a
        href="https://www.linkedin.com/in/brittney-young-a1962a228/"
        className="m-3"
      >
        <img src="your_image_url" alt="LinkedIn Icon" />;
      </a>
      <a
        href="https://stackoverflow.com/"
        className="m-3"
      >
        <img src="your_image_url" alt="StackOverflow Icon" />;
      </a>
    </footer>
  );
};

export default Footer;

