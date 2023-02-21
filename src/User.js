import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Getaxios from "./utils/GetAxios";
function User () {
    const {userId} = useParams();
    const [user,setUser] = useState({});
    useEffect(() => {
        Getaxios('https://jsonplaceholder.typicode.com/users/' + userId).then((response) => {
            setUser(response.data);
        });
    },[]);
    
    return (<>
    <h1>Name : {user.name}</h1>
    <h1>Email : {user.email}</h1>
    <h1>Address : {user.address?.city} </h1>
    </>)
}
export default User;