import React from "react"
import ListProducts from "../componentsPage/listProducts/ListProducts";


class PortfoliePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {portfolie: [], title: "hello world"}
    }

    componentDidMount() {
      this.setState( ["work one", "work two" , "work three"])
        title: "I am new title"
    }

    render() {
        return (
            <div>
                <h1>Portfolie Page - {this.state.title}</h1>

                <ListProducts products={this.state.portfolie}/>
            </div>
        )
    }
}



export default PortfoliePage