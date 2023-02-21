import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Getaxios from "./utils/GetAxios";
function Users () {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        Getaxios("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUsers(response.data);
        });
    },[]);
    console.log(users);
    return (<>
    <table border={1} cellPadding={2}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Detail</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,key) => {
               return <tr key={key}>
                    <td>{user.name}</td>
                    <td>
                        <Link to={'/user/' + user.id} >Detail</Link>
                        </td>
                </tr>
            })}
            
        </tbody>
    </table>
    
    </>);
}
export default Users;