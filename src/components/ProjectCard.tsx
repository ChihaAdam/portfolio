type ProjectDetailsProps = {
  title: string,
  description: string,
  demo: string,
  repository: string,
  snapshot: string
}
function ProjectCard({ data }: { data: ProjectDetailsProps }) {
  return (
    <div className="flex flex-col items-center justify-between animate-on-scroll hover:scale-105 transition-all duration-300 cursor-pointer bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl">
      <div className="flex flex-col gap-2">
        <img
          src={data.snapshot}
          alt={data.title}
          className=" rounded-md"
        />
        <h1 className="text-2xl font-bold text-center">{data.title}</h1>
      </div>
      <p className="text-center text-gray-500">{data.description}</p>
      <div className="flex items-center justify-center gap-4 transition-color duration-300 ease-in-out">
        <a
          href={data.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition-color duration-300 ease-in-out"
        >
          Demo
        </a>
        <a
          href={data.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          Repository
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
