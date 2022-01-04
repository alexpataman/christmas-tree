import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div>
          <a
            href="https://rs.school/"
            target="_blank"
            rel="noreferrer"
            className="rs-link"
          >
            RS School
          </a>
        </div>
        <div>
          <a
            href="https://github.com/alexpataman"
            target="_blank"
            rel="noreferrer"
            className="copy-link"
          >
            &copy; Alexander Pataman, 2021
          </a>
        </div>
      </div>
    </footer>
  );
};
