import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGooglePopup = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="text-center">
            <button onClick={handleGooglePopup} className="btn btn-outline btn-success gap-2"><FaGoogle /> Login with Google</button>
        </div>
    );
};

export default GoogleLogin;