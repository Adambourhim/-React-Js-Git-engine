import React, { Component } from 'react'

export default class user extends Component {
    render() {
        return (
            
                
                
                       <div class="card">
                          <img class="card-img-top" src={this.props.x.avatar_url} alt="" />
                              <div class="card-body">
                                  <h4 class="card-title">{this.props.x.login}</h4>
                                  <p>
                                      
                                      <a href={this.props.x.html_url} className="btn btn-warning">Repositories</a>
                                  </p>
                                </div>
                        </div>
                    
            
        )
    }
}
