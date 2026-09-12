function Education({ educationList }) {
  return (
    <section>
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <div className="edu-item" key={index}>
          <h3>{edu.qualification}</h3>
          <p className="meta">{edu.institution} | {edu.year}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </section>
  );
}
export default Education;
