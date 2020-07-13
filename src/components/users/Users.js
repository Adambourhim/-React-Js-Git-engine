import React, { Component } from 'react'
import axios from 'axios' ;
import Searchusers from './Searchusers';
import User from './User';

export class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
              users : []
        }
    }
    getusers = () => {
        axios.get('https://api.github.com/users') 
              .then (response => {
                  this.setState ({
                      users: response.data 
                  })
              })
    }
    componentDidMount(){
        this.getusers();
    }
    SearchUsersFromGit = (data) => {
        if (data != '') {
            axios.get(`https://api.github.com/search/users?q=${data}`)
            .then(response => {
                this.setState ({
                    users : response.data.items
                })
            })
        }
    }
    
    render() {
        return (
            <div>
                <div className="row my-2">
                      <div className="col-md-12">
                         <Searchusers getSearchUsers={this.SearchUsersFromGit}/>
                      </div>
                </div>
                <div className="row">
                  {this.state.users.map((x)=>{

                  return (
               
                    <div className="col-md-4" key={x.id}>

                         <User x={x} />
                     </div>
                    )

                    })}
               
               </div>
                
            </div>
        )
    }
}

export default Users ; 