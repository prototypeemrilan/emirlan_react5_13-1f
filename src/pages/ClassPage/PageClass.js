import React from "react"
class PageClass extends React.Component {
    Hello () {
        alert("Привет")
    }

    handleClick (e) {
    console.log(e.target.value)
    }
    render() {
        return (
            <div>
                {/*write*/}
                <input type="text" handleClick={this.handleClick}/>
                <button onClick={this.Hello}>
                    click
                </button>

            </div>
        )
    }
}
export default PageClass
