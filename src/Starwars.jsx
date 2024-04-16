import React from 'react'

class FilmItemRow extends React.Component {
    render() {
        return(
            <li>
                <a href={this.props.url}>{this.props.url}</a>
            </li>
        )
    }
}

class Starwars extends React.Component {

    constructor (){
        super()
        this.state = {
            name: null,
            height: null,
            homeworld: null,
            films: [],
            loaded: false,
        }
    }

    randomizeMe() {
        const rand = Math.round( Math.random() * 88)
        const url = `https://akabab.github.io/starwars-api/api/id/${rand}.json`
        fetch(url)
            .then(response => response.json())
            .then(data => {
            this.setState({
            name: data.name,
            height: data.height,
            homeworld: data.homeworld,
            imageSrc: data.image,
            loaded: true,
        })
        
    })
    }

    render() {

        
        return(
            <>
            {
                this.state.loaded &&
                <div>
                    {
                        this.state.imageSrc != null &&
                        <img src={this.state.imageSrc} height='600' width='500' />
                    }
                    
                    <h1>{this.state.name}</h1>
                    <p>Height: {this.state.height} M</p>
                    <p>Homeworld: {this.state.homeworld}</p>
                    
                </div>
            }
            
            <button onClick={() => this.randomizeMe()}>RNG Me!</button>
            </>
        )
    }
}

export default Starwars;