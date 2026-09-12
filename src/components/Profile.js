function Profile({ name, title, summary }) {
  return (
    <section className="profile">
      <h2>Profile</h2>
      <p><strong>{name}</strong></p>
      <p><em>{title}</em></p>
      <p>{summary}</p>
    </section>
  );
}
export default Profile;
