import React from "react"

class DataPage  extends React.Component {

    constructor() {
        super();
        this.state = {name: "", lastname: "", age: 0, address: ""}
    }

    handInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
}

        onSumbit = () => {
            const data = {
                name: this.state.name,
                lastname:this.state.lastname,
                age:this.state.age,
                address:this.state.address
            }

            console.log(data)
        }


    render() {
        return (
            <div>
                    <h1>Human</h1>
                        <input
                        type="Name"
                        onChange={this.handInput}
                        name="name"
                        />

                        <input
                        type="Lastname"
                        onChange={this.handInput}
                        name="lastname"
                        />


                        <input
                        type="Address"
                        onChange={this.handInput}
                        name="address"
                        />

                        <input
                        type="Number"
                        onChange={this.handInput}
                        name="age"
                        />

                        <button onClick={this.onSumbit}>on sumbit</button>
            </div>
        );
    }

}

export default DataPage