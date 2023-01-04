import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { app } from '../firebase'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firestore = getFirestore(app); 
const storage = getStorage(app);

const defaultTheme = createTheme();
const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "13px",
          color: "white",
          backgroundColor: "black"
        }
      }
    }
  }
});


export function Register() {

  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",

  });


  const [error, setError] = useState("");

  const navigate = useNavigate();

  const createDocument = async(idDocumento)=>{


    //Crear referencia al documento

    const docuRef = doc(firestore, `users/${idDocumento}`)

    await setDoc(docuRef, user);

    const query = await getDoc(docuRef);
  
    const infoDocu = query.data();

    return infoDocu;
  
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signup(user.email, user.password);     
      const docFirebase = await createDocument(user.email);
      console.log("Doc user", docFirebase);
      navigate("/");
    } catch (error) {
        if (error.code === "auth/internal-error"){
                
            setError("Correo inválido / Introduce un password");

        } else if(error.code === "auth/weak-password" ) {

            setError("Password débil, al menos debe contener 6 caracteres")

        } else if(error.code === "auth/email-already-in-use") {
        
            setError("Correo en uso")
        }
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded px-8 pt-6 pb-6 mb-4">


          <>
            <ThemeProvider theme={defaultTheme}>
                <ThemeProvider theme={theme}>
  
  
              <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-white font-helveticaL text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="shadow appearance-none text-sm bg-transparent border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="youremail@company.tld"
                  />
                </div>
          
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-white font-helveticaL text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="shadow appearance-none text-sm bg-transparent border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="*************"
                  />
                </div>
               
                  <button className="font-helveticaL text-sm text-white hover:text-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Register
                  </button> 
              
            
                    </ThemeProvider>
                  </ThemeProvider>
            </>  
         
      </form>

      
      <p className="my-4 text-sm text-white flex justify-between px-3">
        Already have an Account?
        <Link to="/login" className="text-white hover:text-gray-500">
          Login
        </Link>
      </p>
    </div>
  );
}
