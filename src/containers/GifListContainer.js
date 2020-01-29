import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component{
    state={
        gifs: []
    }

    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
        .then(res => res.json())
        .then(gifs => {
            console.log(gifs.data.slice(0,3))
            this.setState({
                gifs: gifs.data.slice(0, 3)
            })
        })
    }

    handleOnSubmit=(entry)=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${entry}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data.slice(0,3)
            })
        })
    }

    render(){
        return(
            <div>
                <GifSearch handleOnSubmit={this.handleOnSubmit}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}