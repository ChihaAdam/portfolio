const social =[
  {
    link:"https://github.com/chihaadam",
    icon:"./skills/github.svg",
    text:"chihaadam"
  },
  {
    link:"https://www.linkedin.com/in/chiha-adam-582997324/",
    icon:"./linkedin.svg",
    text:"adam chiha"
  },
  {
    link:"mailto:chihaadam137@gmail.com",
    icon:"./gmail.svg",
    text:"chihaadam137@gmail.com"
  }
]




const Contact = () => {
  return (
    <div className="py-2 lg:px-16 flex flex-col max-w-7xl mx-auto gap-3 items-center" id="contact">
    <h2 className="text-5xl font-bold mb-12 text-center text-gradiant max-md:3xl">Contact</h2>
      {
        social.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-4 transition-color duration-300 ease-in-out hover:text-white cursor-pointer hover:scale-105 bg-white/10 p-4 rounded-lg w-xs">
            <img src={item.icon} alt={item.text} className="w-8 h-8" />
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl max-md:text-lg font-bold text-left w-full">{item.text}</a>
            
          </div>
        ))
      }
    </div>
  );
};

export default Contact;
