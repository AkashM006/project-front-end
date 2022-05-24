import React from "react";
import Styles from "./BookCall.module.css";

function BookAServiceCall() {
  const [complaint, setComplaint] = React.useState("");
  const [Product, setProduct] = React.useState("");
  const [Remarks, setRemarks] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={Styles.main}>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <h1 className={Styles.h1}>Book A Service Call</h1>
        <br />
        <label>
          Product:
          <input className={Styles.input}
            name="Product"
            type="text"
            value={Product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Complaint:
          <input className={Styles.input}
            name="complaint"
            type="text"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Remarks:
          <input className={Styles.input}
            name="Remarks"
            type="text"
            value={Remarks}
            onChange={(e) => setRemarks(e.target.value)}
            required
          />
        </label>
        <br />
        <button className={Styles.button}>Book!</button>
      </form>
    </div>
  );
}

export default BookAServiceCall;
