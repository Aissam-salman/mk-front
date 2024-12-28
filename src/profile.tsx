import {User} from "lucide-react";
import {useEffect, useState} from "react";
import axios from "axios";

interface User {
    firstname: string;
    lastname: string;
    email: string;
}

const Profile = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUserProfile();
    })
    const getUserProfile = async () => {
        try {
            const token = localStorage.getItem('jwt');

            const response = await axios.get(import.meta.env.VITE_ENDPOINT_SERVER + "/profile", {});
        ,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('Informations utilisateur :', response.data);
            setUser(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des infos utilisateur :', error);
        }
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex flex-col items-center justify-center">
                <User size={64} className="text-gray-600 mb-4"/>
                {user ? (
                    <>
                        <h2 className="text-xl font-semibold mb-2">
                            {user.firstname!} {user.lastname!}
                        </h2>
                        <p className="text-gray-600 mb-4">{user.email}</p>
                    </>
                ) : null}


                {/*<div className="w-full mt-4">*/}
                {/*    <button*/}
                {/*        onClick={handleLogout}*/}
                {/*        className="w-full bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"*/}
                {/*    >*/}
                {/*        Se déconnecter*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Profile;