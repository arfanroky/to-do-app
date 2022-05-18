import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, {replace:true});
    }
  

    if(loading){
        return <p>Loading.......</p>
    }

    if(error){
        toast.error(error)
    }


    return (
        <div className='w-full py-2 flex justify-center items-center h-screen'>
            <div>
                 <button 
                    onClick={() => signInWithGoogle()}
                    className='btn'>Sign In With Google</button> :
                
            </div>
            
        </div>
    );
};

export default Login;