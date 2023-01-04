import {React, useState, useEffect} from "react";
import { useAuth } from "../context/authContext"
import { Link, useNavigate } from "react-router-dom";
import { app } from '../firebase'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firestore = getFirestore(app); 

let fakeArray = [{title: "hola mundo"}];



export function Home(){

    const { user, logout, loading } = useAuth();

    const [arrayObras, setArrayObras] = useState(null);

    const searchOrCreateDocument = async(idDocumento)=>{

      //Crear referencia al documento
      const docuRef = doc(firestore, `users/${idDocumento}`)
    
      //Buscar documento
    
      const query = await getDoc(docuRef);
    
      //Revisar si existe
    
      if(query.exists()){
    
        //Si si existe
    
        const infoDocu = query.data();
    
        return infoDocu;
    
      } else {
    
          //Si no existe
    
          await setDoc(docuRef, fakeArray[0]);
    
          const infoDocu = query.data();
    
          return infoDocu;
    
    
      }
    
    
    }

    console.log("User", user);

    useEffect(()=>{

      async function fetchObras(){

        const obrasFetchadas = await searchOrCreateDocument(

          user.email

        );

        setArrayObras(obrasFetchadas);

      }

      fetchObras();

    },[])
    
    const handleLogout = async() =>{
        try{
        await logout()

      }catch(error){

        console.error(error);

      }

    }

    if (loading) return <h1>Loading</h1>


    return (
    
    <div>

      <div id="side-bar"className="fixed left-0 top-0 w-72 h-full p-8 flex flex-col justify-between">
          <nav>
          <div className="mb-5 text-white">
              <h1>Gym Buddies logo</h1>
          </div>

          <h1 class="text-xl text-white font-bold pb-8">Hola { user.displayName || user.email}</h1>
          <h1 className="pb-2 text-white">DASHBOARD</h1>
          <hr style={{
            backgroundColor: "black",
            height: 2
          }} />

          {/* NAV */} 
          


 {/*          <div className="pb-5 pt-5">
            <h1>OBRAS</h1>
            <h1 className="text-teal-400 hover:text-gray-500">Subidas</h1>
            { <UploadArtwork /> }
          </div> */}

          <hr style={{
            backgroundColor: "black",
            height: 2
          }} />

{/*           <div className="mt-5">
          <Link to="/profile">
             <h1 class="text-xl font-bold hover:text-teal-400">PROFILE</h1>
          </Link>
          </div> */}

          </nav>

          <div className="flex items-center gap-4 text-white hover:text-gray-500">
            <button onClick={ handleLogout }>
            Logout
            </button> 
          </div>

      </div>

      
      <main className="pl-80 pt-32 w-screen">
        
        {/* Header */}

{/*         <header>
         
          <div className="mt-5">
             <h1 class="text-xl font-bold underline">Hola { arrayObras.artistname || user.email}</h1>
          </div>

        </header> */}

        {/* Content */}

        <div className="border-2 border-black rounded-2xl w-11/12 h-full p-8 mt-2 flex justify-items-center space-x-7">



      <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

              {/* CARDS */}
{/*             { arrayObras ? 
            <Obras obras={ arrayObras.artworks } artistname={ arrayObras.artistname}/>
            : null         
            } */}
            
              


        </div>
      </div>
    </div>


      </div>

      </main>


    </div>
    )
}
