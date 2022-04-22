const Footer = (props) => {
  return (
    <footer className="card--footer" style={{ background: props.background }}>
      <a href="https://twitter.com/eddith_nk21" target="_blank">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="https://www.facebook.com/thurasittnaing.me/" target="_blank">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/eddith_nk21/" target="_blank">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="https://github.com/coding2am" target="_blank">
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
};

export default Footer;
