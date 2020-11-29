import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "../css/modal.css";
import EditAppliance from "./EditAppliance";

class EditModal extends Component {
 
  onCancel = () => {
     this.props.hideModal();
  };
  render() {
 
    return (
      <Modal className="modal" show={this.props.show}>
        <div className="bg-primary text-white">
          <br />
          <h4>
            <center>Appliance Details</center>
          </h4>
          <div className="card-body">
         
            <EditAppliance temp={this.props.appliance} onCancel={this.onCancel}/>
          </div>
        </div>
      </Modal>
    );
  }
}

export default EditModal;
