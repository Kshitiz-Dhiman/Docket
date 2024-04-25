import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Cards({ data, reference, unique }) {
  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([data.desc], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <motion.div
      drag
      whileTap={{ scale: 1.12 }}
      whileDrag={{ scale: 1.12 }}
      dragConstraints={reference}
      dragElastic={0.01}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative w-60 h-72 rounded-[16px] bg-zinc-900/50 text-[#F0F8FF] p-[30px] overflow-hidden"
    >
      <FaRegFileAlt className="text-xl" />
      <p className="mt-5 font-semibold">{data.desc}</p>
      <div className="absolute bottom-0 w-full left-0">
        <div
          className={`tag w-full py-3  bg-${data.tag.tagColor}-600 flex  justify-center items-center`}
        >
          <h3 className="text-sm font-bold ">
            <button
              className={`btn btn-active bg-${data.tag.tagColor}-600 border-none`}
              onClick={() =>
                document.getElementById(`my_modal_${unique}`).showModal()
              }
            >
              Open
            </button>
            <dialog id={`my_modal_${unique}`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">HALLO :D</h3>
                <p className="py-4">{data.desc}</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                  <button className="btn" onClick={downloadFile}>
                    Downlaod(.txt file)
                  </button>
                </div>
              </div>
            </dialog>
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
