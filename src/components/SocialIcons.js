import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="flex justify-center space-x-4">
      {Icons.map((icon) => {
        const IconComponent = icon.component;
        return (
          <a
            href={icon.link}
            key={icon.name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-orange-400 transition-colors duration-300"
          >
            <IconComponent /> {/* Render icon */}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
