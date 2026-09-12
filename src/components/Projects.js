function Projects({ projects }) {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies}</p>
        </div>
      ))}
    </section>
  );
}
export default Projects;
