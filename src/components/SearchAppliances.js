import React, { Component } from 'react';

class SearchAppliances extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchApps"
              type="text"
              className="form-control"
              aria-label="Search Appliances"
              onChange={e => this.props.searchApps(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'serialNo' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('serialNo', this.props.orderDir)
                  }
                  href="#"
                >
                  Serial No
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'model' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('model', this.props.orderDir)
                  }
                  href="#"
                >
                  Model
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'brand' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('brand', this.props.orderDir)
                  }
                  href="#"
                >
                  Brand
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'status' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('status', this.props.orderDir)
                  }
                  href="#"
                >
                  Status
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'purchaseDate' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('purchaseDate', this.props.orderDir)
                  }
                  href="#"
                >
                  Purchase Date
                </button>

                <div role="separator" className="dropdown-divider" />
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'asc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'asc')
                  }
                  href="#"
                >
                  Asc
                </button>

                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'desc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'desc')
                  }
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAppliances;