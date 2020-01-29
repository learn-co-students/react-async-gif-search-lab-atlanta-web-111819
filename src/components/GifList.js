import React, { Component } from 'react'

export default class GifList extends Component {


    state = {
        pageGif: [],
        type: ''
    }


    gifList = () => {

        // console.log('something----------------------');
        
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.props.type}&api_key=HJtM6YGPL8CjxlAqDFav5zAobYjXStvC&rating=g`)
    .then(res => res.json()).then(data => {

        
        let gifArray = data.data.map(gif => {
            // console.log(gif.images.downsized_large.url)
            return gif.images.original.url
        }
        )

        this.setState({pageGif: gifArray.slice(0, 3), type: this.props.type})

        
    })
      }



    renderGif = () => {
        console.log('----------------something==============');
        // this.setState({pageGif: []}) 
    return this.state.pageGif.map(gif => {
        // console.log(gif)
        return<li><img src={gif} alt='gif'/></li>})
    }


    render() {
        return (
            <div>
                <ul>
                    {/* {this.setState} */}
                  {this.state.type !== this.props.type? this.gifList() : this.renderGif()}
                </ul>
                
                
            </div>
        )
    }
}
