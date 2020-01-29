import React, { Component } from 'react'
import GifList from '../components/GifList'
import GitSearch from '../components/GifSearch'
export default class GifListContainer extends Component {

    state={
        type: 'cat'
    }

    search = (newType) =>{
        this.setState({type: newType})
    }



    render() {
        return (
            <div>
                <GitSearch search={this.search}/>
                <GifList type={this.state.type}/>
            </div>
        )
    }
}
