const BASE_URL = import.meta.env.BASE_URL || "";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        © 2024, from
        <a className="footer__link" href="https://binary-studio.com">
          binary studio
        </a>
        with
        <img className="footer__icon" src={`${BASE_URL}/assets/images/heart.svg`} alt="heart" />
      </span>
    </footer>
  );
};
export default Footer;
