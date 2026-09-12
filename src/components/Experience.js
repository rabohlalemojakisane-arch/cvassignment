function Experience({ experience }) {
  return (
    <section>
      <h2>Work Experience</h2>
      {experience.map((exp, index) => (
        <div className="exp-item" key={index}>
          <h3>{exp.position}</h3>
          <p className="meta">{exp.organisation} | {exp.year}</p>
          <ul>
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Experience;
