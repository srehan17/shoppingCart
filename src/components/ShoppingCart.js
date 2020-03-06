import React, {Component} from 'react'
import Counter from './Counter.js'

class ShoppingCart extends Component {
    state = {
      counters: [
        { id: 1, value: 0, title: "Chicken", errorMessage: "" },
        { id: 2, value: 0, title: "Fish", errorMessage: "" },
        { id: 3, value: 0, title: "Veggies", errorMessage: "" },
        { id: 4, value: 0, title: "Dairy", errorMessage: "" },
        { id: 5, value: 0, title: "Sushi", errorMessage: "" }
      ]
    }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}} >Shopping Cart</h1>
        <div>
          {this.state.counters.map(counter =>
            (<Counter key={counter.id}
                counter={counter}
                onDelete={this.handleDelete}
                />))}
        </div>

      </div>
    )
  }
}

export default ShoppingCart;
