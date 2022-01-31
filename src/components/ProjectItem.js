import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const span = technologies.technologies.map(tech => {
    console.log(tech)
    return <span key={technologies.id}>{tech}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{span}</div>
    </div>
  );
}

export default ProjectItem;
