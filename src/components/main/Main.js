import cards from "./data";
import FilterBar from "./FilterBar";
import { useState } from "react";
import Card from "./Card";
import "./Main.css";

function BizMain() {
  const [origData, setOrigData] = useState(cards);
  const [offers, setOffers] = useState(cards);
  const [display, setDisplay] = useState("grid");

  function searchOffers(value) {
    let result = [...origData];

    if (value.length > 0) {
      result = origData.filter((offer) =>
        offer.name.toLowerCase().includes(value.toLowerCase())
      );
    }
    setOffers(result);
  }
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <FilterBar search={searchOffers} />

          <div className="d-flex gap-3">
            <button
              onClick={(e) => setDisplay("list")}
              className="btn btn-default"
            >
              <i className="bi-list-ul"></i>
            </button>
            <button
              onClick={(e) => setDisplay("grid")}
              className="btn btn-default"
            >
              <i className="bi-grid-3x3-gap-fill"></i>
            </button>
          </div>
        </div>
      </nav>

      <div className={display}>
        <Card list={offers} />
      </div>
    </>
  );
}

export default BizMain;
