import React from 'react'

export default class GifList extends React.Component{

    rendergifs=()=>{
        return this.props.gifs.map(gif=>{
            return <li><img src={gif.images.original.url}></img></li>
        })
    }

    render(){
        return(
            <ul>
                {this.rendergifs()}
            </ul>
        )
    }
}