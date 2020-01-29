import React, { Component } from 'react'

export default class GifSearch extends Component {
    state={
        type: ''
    }

    inputChange = (e) => {
        console.log(e.target)
        this.setState({type: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.type)
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='type' value={this.state.type} onChange={this.inputChange}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
