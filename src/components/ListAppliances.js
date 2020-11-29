import React, { Component } from "react";
import Moment from "react-moment";
import Table from "react-bootstrap/Table";
import EditModal from "./EditModal";

class ListAppliances extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  showModal (e) {
    this.setState({ show: true})
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="appliance-list item-list mb-3">
        <Table id="appliance_table" size="sm">
          <thead>
            <tr>
              <th> # </th> <th> Serial No. </th> <th> Model </th>
              <th> Brand </th> <th> Purchase Date </th> <th> Status </th>
              <th> </th> <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.props.appliances.map((item, i) => (
              <tr key={i}>
                <td> {i + 1} </td>
                <td> {item.serialNo} </td>
                <td> {item.model}</td>
                <td> {item.brand} </td>
                <td>
                {item.purchaseDate}
                </td>
                <td>{item.status}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info"
                    onClick={e =>
                      this.showModal(e)
                    }
                  >
                    
                    Edit
                  </button>
                  <EditModal
                    show={this.state.show}
                    showModal={this.showModal}
                    hideModal={this.hideModal}
                    appliance = {item}
                  ></EditModal>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.props.deleteApplinace(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ListAppliances;
