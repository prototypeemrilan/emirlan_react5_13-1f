import React from "react";
import classes from "./userList.module.css"

function UsersList (props) {

    return(
        <div>
            <ul>
                {
                    props.usersProps.map((user) => {
                        return(
                            <li>{user}</li>
                        )
                    })
                }
            </ul>
            ----------------
            <ul>
                <li className={classes.names}>name: {props.user.name}</li>
                <li className={classes.names}>age: {props.user.age}</li>
                <li className={classes.names}>position: {props.user.position}</li>
            </ul>
        </div>


    )
}

export default UsersList;