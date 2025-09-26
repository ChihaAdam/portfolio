import SkillCard from "../Skillcard";
const skills = [
  "html",
  "css",
  "javascript",
  "typescript",
  "reactjs",
  "nextjs",
  "tailwindcss",
  "react-query",
  "redux",
  "shadcn",
  "nodeJs",
  "expressJs",
  "mongodb",
  "git",
  "github",
  "vscode",
  "vite",
];

function Skills() {
  return (
    <div
      className="lg:py-16 px-2 max-w-7xl mx-auto"
      id="skills"
    >
      <h2 className="text-5xl font-bold mb-12 text-center text-gradiant max-md:text-4xl">
        Technical Skills
      </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} image={`./skills/${skill}.svg`} title={skill} />
          ))}
        </div>
    </div>
  );
}

export default Skills;
