import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

import apiKey from '../apiKey'

class GifListContainer extends React.Component {

    state = {
        query: "",
        gifs: []
    }

    searchChange = e => {
        this.setState({
            query: e.target.value
        })
    }

    handleSearch = e => {
        e.preventDefault()
        console.log('searching for', this.state.query)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const gifs = []
                if (data.data.length > 0) {
                    for (let i = 0; i < 3; i++) {
                        const imageData = {
                            url: data.data[i].images.original.url
                        }
                        gifs.push(imageData)
                    }
                }
                this.setState({
                    gifs: gifs
                })
            })
    }

    render() {
        return (
            <div>
                <GifSearch onChange={this.searchChange} onSubmit={this.handleSearch}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer