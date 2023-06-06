import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button  className="btn btn-circle bg-emerald-500 border-none hover:bg-emerald-700 mr-2">
                    <FaGoogle className="text-white text-xl"></FaGoogle>
                </button>
                <button  className="btn btn-circle bg-emerald-500 hover:bg-emerald-700 border-none">
                    <FaGithub className="text-white text-xl"></FaGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;