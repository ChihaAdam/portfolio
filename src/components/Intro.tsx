import CountUp from "react-countup";
import Avatar from "./Avatar";
interface IntroProps {
  bio: string;
  avatar: string;
  public_repos: number;
}
function Intro({ bio, avatar, public_repos }: IntroProps) {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center py-10 fade-in gap-2 p-4 mb-10"
    >
      <h1 className="text-6xl font-bold text-center mb-10 text-gradiant max-md:text-4xl">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-center mb-6 max-w-4xl">
        My name is Chiha Adam .{bio}
      </p>
      <Avatar link={avatar} />
      <p className="text-center mt-4">
        Feel free to explore my work and get in touch!
      </p>
      <div className="bg-white/10 py-2 flex gap-2 justify-center items-center rounded-lg mt-6 max-lg:w-xs w-md">
        <span className="text-5xl font-bold flex justify-center items-center text-white border-r-1 p-2 border-r-white/50 w-24 text-center">
          <CountUp start={0} end={public_repos} duration={5} />
        </span>
        <div className="w-full">
          <p className="text-left text-white text-lg max-lg:text-md tracking-wide ">
            Public Repositories on Github
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
