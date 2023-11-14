import React from "react";

const Word = ({ item, index, isokey}) => {
  return (
    <span className={`mx-[6px] my-[2px] font-semibold text-lg ${isokey}`} idx={index}>
      {item}
    </span>
  );
};

export default Word;
