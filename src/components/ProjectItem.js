import React from "react";

function ProjectItem({ name, about, technologies}) {
  console.log(name)
  let i=0
  const technologiesSpanned = technologies.map(technology => {
    return (<span key={technology}>{technology}</span>)
    i = i+1
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesSpanned}
      </div>
    </div>
  );
}

export default ProjectItem;
