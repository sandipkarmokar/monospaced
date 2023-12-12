function NavBar() {
  return (
    <div className="w-screen bg-dark_blue-300 h-24 flex items-center">
      <div className="lg:container mx-auto flex justify-between">
        <div className="text-[#B8D0E0]">
          <p className="text-3xl">monospaced://</p>
          <p className="text-base">Fira Code</p>
        </div>
        <div className="text-white text-lg flex items-center">
          <a href="#" className="mr-11">
            Why MonoSpaced Fonts?
          </a>
          <button className="bg-dark_blue-500 p-5 h-11 flex items-center border-[#022236] rounded">
            Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
