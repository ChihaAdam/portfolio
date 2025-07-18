function Avatar({ link }: { link: string }) {
  return (
    <>
      <div className="border-3 border-red-600 rounded-full aspect-square  w-36 h-36 flex justify-center items-center relative">
        <img src={link} className="rounded-full" alt="Avatar" loading="lazy" />
        <img
          src="./htmlTag.svg"
          alt="HTML Tag"
          className="w-14 h-14 mt-2 absolute -right-0.5 -bottom-0.5"
        />
      </div>
    </>
  );
}

export default Avatar;
