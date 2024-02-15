import React from "react";
import { TbLoader3 } from "react-icons/tb";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center animate-spin">
      <TbLoader3 className="animate-spin w-20 h-20"/>
    </div>
  );
};

export default loading;
