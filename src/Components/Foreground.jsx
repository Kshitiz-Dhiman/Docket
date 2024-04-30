import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import { IoMdAdd } from "react-icons/io";
import Sidebar from "./Sidebar";
function Foreground() {
  const ref = useRef(null);
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });
  const array = ["b095f6", "f0a177", "e6ee96", "55cffa", "ffcf7d"];
  let randomHex = array[Math.floor(Math.random() * array.length)];

  const handleAddCard = () => {
    if (document.querySelector(".desc-input").value === "") {
      return;
    }
    const newData = [
      ...data,
      {
        desc: document.querySelector(".desc-input").value,
        tag: { tagTitle: "Open", tagColor: randomHex },
      },
    ];
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
    document.querySelector(".desc-input").value = "";
    document.getElementById("modal").close();
  };

  // Save to local storage whenever data changes
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    // localStorage.clear();
  }, [data]);

  return (
    <>
      <Sidebar>
        <button
          className="bg-black w-14 h-14 text-white text-3xl rounded-full flex justify-center items-center transition duration-200 ease-in-out m-[35px]"
          onClick={() => document.getElementById("modal").showModal()}
        >
          <IoMdAdd />
        </button>
      </Sidebar>
      <div className="mx-40">
        <nav className="p-5">
          <input type="text" className="input nav-search bg-white text-black text-[1.2rem] active:outline-none" placeholder="Search" />
        </nav>
        <div>
          <h2 className=" text-black text-[62px] font-[700] leading-[62px] p-10">
            Notes
          </h2>
        </div>
        <div
          ref={ref}
          className="top-0 left-0 z-[3] w-full h-full flex gap-5 p-5 flex-wrap"
        >
          {data.map((item, index) => (
            <Cards data={item} unique={index} key={index} reference={ref} />
          ))}

          <dialog id="modal" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Heading</h3>
              <p className="py-4">Fill the options to make a card</p>
              <input
                type="text"
                placeholder="Enter the text here..."
                className="desc-input input input-bordered w-full max-w-xs"
              />
              <p className="mt-5 mb-5">Select colors for the card</p>
              <div className="flex gap-10 items-center m-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-green-600"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-600"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-yellow-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-slate-500"
                  defaultChecked
                />
              </div>
              <div className="w-full h-10">
                <button
                  className="btn absolute bottom-2 right-2"
                  onClick={handleAddCard}
                >
                  Save
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}

export default Foreground;
