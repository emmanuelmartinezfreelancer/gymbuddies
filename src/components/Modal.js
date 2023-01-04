import React, { useState } from "react";
import imgArt from "../img/M1.jpg"
import { useAuth } from "../context/authContext"

const Modal = ({ artwork, artistName }) => {
  const [showModal, setShowModal] = useState(false);

  const { user} = useAuth();

  console.log("Artwork Title", artwork.title)
  return (
    <>
      <button
        className="bg-gray-500 text-white font-bold py-2 rounded mx-12 mt-5
        font-bold px-6 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View Artwork
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-2 border-black rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-black rounded-t ">
{/*                 <button
                    className="bg-transparent text-black float-right"
                    onClick={() => setShowModal(false)}
                    >
                    <p className="text-black opacity-7 h-6 w-6 text-xl block border-2 border-black py-0 rounded-full">
                      
                    </p>
                  </button> */}
                  <h3 className="text-3xl font=semibold">{ artwork.title }</h3>
                  <h2 className="text-xl">{ user.email }</h2>

                </div>
                <div className="relative w-full p-6 flex-auto">
                {/* <img  src={imgArt} alt="imgArt" /> */}
                <h3 className="mt-6">DESCRIPTION</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use.</p>
                <h3 className="mt-6">TYPE</h3>
                <p>IMG/JPG</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-black rounded-b">
                  <button
                    className="text-teal-400 hover:text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
{/*                   <button
                    className="border-2 border-black  text-teal-400 hover:text-white hover:bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
