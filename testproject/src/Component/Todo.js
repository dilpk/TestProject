import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            input: ''
        }
    }

    setItem = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    searchItem = (event) => {
        const searchedItem = this.state.arr.filter((item) => {
            return (item.toLowerCase().includes(event.target.value.toLowerCase()))
        })
        this.setState({
            arr: searchedItem
        })
    }

    addItem = (event) => {
        // this.state.arr.push(this.state.input)
        // this.setState({
        //     cart: [...this.state.arr, this.state.input]
        // })
        this.setState((prevState) => ({
            arr: [...prevState.arr, prevState.input]
        }))

    }

    deleteList = (id) => {
        const newList = this.state.arr.filter((item) => {
            console.log(item)
            return item != id;
        })
        this.setState({
            arr: newList
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.setItem} onKeyUp={this.searchItem} /><button type="button" onClick={this.addItem}>Add</button>
                <ul>
                    {this.state.arr.map((subIndex, indexVal) => {
                        return <li key={indexVal}>{subIndex}<button onClick={() => this.deleteList(subIndex)}>X</button></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Todo;