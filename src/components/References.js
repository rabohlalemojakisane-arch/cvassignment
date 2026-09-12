function References({ references }) {
  return (
    <section>
      <h2>References</h2>
      {references.map((ref, index) => (
        <div className="ref-item" key={index}>
          <h3>{ref.name}</h3>
          <p>{ref.position}</p>
          <p>📧 {ref.email}</p>
          <p>📞 {ref.phone}</p>
        </div>
      ))}
    </section>
  );
}
export default References;
