import React from "react";

const Card = ({ name, img, link }) => {
  return (
    <div className="relative cursor-pointer [&>div]:hover:opacity-90 [&>a]:hover:opacity-90 [&>img]:hover:brightness-50">
      <img className="rounded-xl mb-5 w-full " src={img} />
      <div className="opacity-0">
        <p className="absolute font-bold text-xl text-white top-[42%] left-[35%]">
          Open
        </p>
      </div>
      <a href={link} className="text-white opacity-0 absolute bottom-0 left-2 mb-2">
        {name} ↗︎
      </a>
    </div>
  );
};

export default Card;
//absolute bottom-0 ml-2 mb-2 opacity-0
