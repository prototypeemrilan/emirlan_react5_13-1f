import React, {useState} from 'react';
import UserList2 from "../component/userList2";

function UserPage2() {
    
    const [users, setUsers] = useState([])

       const getUsers = () => {
        setUsers(["Emirlan" , "Emir" , "Dastan"])
       }


    return (
        <div>
            <button onClick={getUsers}>get users</button>

            <UserList2 users={users}/>
        </div>
    );
}

export default UserPage2;