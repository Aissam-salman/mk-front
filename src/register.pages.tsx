import {CredentialResponse, GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import axios from "axios";
import {useNavigate} from "react-router";

const RegisterPages = () => {
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const navigate = useNavigate();

    const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
        const idToken = credentialResponse.credential;

        try {
            const response = await axios.post(
                'https://mkapp.com/api/v1/auth/google/register', {
                idToken: idToken,
            });

            const {status, token} = response.data;
            if (status === "existing") {
                console.log(status);
                navigate("/login");
            }

            if (status === 'success') {
                console.log('JWT reçu :', token);
                localStorage.setItem('jwt', token);
                navigate('/profile');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            alert('Erreur d’authentification');
        }
    };

    return (
        <GoogleOAuthProvider clientId={googleClientId}>
            <div className={" p-8 flex justify-center items-center w-full flex-col gap-6"}>
                <h1>Connexion avec Google</h1>
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => {
                        console.error('Erreur lors de la connexion Google');
                    }}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default RegisterPages;