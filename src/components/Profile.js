import { Link, useNavigate } from "react-router-dom";


export function Profile() {
    return (

          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-2 border-black rounded-lg shadow-lg relative flex flex-col w-full bg-barco outline-none focus:outline-none">
                <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-black rounded-t ">
{/*                 <button
                    className="bg-transparent text-black float-right"
                    onClick={() => setShowModal(false)}
                    >
                    <p className="text-black opacity-7 h-6 w-6 text-xl block border-2 border-black py-0 rounded-full">
                      
                    </p>
                  </button> */}
                  <h3 className="text-xl font=semibold">PROFILE</h3>

                </div>
                <div className="relative w-full p-6 flex-auto">
         

                <h3 className="text-xl">Nombre de usuario</h3>
                <p className="mt-2 border-2 border-black pl-2 pt-1 pb-2">&nbsp;</p>

                <h3 className="text-xl mt-2">Correo electrónico</h3>
                <p className="mt-2 border-2 border-black pl-2 pt-1 pb-2">&nbsp;</p>

                <h3 className="text-xl mt-2">BIO</h3>
                <p className="mt-2 border-2 border-black pl-2 pt-1 pb-48">&nbsp;</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-black rounded-b">
                  <button
                    className="text-black hover:text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    
                  >
                    Cambiar contraseña
                  </button>
                  <Link to="/">
                  <button
                    className="border-2 border-black  text-black hover:text-white hover:bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"                 
                  >
                    SAVE CHANGES
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
 
        
    );
  }

  