import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center animate-spin">
      loading....
    </div>
  );
};

export default loading;
