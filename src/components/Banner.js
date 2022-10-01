function Banner(props) {
  return (
    <div className="text-bg-dark p-3 text-center">
      <h1>{props.title}</h1>
      <div className="row  justify-content-center">
        <div className="col-md-4 col-12">
          <h3>{props.text}</h3>
        </div>
      </div>
    </div>
  );
}

export default Banner;
