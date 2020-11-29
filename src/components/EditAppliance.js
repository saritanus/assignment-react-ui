import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class EditAppliance extends Component {
  constructor() {
    super();
    this.state = {
      id:"",
      serialNo: "",
      model: "",
      brand: "",
      status: "",
      purchaseDate: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

componentDidMount(){
   
    this.setState({
        id:this.props.temp.id,
        serialNo:this.props.temp.serialNo,
        model: this.props.temp.model,
        brand: this.props.temp.brand,
        status:this.props.temp.status,
        purchaseDate: this.props.temp.purchaseDate,
    });
}
  handleUpdate() {
     let temp = {
        id: this.state.id,
        serialNo: this.state.serialNo,
        model: this.state.model,
        brand: this.state.brand,
        status: this.state.status,
        purchaseDate: this.state.purchaseDate,
      };
    fetch(
      "http://ec2-18-188-252-232.us-east-2.compute.amazonaws.com:8080/api/appliances",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(temp),
      }
    ).then(function (response) {
      if (response.status === 200) {
        alert("Appliance is updated successfully to the inventory");
       
      } else {
        alert("Error occured");
      }
    });
    this.props.onCancel();
  }

  render() {
    return (
      <div>
        <form id="editAppliance">
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="serial"
              readOnly
            >
              Serial No:
            </label>
            <div className="col-md-10">
                <input type="hidden" name="id" value={this.state.id}></input>
              <input
                type="text"
                className="form-control"
                name="serialNo"
                placeholder="enter serial number"
                value={this.state.serialNo}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="model"
            >
              Model:
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="model"
                placeholder="enter model name"
                value={this.state.model}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="brand"
            >
              Brand:
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="brand"
                placeholder="enter brand name"
                value={this.state.brand}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="brand"
            >
              Status:
            </label>
            <div className="col-md-8">
              <select
                className="col-md-8"
                id="status"
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
                required
              >
                <option  value="NEW">
                  NEW
                </option>
                <option value="OLD"> OLD </option>
                <option value="UNUSED"> UNUSED </option>
                <option value="SOLD"> SOLD </option>
              </select>
            </div>
          </div>
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="date"
            >
              Purchase Date
            </label>
            <div className="col-md-6">
              <input
                type="date"
                className="form-control"
                name="purchaseDate"
                id="purchaseDate"
                value={this.state.purchaseDate}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group form-row mb-0">
            <div className="button-cancel">
              <Button
                variant="secondary"
                onClick={(e) => this.props.onCancel()}
              >
                Cancel
              </Button>
            </div>
            <div className="button-update">
              <Button variant="info" onClick={this.handleUpdate}>Update</Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditAppliance;
