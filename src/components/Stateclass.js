import React, { Component } from 'react'

export class Stateclass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"Sravanthi",
            count:0
             
        }
    }
     render(){
         setTimeout(()=>{
             this.setState({
                 name:"Sravanthi Chavatapalem",
             });
         },3000);
        return (
            <div>
               <h1>{this.state.name}</h1> 
               <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default Stateclass
