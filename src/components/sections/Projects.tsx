import ProjectsList from "../../data/projects.json"
import ProjectCard from "../ProjectCard"


function Projects() {
  return (
    <div className="flex flex-col items-center justify-center px-2 lg:py-16  max-w-7xl mx-auto">
    <h2 className="text-5xl text-gradiant text-center font-bold max-md:text-4xl">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {ProjectsList.map((project,index) => (
        <ProjectCard key={index} data={project} />
      ))}
    </div>
    </div>
  )
}

export default Projects
