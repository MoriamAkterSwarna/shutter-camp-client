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

      toast('🦄 Log in Successfully!', {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          navigate(from, {replace:true})
        }, 4000);

    }
    
    );
    
    
  };
  const handleGithubSignIn = () =>{
    signInWithGithub()
    .then(result => {
        const loggedUser = result.user;
        toast('🦄 Log in Successfully!', {
          position: "top-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setTimeout(() => {
            navigate(from, {replace:true})
          }, 4000);

        
    })
    .catch(error => console.log(error))

}
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button className="btn btn-circle bg-emerald-500 border-none hover:bg-emerald-700 mr-2">
          <FaGoogle onClick={handleGoogleSignIn} className="text-white text-xl"></FaGoogle>
        </button>
        <button className="btn btn-circle bg-emerald-500 hover:bg-emerald-700 border-none">
          <FaGithub onClick={handleGithubSignIn} className="text-white text-xl"></FaGithub>
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SocialLogin;
