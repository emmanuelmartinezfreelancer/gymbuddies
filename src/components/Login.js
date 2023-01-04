import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
        if (error.code === "auth/internal-error"){
                
            setError("Correo inválido/Introduce un password");

        } else if(error.code === "auth/user-not-found" ) {

            setError("El usuario no existe")

        } else if(error.code === "auth/wrong-password") {
        
            setError("Contraseña incorrecta")
        } 
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full flex ">
      
      {error && <Alert message={error} />}


      <div className="w-3/5 bg-white p-5 h-screen">

      <div className="flex place-content-center h-full">
          <h1 className="text-black pt-60">LOGO</h1>
      </div>
      

      </div>
          

      <div className="bg-black w-2/5 grid h-screen place-items-center">
      
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded pt-6 pb-8 mb-4"
        >
        <h1 className="text-center font-helveticaL text-2xl tracking-widest text-white" >Welcome to Gym Buddies</h1>
        <div className="pt-16 mb-8">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2 font-helveticaL"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="bg-transparent border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"          
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white text-sm font-bold mb-2 font-helveticaL"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="bg-transparent border border-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="hover:text-gray-500 font-bold rounded focus:outline-none focus:shadow-outline font-helveticaL text-xs text-white"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm font-helveticaL text-xs text-white"
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </div>

        <button
        onClick={handleGoogleSignin}
        className="hover:bg-black hover:text-gray-400 text-white text-white shadow rounded bg-transparent border border-white mt-8 py-2 px-4 w-full"
      >
        Google login
      </button> 

      <hr className="bg-grey my-8 h-px bg-white border-0 dark:bg-[#40E0D0"/>

      <p className="my-4 text-sm flex justify-between text-white">
        Don't have an account?
        <Link to="/register" className="hover:text-gray-500 text-white">
          Register
        </Link> 
      </p>
      </form>



    </div>

        </div>
    
  );
}
