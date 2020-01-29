import React from 'react'

export default class GifSearch extends React.Component{

    state={
        keyword: ''
    }

    onKeyChange=(e)=>{
        this.setState({
            keyword: e.target.value
        })
    }

    submitHandle=(e)=>{
        e.preventDefault()
        this.props.handleOnSubmit(this.state.keyword)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandle}>
                    <input onChange={this.onKeyChange}
                    type='text' name='search' placeholder='Enter Keyword' value={this.state.keyword}/>
                    <input type="submit" name='Submit'/>
                </form>
            </div>
        )
    }
}