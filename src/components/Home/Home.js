import "./Home.css";

function Home() {
  return (
    <>
      <header className="bg-image">
        <div className="main__container">
          <h1>Electronics</h1>
          <h2>Laptop | Computer | Hardwares</h2>
          <a href="#" className="btn btn-transparent">
            Start Here.
          </a>
        </div>
      </header>

      <section className="">
        <div className="main__container">
          <div className="col-3 text--center">
            <img
              src="https://media.4rgos.it/i/Argos/3319-m0014-m007-m050-asym-m008-m022-laptop-guide-248175189-hero?maxW=768&qlt=75&fmt=webp"
              alt=""
              className="details-img--ball"
            />
          </div>
          <div className="col-7 details">
            <h3>Products</h3>
            <p>Buy any product through us for additional discount</p>
          </div>
        </div>
      </section>

      <section className="section--primary">
        <div className="main__container">
          <div className="col-3 features">
            <i className="fa fa-bolt"></i>
            <p>New and quality hardwares</p>
          </div>
          <div className="col-3 features">
            <i className="fa fa-bank"></i>
            <p>High availability of services 24/7</p>
          </div>
          <div className="col-3 features">
            <i className="fa fa-heart"></i>
            <p>Customer Friendly</p>
          </div>
        </div>
      </section>

      <section className="section--primary--light">
        <div className="main__container">
          <blockquote className="testimonial">
            <p>
              We have always availed their services, even at peak times they
              were able to provide service on-spot sending the engineer to our
              office. I would recommend this service to anyone. You all are
              amazing!
            </p>
            <cite>Satisfied Customer</cite>
          </blockquote>
        </div>
      </section>

      <section className="section--primary--alt bg-image bg-image-2">
        <div className="main__container text--center">
          <h3>Why Us!</h3>
          <div className="col-5 text--left">
            <ul>
              <li>We are the best</li>
              <li>On-spot service</li>
              <li>Experienced Engineers</li>
              {/* <li>It brings world peace</li>
        <li>Its free!</li> */}
            </ul>
          </div>
          <div className="col-5 text--left">
            <ul>
              <li>24/7 service</li>
              <li>1000+ happy Customers</li>
              <li>Customer centric</li>
              {/* <li> You bring world peace</li>
        <li>You like free!</li> */}
            </ul>
          </div>
        </div>
      </section>

      <section className="text--center">
        <div className="main__container">
          <h3>We are happy to help!</h3>
          <a href="#" className="btn">
            Register and book a service now
          </a>
        </div>
      </section>

      <footer>
        <div className="main__container">
          {/* <ul>
      <li><a href="#">Weblinks</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Mainpage</a></li>
    </ul> */}
        </div>
      </footer>
    </>
  );
}
export default Home;
