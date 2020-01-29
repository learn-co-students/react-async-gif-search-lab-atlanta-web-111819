import React from 'react'

class GifList extends React.Component {

    renderGif = gif => {
        return (
            <li>
                <img src={gif.url}></img>
            </li>
        )
    }

    render() {
        return (
            <ul>
                <h4>Powered by Giphy</h4>
                {
                    this.props.gifs.map(this.renderGif)
                }
            </ul>
        )
    }
}

export default GifList