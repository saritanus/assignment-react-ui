import React, { Component } from "react";
import { FaMinus } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const url_delete = "http://ec2-18-188-252-232.us-east-2.compute.amazonaws.com:8080/api/appliances/all";

class DeleteAppliances extends Component {
  handleDelete = ()  =>{
    fetch(url_delete,{
        method: 'DELETE'
    }).then(response =>
        response.json().then(json => {
          alert(json);
        })
      );
   }

  render() {
    return (<div className="apt-addheading card-header bg-primary text-white" onClick={this.handleDelete}> 
    <Button variant="danger">
    <FaMinus /> Delete Old / Unused / Sold Appliances 
    </Button></div>);
  }
}

export default DeleteAppliances;
