import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const SocialLogin = () => {
  const { signInWithGoogle,signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, photoURL:loggedInUser.photoURL, role: 'student' };
            console.log(savedUser);
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
               
              },
              body: JSON.stringify(savedUser),
            })

            .then(res => res.json())
            .then(data => {
              if(data.insertedId){
                toast('🦄 Google Log in Successfully!', {
                  position: "top-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
                  setTimeout(() => {
                    navigate(from, {replace:true})
                  }, 3000);
              }
            })
    }
    
    );
  };
  
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button className="btn btn-circle bg-emerald-500 border-none hover:bg-emerald-700 mr-2">
          <FaGoogle onClick={handleGoogleSignIn} className="text-white text-xl"></FaGoogle>
        </button>
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SocialLogin;
