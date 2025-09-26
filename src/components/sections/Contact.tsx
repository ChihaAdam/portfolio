import social from "../../data/social.json"




const Contact = () => {
  return (
    <div className="py-2 lg:px-16 flex flex-col mx-auto gap-3 items-center" id="contact">
    <h2 className="text-5xl font-bold mb-12 text-center text-gradiant max-md:text-4xl">Contact</h2>
      <div className="flex max-sm:flex-col justify-arround gap-4 w-full px-4">
        {
        social.map((item, index) => (
          <div key={index} className="flex flex-1 items-center justify-center gap-4 transition-color duration-300 ease-in-out hover:text-white cursor-pointer md:hover:scale-105 bg-white/10 px-4 py-2 rounded-lg">
            <img src={item.icon} alt={item.text} className="w-8 h-8 " />
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl flex-1 max-md:text-lg font-bold w-full">{item.text}</a>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Contact;
