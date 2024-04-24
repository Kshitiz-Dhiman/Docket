import React, { useRef, useState } from "react";
import Cards from "./Cards";
import { IoMdAdd } from "react-icons/io";

function Foreground() {
  const ref = useRef(null);
  const [data, setData] = useState([]);
  const array = [
    "blue",
    "red",
    "green",
    "yellow",
    "slate",
  ]

  const randomColor = () => {
    return array[Math.floor(Math.random() * array.length)];
  }
  let color = randomColor();

  const handleAddCard = () => {
    if (document.querySelector(".desc-input").value === "") {
      return;
    }
    setData([
      ...data,
      {
        desc: document.querySelector(".desc-input").value,
        tag: { tagTitle: "Open", tagColor: color },
      },
    ]);
    document.querySelector(".desc-input").value = "";
    document.getElementById("modal").close();
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Cards data={item} unique={index} key={index} reference={ref} />
      ))}

      <button
        className="bg-blue-800 w-14 h-14 text-white text-3xl rounded-full flex justify-center items-center fixed bottom-10 right-10 hover:bg-blue-700 transition duration-200 ease-in-out"
        onClick={() => document.getElementById("modal").showModal()}
      >
        <IoMdAdd />
      </button>
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
  );
}

export default Foreground;
