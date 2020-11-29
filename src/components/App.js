import { Component } from "react";
import "../css/App.css";
import AddAppliances from "./AddAppliances";
import ListAppliances from "./ListAppliances";
import SearchAppliances from "./SearchAppliances";
import DeleteAppliances from "./DeleteAppliances";

const url =
  "http://ec2-18-188-252-232.us-east-2.compute.amazonaws.com:8080/api/appliances";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      formDisplay: false,
      orderBy: "serialNo",
      orderDir: "asc",
      queryText: "",
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.searchApps = this.searchApps.bind(this);
  }
  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay,
    });
  }

  searchApps(query) {
    this.setState({ queryText: query });
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  }

  addAppliance(appliance) {
    fetch(
      "http://ec2-18-188-252-232.us-east-2.compute.amazonaws.com:8080/api/appliances",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appliance),
      }
    )
      .then(function (response) {
        if (response.status === 201) {
          alert("Appliance is added successfully to the inventory");
        } else {
          alert("Appliance already exists in the inventory");
        }
      })
      .catch(function () {
        alert("Error occured while adding the appliane");
      });
  }

  componentDidMount() {
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const appliances = result.map((item) => {
        return item;
      });
      this.setState({
        data: appliances
      });
    });
  }

  componentDidUpdate() {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const appliances = result.map((item) => {
          return item;
        });
        this.setState({
          data: appliances,
        });
      });
  }

  deleteAppliance(apllianceId) {
    fetch(url + "/" + apllianceId, {
      method: "DELETE",
    })
      .then(function (response) {
        if (response.status === 200) {
          alert("Appliance is deleted successfully from the inventory");
        }
      })
      .catch(function () {
        alert("Error occured while deleting the appliance");
      });
  }

  render() {
    let order;
    let filteredAppliances = this.state.data;
    if (this.state.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    filteredAppliances = filteredAppliances
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter((eachItem) => {
        return (
          eachItem["serialNo"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem["model"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem["brand"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppliances
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addAppliance={this.addAppliance}
                />

                <DeleteAppliances />

                <SearchAppliances
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchApps={this.searchApps}
                />
                <ListAppliances
                  appliances={filteredAppliances}
                  deleteApplinace={this.deleteAppliance}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
