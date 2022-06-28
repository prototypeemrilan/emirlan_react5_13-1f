import React from 'react'
import ListProducts from "../componentsPage/listProducts/ListProducts";

class ProductsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {products: []}
    }

    getProducts = () => {
        this.setState ({
            products: ["apple", "orange", "banana"]
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.getProducts}>get products</button>
                <ListProducts products={this.state.products}/>
            </div>
        )
    }
}

export default ProductsPage;