function Card(props) {
  return props.list.map((business) => (
    <div className="card" key={business.id}>
      <img
        src={business.imageUrl}
        className="card-img-top"
        alt={business.name}
      />
      <div className="ad-number">{business.adNumber}</div>
      <div className="card-body">
        <h3 className="card-title">{business.name}</h3>
        <div className="card-text text-secondary">{business.description}</div>
        <hr />
        <div>
          <i className="bi bi-telephone me-2"></i>
          {business.phoneNumber}
        </div>
        <hr />
        <div>
          <i className="bi bi-geo me-2"></i>
          {business.location}
        </div>
        <hr />
        <a href="#" className="btn btn-primary">
          Visit website
        </a>
      </div>
    </div>
  ));
}

export default Card;
