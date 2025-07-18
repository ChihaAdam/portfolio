function Card({ image, title }: { image: string; title: string }) {
  return (
    <div
      className="group flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 p-6 gap-4 rounded-xl backdrop-blur-sm 
      transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-on-scroll cursor-pointer
      border border-white/10 hover:border-white/20"
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 group-hover:animate-float">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        />
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-white/90 capitalize group-hover:text-white">
        {title}
      </h2>
    </div>
  );
}

export default Card;
