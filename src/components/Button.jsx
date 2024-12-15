import React from "react";

export const ButtonPrimary = ({ icon: IconComponent, label, classes }) => {
  return (
    <button
      className={`text-xs sm:text-sm md:text-base bg-primary-0 hover:bg-blue-950 py-2 px-4 lg:py-3 lg:px-6 rounded-md lg:rounded-xl text-white font-medium justify-center items-center space-x-2 ${classes}`}
    >
      {IconComponent && <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />}
      {label && <span>{label}</span>}
    </button>
  );
};
export const ButtonSecondary = ({ icon: IconComponent, label, classes }) => {
  return (
    <button
      className={`ring-1 text-xs sm:text-sm md:text-base ring-primary-0 lg:py-3 lg:px-6 rounded-md lg:rounded-xl text-primary-0 hover:bg-primary-0/10 font-medium justify-center items-center space-x-2 ${classes}`}
    >
      {IconComponent && <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />}
      {label && <span>{label}</span>}
    </button>
  );
};
