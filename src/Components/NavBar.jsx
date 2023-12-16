import React from "react";
import GithubIcon from "../assets/GithubIcon.svg";

function NavBar() {
  return (
    <div className="w-screen bg-dark_blue-300 h-24 flex items-center">
      <div className="container mx-auto flex justify-between">
        <div className="text-[#B8D0E0]">
          <p className="text-3xl">monospaced://</p>
          <p className="text-base">Fira Code</p>
        </div>
        <div className="text-white text-lg flex items-center">
          <a href="#" className="mr-11">
            Why MonoSpaced Fonts?
          </a>
          <button className="bg-dark_blue-500 p-5 h-11 flex items-center justify-between shadow-xl border-[#022236] rounded hover:bg-black">
            <img className="h-6 mr-4" src={GithubIcon} alt="GitHub Icon" />
            <a
              href="https://github.com/sandipkarmokar/monospaced"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
