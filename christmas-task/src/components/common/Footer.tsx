import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div>
          <a
            href="https://rs.school/"
            target="_blank"
            rel="noreferrer"
            className="Footer__rs-link"
          >
            RS School
          </a>
        </div>
        <div>
          <a
            href="https://github.com/alexpataman"
            target="_blank"
            rel="noreferrer"
            className="Footer__copy-link"
          >
            &copy; Alexander Pataman, 2021
          </a>
        </div>
      </footer>
    </>
  );
}
