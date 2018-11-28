import React, { Component } from 'react';
import facade from './apiFacade';
import { Link } from "react-router-dom";
import cart from './shoppingCart';

class CandyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { weight: 0, candy: []}
    }

    onChange = (evt) => {
        this.setState({ [evt.target.id]: evt.target.value })
    }

    async componentDidMount() {
        const data = await facade.fetchCandyDetails(this.props.match.params.id);
        this.setState({ candy: data });
    }

    addToCart = () => {
        cart.addToCart2(this.state.candy.id, this.state.candy.name, this.state.weight);
    }
    render() {
        return (
            <div className="container">
                <h2>Item Details</h2>
                <p>ID: {this.state.candy.id}</p>
                <p>Name: {this.state.candy.name}</p>
                <p>Description: {this.state.candy.description}</p>
                <p>Type: {this.state.candy.type}</p>
                <p>Flavour: {this.state.candy.flavour}</p>
                <p>IMG: {this.state.candy.img}</p>
                <form onChange={this.onChange} className="form-inline">
                    <div className="input-group">
                        <input placeholder="Weight" id="weight" type="number" className="form-control"/>
                        <div className="input-group-append">
                            <button onClick={this.addToCart} className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </form>
                <Link to="/candy">Back</Link>
            </div>)
    }
}
export default CandyDetails;