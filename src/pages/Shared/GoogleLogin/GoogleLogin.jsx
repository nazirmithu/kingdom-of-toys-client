import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGooglePopup = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="text-center">
            <button onClick={handleGooglePopup} className="btn btn-outline btn-info gap-2"><FaGoogle /> Login with Google</button>
        </div>
    );
};

export default GoogleLogin;