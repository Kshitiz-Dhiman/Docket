import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold"></div>
        <h1 className="text-[13vw] top-[47%] left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tight absolute font-semibold text-zinc-900">
          Notes
        </h1>
      </div>
    </>
  );
}

export default Background;
