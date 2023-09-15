import React from "react";

interface Props {
  icon?: React.ReactNode;
  iconAlt?: string;
  title: string;
  color?: string;
  bg?: string;
}

const TechCard = ({ icon, title, color, bg, iconAlt }: Props) => {
  return (
    <div
      className={`text-2xl flex justify-center gap-2 items-center w-[30%] min-w-[170px] h-[60px] bg-card rounded-lg`}
    > 
      <div
        className={`z-10 flex items-center justify-center ${color} ${bg} w-8 h-8 rounded-lg bg-opacity-10`}
      >
        {icon ? icon : <img className="w-6 h-6" src={iconAlt}></img>}
      </div>
      <span className="z-10 text-sm">{title}</span>
    </div>
  );
};

export default TechCard;
