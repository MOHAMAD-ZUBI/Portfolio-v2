import React from "react";

export const PrimaryButton = ({ content }) => {
  return (
    <button className=" md:px-10 px-6 py-2 rounded-full border-gray-700/20 border-[2px] bg-transparent text-center hover:bg-gray-700/20 hover:text-white/80 ease-out duration-500  text-sm md:text-lg ">
      {content}
    </button>
  );
};

export const SecondaryButton = ({ content }) => {
  return (
    <button className=" md:px-10 px-6 py-2 rounded-full border-gray-700/20 border-[2px] bg-blue-300/65 dark:bg-blue-400 text-center hover:bg-gray-700/20 hover:text-white/80 ease-out duration-500 text-sm md:text-lg ">
      {content}
    </button>
  );
};
