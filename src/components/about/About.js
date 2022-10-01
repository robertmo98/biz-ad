import Banner from "../Banner";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <Banner
        title="About This App"
        text="What makes BizAd the #1 app for advertising businesses"
      />
      <div className="row justify-content-center text-center text-muted mt-5">
        <div className="col-md-4 col-12">
          <p>
            Everyday many business owners choose to use our app to advertise
            their business and to gain more traction to their website and online
            store.
          </p>
          <Link to="/" className="btn btn-primary">
            Start Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
