function Header({ name, title, contact }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <div className="contact-bar">
        <span>📧 {contact.email}</span>
        <span>📞 {contact.phone}</span>
        <span>📍 {contact.location}</span>
      </div>
    </header>
  );
}
export default Header;
