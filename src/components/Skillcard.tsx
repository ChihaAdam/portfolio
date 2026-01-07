interface SkillCardProps {
  image: string;
  title: string;
}
function SkillCard({ image, title }: Readonly<SkillCardProps>) {
  return (
    <div
      className="group flex flex-col items-center bg-white/10 p-6 gap-4 rounded-xl md:backdrop-blur-sm 
      transform transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] md:animate-on-scroll cursor-pointer
      border border-white/10 hover:border-white/20"
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 lg:group-hover:animate-float">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain md:filter md:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        />
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-white/90 capitalize group-hover:text-white">
        {title}
      </h2>
    </div>
  );
}

export default SkillCard;
