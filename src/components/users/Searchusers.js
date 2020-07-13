import React, { Component } from 'react'

 class Searchusers extends Component {
     state = {
         search : ''
     }
     handleform = (e) => {
        this.setState ({
            search: e.target.value
        })
     }
     searchusers = (e) => {
         e.preventDefault();
         this.props.getSearchUsers(this.state.search)
     }
    render() {
        return (
            
                <form onSubmit={this.searchusers}>
                    <div id="form-group">
                        <input onChange={this.handleform} value= {this.state.search} placeholder="Search users ..." id="search" type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-danger btn-block">Search</button>
                </form>
                
             
        )
    }
}

export default Searchusers ;