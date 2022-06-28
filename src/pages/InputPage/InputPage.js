import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

function InputPage(props) {

    const [user, setUser] = useState({
        name:"",
        lastName:"",
        patronymic:""
    });


    const ChangeInput = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })

    }

    const cleanInput = () => {
        setUser(prev => {
            return {
                ...prev,
                name:"",
                lastName:"",
                patronymic:""
            }
        })
    }

    const submit = (e) => {
        e.preventDefault()
        alert("Данные приняты")
        console.log(user)
        cleanInput()
    }


    return (


        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={ChangeInput}
                />

                <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={user.lastName}
                    onChange={ChangeInput}
                />

                <input
                    type="text"
                    placeholder="Patronymic"
                    name="patronymic"
                    value={user.patronymic}
                    onChange={ChangeInput}
                />

                <button type="submit">Намжи узнаешь</button>
            </form>

        </div>
    );
}

export default InputPage;