import React,{ useEffect, useContext} from "react";
import{UserContext} from '../context/UserContext';
import { useRouter } from "next/router";
import{User} from '../types';

const Profile: React.FC = () => {
    const {user, fetchUser} = useContext(UserContext);
    const router = useRouter();


useEffect(() =>{
    fetchUser();
}, []);

if (!user){
    return <div>Loading...</div>
}

return(
    <div className = "Profile-Page" >
        <h1>{user.name}'s Profile</h1>
        <p>Email: {user.email}</p>
        <img src = {user.profilePicture} alt = "Profile Picture"/>
        {/* form to update user information*/}
        <form>
            {/*Form fields and submit handler*/}
        </form>
    </div>
);

};


export default Profile;