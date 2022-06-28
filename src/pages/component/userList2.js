import React from 'react';

const UserList2 = ({users}) => (
    <ul>
        {users.map((user, key) => <li key={key}>{user}</li>)}
    </ul>
);

export default UserList2;