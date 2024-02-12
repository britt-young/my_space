import React from "react";

const styles = {
    footerStyles:{
        minHeight: '100px',
        background: '#595959',
        display: 'flex',
        justifyContent: 'center'
    },
    imgStyles:{
        width: '20px',
        height: '20px'
    }
}

const Footer = () => {
  return (
    <footer style={styles.footerStyles} className="p-3 mt-5">
      <a
        href="https://github.com/britt-young"
        className="m-3"
        style={styles.imgStyles}
      >
        <img src="src\assets\github.png" alt="GitHub Icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/brittney-young-a1962a228/"
        className="m-3"
        style={styles.imgStyles}
      >
        <img src="src\assets\linkedin.png" alt="LinkedIn Icon" />
      </a>
      <a
        href="https://stackoverflow.com/"
        className="m-3"
        style={styles.imgStyles}
      >
        <img src="src\assets\stack-overflow.png" alt="StackOverflow Icon" />
      </a>
    </footer>
  );
}

export default Footer;

