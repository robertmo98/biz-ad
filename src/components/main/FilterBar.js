import { useState } from "react";

function FilterBar(props) {
  const [display, setDisplay] = useState("grid");
  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setSearch(value);
    props.search(value);
  }

  return (
    <>
      <div className="input-group mb-3 w-25 pt-3">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-search"></i>
        </span>
        <input
          value={search}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="Search by businnes name"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
    </>
  );
}

export default FilterBar;
