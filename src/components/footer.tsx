function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Mena Jackson</span>
      <div>
        <a href="https://github.com/menamina" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/damenajackson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:dayjacs03@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
