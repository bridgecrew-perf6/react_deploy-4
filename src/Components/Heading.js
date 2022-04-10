import React,{Component, useState} from "react";
class Heading extends Component{
   
  render(){

    return (
        <>
              
        
            <div class="input-group mb-3">
               <input type="text" class="form-control" placeholder="--" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                   <button id="adding" class="btn btn-outline-secondary" type="button">Add</button>
                </div>
              </div>


        </>
        );
  }
}
export default Heading;