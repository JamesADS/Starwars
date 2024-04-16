import React from 'react'

class Item extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            clicks: 0
        }
    }

    clickMe() {
        this.setState({
            clicks: this.state.clicks + 1
        })
        
    }

    resetMe() {
        this.setState({
            clicks: 0
        })
    }

    render (){

        return (
            <>
            <h1 onClick={() => this.clickMe()}>Hello from {this.props.name}</h1>
            <span>Clicks: {this.state.clicks}</span>
            <br></br>
            <button onClick={() => this.resetMe()}>reset</button>
            </>
        )
    }
}

export default Item;