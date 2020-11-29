import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

class AddAppliances extends Component {
  constructor() {
    super();
    this.state = {
      serialNo: "",
      model: "",
      brand: "",
      status: "",
      purchaseDate: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(e) {
    e.preventDefault();
    let temp = {
      serialNo: this.state.serialNo,
      model: this.state.model,
      brand: this.state.brand,
      status: this.state.status,
      purchaseDate: this.state.purchaseDate,
    };
    this.props.addAppliance(temp);
    this.setState({
      serialNo: "",
      model: "",
      brand: "",
      status: "",
      purchaseDate: "",
    });
    this.props.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div
        className={
          "card textcenter mt-3 " +
          (this.props.formDisplay ? "" : "add-appliance")
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add Appliance
        </div>
        <div className="card-body">
          <form id="applianceForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="serial"
                readOnly
              >
                Serial No:
              </label>
              <div className="col-md-10">
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
              <div className="col-md-10">
                <select
                  className="col-md-10"
                  id="status"
                  name="status"
                  value={this.state.status}
                  onChange={this.handleChange}
                  required
                >
                  <option value="NEW">NEW</option>
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
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="purchaseDate"
                  id="purchaseDate"
                  value={this.state.purchaseDate}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Appliance
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAppliances;
