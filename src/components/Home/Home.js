import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "./Home.module.css";

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <header className={Styles.bg_image}>
        <div className={Styles.main__container}>
          <h1>Electronics</h1>
          <h2>Laptop | Computer | Hardwares</h2>
          <Link
            to={user ? "/user" : "/login"}
            className={`${Styles.btn} ${Styles.btn_transparent}`}
          >
            {user ? `Dashboard` : `Login`}
          </Link>
        </div>
      </header>

      <section>
        <div className={Styles.main__container}>
          <div className={`${Styles.col_3} ${Styles.text_center}`}>
            <img
              src="https://media.4rgos.it/i/Argos/3319-m0014-m007-m050-asym-m008-m022-laptop-guide-248175189-hero?maxW=768&qlt=75&fmt=webp"
              alt=""
              className={Styles.details_img_ball}
            />
          </div>
          <div className={`${Styles.col_7} ${Styles.details}`}>
            <h3>Products</h3>
            <p>Buy any product through us for additional discount</p>
          </div>
        </div>
      </section>

      <section className={Styles.section_primary}>
        <div className={Styles.main__container}>
          <div className={`${Styles.col_3} ${Styles.features}`}>
            <i className="fa fa-bolt"></i>
            <p>New and quality hardwares</p>
          </div>
          <div className={`${Styles.col_3} ${Styles.features}`}>
            <i className="fa fa-bank"></i>
            <p>High availability of services 24/7</p>
          </div>
          <div className={`${Styles.col_3} ${Styles.features}`}>
            <i className="fa fa-heart"></i>
            <p>Customer Friendly</p>
          </div>
        </div>
      </section>

      <section className={Styles.section_primary_light}>
        <div className={Styles.main__container}>
          <blockquote className={Styles.testimonial}>
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

      <section
        className={`${Styles.section_primary_alt} ${Styles.bg_image} ${Styles.bg_image2}`}
      >
        <div className={`${Styles.main__container} ${Styles.text_center}`}>
          <h3>Why Us!</h3>
          <div className={`${Styles.col_5} ${Styles.text_left}`}>
            <ul>
              <li>We are the best</li>
              <li>On-spot service</li>
              <li>Experienced Engineers</li>
              {/* <li>It brings world peace</li>
        <li>Its free!</li> */}
            </ul>
          </div>
          <div className={`${Styles.col_5} ${Styles.text_left}`}>
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

      <section className={Styles.text_center}>
        <div className={Styles.main__container}>
          <h3>We are happy to help!</h3>
          <a href="/" className={Styles.btn}>
            Register and book a service now
          </a>
        </div>
      </section>

      <footer>
        <div className={Styles.main__container}>
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
