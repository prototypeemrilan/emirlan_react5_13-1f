import React from "react"




class BlogPage extends React.Component {

    sayHello () {
        alert("Hello world")
    }

    onChange (e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                Blog page
                <input type="text" onChange={this.onChange}/>
                <button onClick={this.sayHello}>
                    say hello
                </button>
            </div>
        )
    }
}

export default BlogPage