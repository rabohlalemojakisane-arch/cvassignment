function Footer({ name, email }) {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {name}</p>
      <p>📧 {email}</p>
      <p>All rights reserved.</p>
    </footer>
  );
}
export default Footer;
