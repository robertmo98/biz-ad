import { useState } from "react";

function Header(props) {
  const [status, setStatus] = useState("Active");
  const [service, setService] = useState("Mailing List");

  function handleBtnClick(e) {
    e.preventDefault();

    props.addService({
      service: service,
      status: status,
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="navbar-brand" href="/">
            Services
          </a>
          <div className="collapse navbar-collapse">
            <form className="d-flex">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="form-select me-2"
              >
                <option>Mailing List</option>
                <option>WhatsApp Group Notifications</option>
              </select>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="form-select me-2"
              >
                <option>Active</option>
                <option>Disabled</option>
              </select>

              <button
                onClick={(e) => handleBtnClick(e)}
                className="btn btn-outline-success w-75"
                type="submit"
              >
                Add Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
