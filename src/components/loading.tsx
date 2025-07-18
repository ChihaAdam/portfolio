
function Loading() {
  return (
    <div className="relative flex items-center justify-center mt-20">
      <div className="absolute size-36 border-8 border-x-transparent border-t-pink-800/30 border-b-purple-800/30 rounded-full"></div>
      <div className="absolute size-36 border-8 border-x-transparent border-t-pink-800 border-b-purple-800 rounded-full animate-spin">
        <div className="absolute -left-2 top-10 size-4 bg-pink-500 rounded-full blur-[2px]"></div>
        <div className="absolute -right-2 bottom-10 size-4 bg-purple-500 rounded-full blur-[2px]"></div>
      </div>
      <div className="absolute size-24 border-8 border-x-transparent border-t-pink-600 border-b-purple-600 rounded-full animate-spin-slow"></div>
    </div>
  )
}

export default Loading
